/* =====================================================
   FLYGUIDE CHAT RELAY, hardened build
   Runs on Cloudflare Workers (free tier). No terminal needed:
   1. dash.cloudflare.com > Workers & Pages > Create > Create Worker > Deploy
   2. Edit code > delete the sample > paste this whole file > Deploy
   3. Settings > Variables and Secrets > Add > Type: Secret
      Name: ANTHROPIC_API_KEY   Value: your key from console.anthropic.com
   4. Copy the worker URL, paste it into CHAT_ENDPOINT in spots.js, commit.
   Only requests from the FlyGuide site are answered. Everyone else gets a 403.
   ===================================================== */

const ALLOWED_ORIGINS = ["https://myflyguide.github.io"];

const PERSONA = `You are the head guide for FlyGuide, a saltwater fly fishing app. You talk like the dock at 5am: direct, warm, zero fluff. Real numbers always: fly sizes, leader pounds, months, mph, tide stages, clock times. Never use em dashes or en dashes anywhere, use commas and periods. Never quote bag limits, slot sizes, or seasons from memory, point the angler to the state agency links in the app instead. Access accuracy beats flattery: if you are not sure something is legal or open, say "check locally". Be honest about uncertainty and about bad fishing days, never inflate. You are given today's spot, its brief, and live conditions as context: treat that as ground truth and reason from it. Questions about other water or general fishing get your best guide knowledge. Keep answers under 180 words unless the angler asks for more.`;

const hits = new Map();

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const ok = ALLOWED_ORIGINS.includes(origin);
    const cors = {
      "Access-Control-Allow-Origin": ok ? origin : ALLOWED_ORIGINS[0],
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };
    if (request.method === "OPTIONS") return new Response(null, { status: ok ? 204 : 403, headers: cors });
    if (request.method !== "POST" || !ok) return new Response(JSON.stringify({ error: "forbidden" }), { status: 403, headers: { ...cors, "Content-Type": "application/json" } });

    const ip = request.headers.get("CF-Connecting-IP") || "x";
    const now = Date.now();
    const recent = (hits.get(ip) || []).filter((t) => now - t < 60000);
    if (recent.length >= 10) return new Response(JSON.stringify({ error: "slow down" }), { status: 429, headers: { ...cors, "Content-Type": "application/json" } });
    recent.push(now); hits.set(ip, recent);
    if (hits.size > 5000) hits.clear();

    let q = "", ctx = "";
    try {
      const body = await request.json();
      q = String(body.q || "").slice(0, 500).trim();
      ctx = JSON.stringify(body.context || {}).slice(0, 4000);
    } catch (e) {}
    if (!q) return new Response(JSON.stringify({ error: "empty" }), { status: 400, headers: { ...cors, "Content-Type": "application/json" } });

    try {
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 500,
          system: PERSONA,
          messages: [{ role: "user", content: "Context for today (ground truth):\n" + ctx + "\n\nAngler asks: " + q }]
        })
      });
      const j = await r.json();
      let text = (j.content || []).filter((b) => b.type === "text").map((b) => b.text).join("\n").trim();
      text = text.replace(/\s*[\u2013\u2014]\s*/g, ", ");
      if (!text) throw new Error("empty completion");
      return new Response(JSON.stringify({ text }), { headers: { ...cors, "Content-Type": "application/json" } });
    } catch (e) {
      return new Response(JSON.stringify({ error: "upstream" }), { status: 502, headers: { ...cors, "Content-Type": "application/json" } });
    }
  }
};
