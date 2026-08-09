# FlyGuide

The guide's call, every day, 30 days out. Fly fishing intelligence for striped bass, false albacore, tarpon, snook, redfish, and bonefish across the Northeast, Florida, and the Bahamas.

39 spot briefs written at head-guide depth, a species-aware scoring engine, a 30-day outlook with honest confidence percentages, and a chat guide loaded with the canon.

## Deploy on GitHub Pages (5 minutes)

1. Create a new GitHub repo (public), name it `flyguide`
2. Push this folder to it (`git init`, `git add -A`, `git commit -m "launch"`, add remote, push)
3. Repo Settings > Pages > Source: Deploy from a branch > `main` / root > Save
4. Site goes live at `https://YOURUSER.github.io/flyguide/` in a minute or two
5. Edit `SITE_URL` in `data/spots.js` to your real URL, run `node scripts/build-pages.mjs`, commit, push (fixes sitemap and canonical links)

`.nojekyll` is included so Pages serves everything as-is. No build step required to run the app.

## How "updates every day" works

Everything live is fetched fresh on every visit: NOAA tide predictions (31 days), Open-Meteo wind/cloud/sun (16-day forecast), and sea surface temps (7 days). Beyond the forecast horizon the engine falls back to monthly climatology. The header stamp shows when the board was recomputed.

## The confidence number

Every day on the 30-day board carries a confidence percentage:

- Tides are astronomy: near-certain the whole 30 days (96% direct station, 88% lagged estimate, 50% no feed)
- Weather is a real forecast to ~16 days, climatology after
- Composite: 35% tide + 45% weather + 20% seasonal pattern

So day 2 reads ~90% and day 28 reads ~40%. Treat low numbers as a lean, not a promise, and recheck inside a week.

## Enable the full AI chat guide, no terminal needed (recommended)

The built-in chat is a rules engine: fast, offline-friendly, but it does not think. To make it actual Claude, deploy the included proxy in your browser:

1. Sign up free at dash.cloudflare.com, go to Workers & Pages > Create > Create Worker > Deploy
2. Click Edit code, delete the sample, paste in the contents of `cloudflare-worker.js` from this repo, hit Deploy
3. Worker > Settings > Variables and Secrets > Add secret named `ANTHROPIC_API_KEY` with a key from console.anthropic.com
4. Copy the worker URL (looks like https://flyguide-chat.YOURNAME.workers.dev)
5. In GitHub, open `data/spots.js`, click the pencil icon to edit, paste the URL between the quotes of `CHAT_ENDPOINT: ""`, commit

The chat badge flips from LOCAL KNOWLEDGE to FULL AI on the next page load. If the worker ever errors, the app falls back to local answers silently. Cost: pennies, you pay Anthropic per message, Cloudflare's free tier covers the traffic.

## Enable AI chat via Supabase (alternative, uses terminal)

The built-in chat answers from a local knowledge engine. To upgrade it to Claude:

```
npm i -g supabase
supabase login
supabase init && supabase link --project-ref YOUR_PROJECT
supabase secrets set ANTHROPIC_API_KEY=sk-ant-your-key
supabase functions deploy guide-chat --no-verify-jwt
```

Paste the deployed function URL into `CHAT_ENDPOINT` in `data/spots.js`. The chat badge flips from LOCAL KNOWLEDGE to FULL AI. If the endpoint ever fails, the app falls back to local answers automatically.

## Bahamas tides (optional)

Bahamas flats have no free NOAA coverage. Get a key at worldtides.info (cheap, pay as you go), paste it into `WORLDTIDES_KEY` in `data/spots.js`, and Bahamas spots light up with real tide times and higher confidence.

## Editing spots

Everything lives in `data/spots.js`: species profiles, corridors, seasonality curves, the chat knowledge base, and all 39 spot briefs. Add or edit a spot, then:

```
node scripts/build-pages.mjs
```

That regenerates the SEO pages in `spots/`, the sitemap, and `standalone.html` (a single-file copy of the app you can double-click to preview locally).

## Honest limits

- Scores are a planning aid, not a promise. Fish move.
- Access notes were written carefully but rules change: verify locally, respect private land, stay below the high water line where that is the law.
- Boat drops and ramps are not for navigation. Read your charts.
- Regulations: the app links to the actual agencies instead of quoting limits that go stale.
