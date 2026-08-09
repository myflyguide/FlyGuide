/* FlyGuide page builder.
   Reads data/spots.js, writes spots/<id>.html SEO pages, sitemap.xml, robots.txt,
   and standalone.html (the app with data inlined, double-clickable for local preview).
   Run: node scripts/build-pages.mjs */
import { createRequire } from "module";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const require = createRequire(import.meta.url);
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
require(join(root, "data", "spots.js"));
const { FG_CONFIG, FG_SPECIES, FG_CORRIDORS, FG_SPOTS } = globalThis;

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const corr = (id) => FG_CORRIDORS.find((c) => c.id === id);
const spNames = (s) => Object.keys(s.sp).filter((k) => s.sp[k] > 0).map((k) => FG_SPECIES[k].name).join(", ");
const primarySp = (s) => Object.keys(s.sp).sort((a, b) => s.sp[b] - s.sp[a])[0];

const css = `
  :root { color-scheme: dark; }
  body { margin:0; background:#14181A; color:#EAE5D8; font:16px/1.6 'Barlow', system-ui, sans-serif; }
  main { max-width:680px; margin:0 auto; padding:28px 18px 60px; }
  .wm { font-family:'Barlow Condensed', sans-serif; font-weight:700; font-size:26px; letter-spacing:.5px; text-decoration:none; }
  .wm b { color:#E8722A; } .wm span { color:#EAE5D8; }
  h1 { font-family:'Barlow Condensed', sans-serif; font-size:38px; line-height:1.05; text-transform:uppercase; margin:18px 0 4px; }
  .sub { color:#8D978F; margin-bottom:22px; }
  h2 { font-family:'IBM Plex Mono', monospace; font-size:12px; letter-spacing:1.5px; color:#7C8B66; text-transform:uppercase; margin:22px 0 6px; }
  p { color:#C9C2B0; margin:0 0 6px; }
  .cta { display:inline-block; margin-top:26px; background:#E8722A; color:#14181A; font-weight:700; padding:12px 18px; border-radius:10px; text-decoration:none; font-family:'Barlow Condensed', sans-serif; font-size:18px; letter-spacing:.5px; }
  .fine { font-family:'IBM Plex Mono', monospace; font-size:11px; color:#8D978F; margin-top:30px; line-height:1.7; }
  a { color:#7C8B66; }
`;

const page = (s) => {
  const c = corr(s.c);
  const psp = primarySp(s);
  const desc = esc(s.brief.read).slice(0, 155);
  const url = `${FG_CONFIG.SITE_URL}/spots/${s.id}.html`;
  const app = `../index.html#spot=${s.id}&c=${s.c}&sp=${psp}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(s.name)} fly fishing guide: ${esc(spNames(s))} | FlyGuide</title>
<meta name="description" content="${desc}" />
<link rel="canonical" href="${url}" />
<meta property="og:title" content="${esc(s.name)}: ${esc(spNames(s))} on the fly" />
<meta property="og:description" content="${desc}" />
<meta property="og:type" content="article" />
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=Barlow:wght@400;600&family=IBM+Plex+Mono&display=swap" rel="stylesheet" />
<style>${css}</style>
</head>
<body><main>
<a class="wm" href="../index.html"><b>FLY</b><span>GUIDE</span></a>
<h1>${esc(s.name)}</h1>
<div class="sub">${esc(s.area)} · ${esc(s.reg)} · ${esc(spNames(s))}</div>
<h2>Read the water</h2><p>${esc(s.brief.read)}</p>
<h2>The cast</h2><p>${esc(s.brief.cast)}</p>
<h2>Rig</h2><p>${esc(s.brief.gear)}</p>
<h2>Prime time</h2><p>${esc(s.brief.prime)}</p>
<h2>When it blows out</h2><p>${esc(s.brief.blowout)}</p>
<h2>Bait</h2><p>${esc(s.bait)}</p>
<h2>Access (${esc(s.access.v)})</h2><p>${esc(s.access.n)}</p>
<h2>Wading (${esc(s.wade.r)})</h2><p>${esc(s.wade.n)}</p>
<a class="cta" href="${app}">Live score, tides &amp; 30-day board for ${esc(s.name)}</a>
<div class="fine">Regulations change: ${c.regs.map((r) => `<a href="${r.u}">${esc(r.n)}</a>`).join(" · ")}.<br/>${esc(c.accessLaw)}<br/>Planning aid, not a promise. Not for navigation.</div>
</main></body></html>`;
};

mkdirSync(join(root, "spots"), { recursive: true });
FG_SPOTS.forEach((s) => writeFileSync(join(root, "spots", `${s.id}.html`), page(s)));

const urls = [`${FG_CONFIG.SITE_URL}/`, ...FG_SPOTS.map((s) => `${FG_CONFIG.SITE_URL}/spots/${s.id}.html`)];
writeFileSync(join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}\n</urlset>\n`);
writeFileSync(join(root, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${FG_CONFIG.SITE_URL}/sitemap.xml\n`);

const idx = readFileSync(join(root, "index.html"), "utf8");
const data = readFileSync(join(root, "data", "spots.js"), "utf8");
writeFileSync(join(root, "standalone.html"), idx.replace('<script src="data/spots.js"></script>', `<script>\n${data}\n</script>`));

console.log(`built ${FG_SPOTS.length} spot pages, sitemap (${urls.length} urls), robots.txt, standalone.html`);
