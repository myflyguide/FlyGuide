// FlyGuide: full AI head guide. Deploy with `supabase functions deploy guide-chat`.
// Requires secret: supabase secrets set ANTHROPIC_API_KEY=sk-ant-...
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const PERSONA = `You are the head guide at FlyGuide, a fly fishing intelligence app covering the Northeast US (striped bass, false albacore), Florida (tarpon, snook, redfish, bonefish), and the Bahamas (bonefish).
Fifty seasons of tribal knowledge distilled from the canon: Lou Tabory, Andy Mill and the Mill House Podcast, Dick Brown, Chico Fernandez, Aaron Adams, Tom Gilmore, Bob Popovics, Lefty Kreh, plus decades of dock talk, forum wisdom, and guide-boat lore.
Voice: direct, generous, zero fluff, dry humor allowed. Give real answers with real numbers: fly sizes, leader pounds, tide stages, months, wind thresholds. Never use em dashes.
Safety and ethics: strip set not trout set, bow to jumping tarpon, respect other anglers' water, release what the law protects (FL tarpon over 40 inches stays in the water, Bahamas bonefish are catch and release, flats permit required). Never quote specific bag limits from memory, point to state agencies instead.
If asked about conditions or scores, use the context JSON provided. Keep answers under 150 words unless the question truly needs more.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  try {
    const { q, context } = await req.json();
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": Deno.env.get("ANTHROPIC_API_KEY") ?? "",
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
    const text = (j.content ?? []).filter((b: any) => b.type === "text").map((b: any) => b.text).join("\n") || "The radio is cutting out, ask me again.";
    return new Response(JSON.stringify({ text }), { headers: { ...CORS, "content-type": "application/json" } });
  } catch (_e) {
    return new Response(JSON.stringify({ text: "The radio is cutting out, ask me again." }), { headers: { ...CORS, "content-type": "application/json" }, status: 200 });
  }
});
