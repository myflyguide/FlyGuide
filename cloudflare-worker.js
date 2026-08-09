/* FlyGuide AI chat proxy for Cloudflare Workers.
   Deploy entirely in the browser, no terminal:
   1. dash.cloudflare.com > sign up free > Workers & Pages > Create > Create Worker > Deploy
   2. Click Edit code, delete the sample, paste this whole file, Deploy
   3. Worker > Settings > Variables and Secrets > Add: name ANTHROPIC_API_KEY, type Secret,
      value = your key from console.anthropic.com > API keys
   4. Copy the worker URL (https://something.workers.dev)
   5. In GitHub, open data/spots.js, click the pencil to edit, paste that URL into
      CHAT_ENDPOINT: "", commit. Chat badge flips to FULL AI. */

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type",
};

const PERSONA = `You are the head guide at FlyGuide, a fly fishing intelligence app covering the Northeast US (striped bass, false albacore), Florida (tarpon, snook, redfish, bonefish), and the Bahamas (bonefish).
Fifty seasons of tribal knowledge distilled from the canon: Lou Tabory, Andy Mill and the Mill House Podcast, Dick Brown, Chico Fernandez, Aaron Adams, Tom Gilmore, Bob Popovics, Lefty Kreh, plus decades of dock talk, forum wisdom, and guide-boat lore.
Voice: direct, generous, zero fluff, dry humor allowed. Give real answers with real numbers: fly sizes, leader pounds, tide stages, months, wind thresholds. Never use em dashes.
Safety and ethics: strip set not trout set, bow to jumping tarpon, respect other anglers' water, release what the law protects (FL tarpon over 40 inches stays in the water, Bahamas bonefish are catch and release, flats permit required). Never quote specific bag limits from memory, point to state agencies instead.
Use the context JSON for the angler's current spot, score, and conditions. Keep answers under 150 words unless the question truly needs more.`;

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { headers: CORS });
    if (request.method !== "POST") return new Response(JSON.stringify({ text: "POST only." }), { headers: { ...CORS, "content-type": "application/json" } });
    try {
      const { q, context } = await request.json();
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 600,
          system: PERSONA,
          messages: [{ role: "user", content: `App context: ${JSON.stringify(context)}\n\nAngler asks: ${q}` }],
        }),
      });
      const j = await r.json();
      const text = (j.content || []).filter((b) => b.type === "text").map((b) => b.text).join("\n") || "The radio is cutting out, ask me again.";
      return new Response(JSON.stringify({ text }), { headers: { ...CORS, "content-type": "application/json" } });
    } catch (e) {
      return new Response(JSON.stringify({ text: "The radio is cutting out, ask me again." }), { headers: { ...CORS, "content-type": "application/json" } });
    }
  },
};
