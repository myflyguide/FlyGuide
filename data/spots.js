/* ============================================================
   FLYGUIDE data file
   Single source of truth for the app, the SEO pages, and the chat guide.
   Edit here, run scripts/build-pages.mjs, commit.
   ============================================================ */
(function (g) {

g.FG_CONFIG = {
  CHAT_ENDPOINT: "",      // Supabase edge function URL for the full AI guide. Empty = built-in local guide.
  WORLDTIDES_KEY: "",     // WorldTides API key for Bahamas tide times. Empty = tide-neutral scoring with honest labeling.
  SITE_URL: "https://YOURUSER.github.io/flyguide"
};

/* ---------------- Species profiles ---------------- */
g.FG_SPECIES = {
  striper: {
    name: "Striped Bass", short: "Striper",
    temp: { min: 45, lo: 52, hi: 68, max: 76 },
    lowLight: true, sight: false,
    gear: "9wt is the workhorse, 8 for estuaries, 10 for rips and wind. 9ft rod, intermediate line as the default, 250 to 350 grain sink for current, floating for flats and gurglers. 16 to 20lb leader, 3 to 4ft of it after a sink tip.",
    technique: "Strip strip pause. Two-hand retrieve when fish want it fast. Strip set, never lift the rod. Work structure edges and current seams, not open water.",
    diet: "Spring: river herring, mackerel, squid. Summer: sand eels, silversides, juvenile menhaden. Fall: peanut bunker, bay anchovies, mullet down south. Always: crabs and shrimp on the flats.",
    flies: "Clouser 1/0 to 2/0 olive/white or chartreuse/white, Deceivers, Hollow Fleyes for big profiles, sand eel patterns (Jiggy, Surf Candy) when they are on the small stuff, Gurgler at first light, crab flies on the flats.",
    colors: "Clear water and sun: olive/white, tan, natural. Dirty water or dark: black/purple, all black at night. Chartreuse splits the difference and rarely hurts."
  },
  albie: {
    name: "False Albacore", short: "Albie",
    temp: { min: 62, lo: 65, hi: 74, max: 78 },
    lowLight: false, sight: true,
    gear: "9 or 10wt, floating or clear intermediate, 10 to 12ft leader to 15 or 20lb fluoro. A sealed drag reel with 200 yards of backing is not optional, it is the whole event.",
    technique: "Cast ahead of the school, not at it. Two-hand strip as fast as you physically can, or dead-drift the fly in the melee. When one eats, clear the line and let it run. Do not chase busts in a circle, set up on the bait and let them come through.",
    diet: "Bay anchovies (the rain bait), silversides, sand eels, peanut bunker. They key on one size and shape and will refuse everything else.",
    flies: "Small and translucent: Surf Candy, epoxy anchovy, Gummy Minnow, Albie Anchovy #1 to #4. Match the bait length exactly, err smaller.",
    colors: "Translucent tan, olive over white, pearl. On rain bait go tiny and ghostly. Flash helps in chop, hurts in glass calm."
  },
  tarpon: {
    name: "Tarpon", short: "Tarpon",
    temp: { min: 68, lo: 75, hi: 88, max: 92 },
    lowLight: false, sight: true,
    gear: "11 or 12wt, floating tropical line, 9ft rod. Leader: 5ft butt, 20lb class, 60 to 80lb fluoro shock. Check every knot twice, they find the bad one.",
    technique: "Feed the fish, do not line it. Lead the string, let the fly sink to eye level, slow strips until she tracks, then keep it moving. Strip set hard, twice, then bow to every jump. Clear the line off the deck like your trip depends on it.",
    diet: "Mullet, pilchards, threadfins, crabs, shrimp, and the palolo worm hatch in the Keys around the May and June full moons, which turns careful fish stupid for two evenings a year.",
    flies: "Tarpon Toad, Cockroach, EP baitfish, Palolo worm patterns in season, black death when its dark or dirty.",
    colors: "Bright day and clear water: tan, chartreuse over white toads. Low light, dirty water, or pressured fish: black/purple. Worm hatch: orange/red worm flies, nothing else matters those nights."
  },
  snook: {
    name: "Snook", short: "Snook",
    temp: { min: 58, lo: 68, hi: 86, max: 92 },
    lowLight: true, sight: true,
    gear: "8 or 9wt, floating line for the beach and mangroves, intermediate for passes. 30 to 40lb fluoro shock leader always, the gill plates cut anything lighter.",
    technique: "On the beach, walk the sand at dawn and cast parallel to shore in the first trough, the fish are in inches of water. On structure, hit the shadow line tight and strip fast and erratic. Night dock lights: small white fly, dead drift into the light edge, hang on.",
    diet: "Pilchards, glass minnows, mullet (the fall run is their Christmas), shrimp on the winter dock lights, crabs in the passes.",
    flies: "EP pilchard, small white Deceiver or Clouser, DT Special, Gurgler at first light, tiny glass minnow patterns for picky beach fish, shrimp patterns under lights.",
    colors: "White, white, and white. Chartreuse/white in stained water, all black at night in the dark, tan glass minnow when they get snotty on the beach."
  },
  redfish: {
    name: "Redfish", short: "Redfish",
    temp: { min: 50, lo: 60, hi: 85, max: 92 },
    lowLight: false, sight: true,
    gear: "8wt is perfect, 7 in calm marsh, 9 in wind. Floating line, 9ft leader to 16 or 20lb. Weedless matters more than pattern in grass.",
    technique: "Lead a tailing fish by 2 to 3 feet, let the fly land soft, drag it into the dinner plate window and hop it once. They eat down, so get it on the bottom. Strip set. On cruisers, cross their nose and match their speed.",
    diet: "Crabs first, then shrimp, mullet, killifish, and whatever the flood tide puts on the spartina flats: fiddlers by the thousand.",
    flies: "Kwan, Redfish Crack, EP crab and spoon flies, black/purple in dirty water, copper and tan in clear, weedless everything for the grass.",
    colors: "Clear water: tan, copper, olive. Dirty marsh: black/purple with a little flash, or gold spoon fly which they see from a zip code away."
  },
  bonefish: {
    name: "Bonefish", short: "Bonefish",
    temp: { min: 70, lo: 74, hi: 88, max: 92 },
    lowLight: false, sight: true,
    gear: "8wt, floating tropical line, 10 to 12ft leader to 12 or 16lb fluoro. Fly weight matters more than pattern: bead chain for skinny water, lead eyes for thigh deep, dumbbell for current.",
    technique: "Long lead, soft landing, let it sink to the bottom, then small strips only when the fish can see it. When it tips down, one long slow strip, feel weight, strip set and clear the line off your feet before it hits the backing. Do not trout set. Ever.",
    diet: "Shrimp, small crabs, gobies, clams and worms rooted out of the marl. On big Andros fish, bigger shrimp and crabs than you think.",
    flies: "Gotcha, Crazy Charlie, Spawning Shrimp, Bonefish Bitters, mantis shrimp patterns, small crab flies for tailers. #2 to #8, weight matched to depth.",
    colors: "Match the bottom: tan and pearl over sand, olive and rust over turtle grass, pink works everywhere in the Bahamas for reasons nobody has ever explained."
  }
};

/* ---------------- Corridors ---------------- */
/* seasonal: per species, 12 monthly values 0..1, interpolated by day of month */
g.FG_CORRIDORS = [
  {
    id: "ne", name: "Northeast & Mid-Atlantic", short: "Northeast",
    species: ["striper", "albie"],
    lat: 41.5, lng: -71.3, mlat: 41.3, mlng: -71.2,
    sstFallback: [40, 39, 42, 47, 54, 62, 68, 70, 66, 58, 50, 44],
    windClimo: [14, 13, 13, 12, 10, 9, 8, 8, 10, 12, 13, 14],
    seasonal: {
      striper: [0, 0, 0.05, 0.35, 0.85, 0.95, 0.85, 0.8, 1.0, 0.85, 0.3, 0.05],
      albie:   [0, 0, 0, 0, 0, 0.05, 0.15, 0.55, 1.0, 0.9, 0.25, 0]
    },
    zips: ["038", "039", "019", "020", "021", "025", "026", "028", "029", "063", "115", "119", "077", "087", "285"],
    towns: ["Portsmouth NH", "Rye NH", "Hampton NH", "Stratham NH", "Newburyport MA", "Chatham MA", "Brewster MA", "Provincetown MA", "Marthas Vineyard MA", "Montauk NY", "Narragansett RI", "Watch Hill RI", "Westerly RI", "Sandy Hook NJ", "Seaside Park NJ", "Harkers Island NC", "Beaufort NC"],
    regs: [
      { n: "NH Fish & Game saltwater", u: "https://www.wildlife.nh.gov/fishing-new-hampshire/saltwater-fishing" },
      { n: "MA DMF recreational regs", u: "https://www.mass.gov/info-details/recreational-saltwater-fishing-regulations" },
      { n: "RI DEM marine fisheries", u: "https://dem.ri.gov/natural-resources-bureau/marine-fisheries" },
      { n: "NY DEC saltwater", u: "https://dec.ny.gov/things-to-do/saltwater-fishing" },
      { n: "NJ saltwater registry & regs", u: "https://dep.nj.gov/njfw/fishing/marine/" },
      { n: "NC DMF regs (albies)", u: "https://www.deq.nc.gov/about/divisions/marine-fisheries" }
    ],
    accessLaw: "Tideline law varies hard up here. In MA and ME the intertidal zone is private to the low water mark, but fishing and fowling access is protected under the colonial ordinance. NH, RI, CT, NY, NJ: public trust below mean high water. When in doubt, stay wet."
  },
  {
    id: "fl", name: "Florida", short: "Florida",
    species: ["tarpon", "snook", "redfish", "bonefish"],
    lat: 26.5, lng: -81.9, mlat: 26.4, mlng: -82.2,
    sstFallback: [66, 66, 70, 75, 80, 84, 86, 87, 86, 81, 74, 69],
    windClimo: [11, 12, 12, 11, 9, 8, 7, 7, 9, 11, 11, 11],
    seasonal: {
      tarpon:   [0.15, 0.2, 0.4, 0.75, 1.0, 0.95, 0.7, 0.55, 0.55, 0.45, 0.25, 0.15],
      snook:    [0.3, 0.35, 0.6, 0.8, 0.9, 0.9, 0.85, 0.9, 1.0, 0.9, 0.6, 0.35],
      redfish:  [0.6, 0.6, 0.7, 0.8, 0.8, 0.75, 0.7, 0.85, 1.0, 1.0, 0.85, 0.7],
      bonefish: [0.3, 0.3, 0.5, 0.8, 0.9, 0.85, 0.7, 0.7, 0.8, 0.9, 0.7, 0.4]
    },
    zips: ["330", "331", "332", "333", "334", "339", "341", "342", "336", "337", "327", "329", "320", "322", "346", "344"],
    towns: ["Islamorada FL", "Marathon FL", "Key West FL", "Miami FL", "Flamingo FL", "Everglades City FL", "Chokoloskee FL", "Sanibel FL", "Boca Grande FL", "Homosassa FL", "Tampa FL", "St Petersburg FL", "Titusville FL", "Sebastian FL", "Jupiter FL", "St Augustine FL", "Jacksonville FL"],
    regs: [
      { n: "FWC saltwater regs (snook stamp, tarpon C&R, slot limits)", u: "https://myfwc.com/fishing/saltwater/recreational/" }
    ],
    accessLaw: "Florida beaches are public below the mean high water line (the wet sand). Tarpon are catch and release only, fish over 40 inches stay in the water, that is the law. Snook takes a permit stamp and has seasons and slots that change by coast, check FWC before you keep anything."
  },
  {
    id: "bah", name: "Bahamas", short: "Bahamas",
    species: ["bonefish"],
    lat: 24.7, lng: -76.3, mlat: 24.7, mlng: -76.3,
    sstFallback: [74, 74, 76, 79, 82, 85, 87, 88, 87, 84, 80, 76],
    windClimo: [13, 13, 12, 11, 10, 9, 9, 9, 9, 11, 12, 13],
    seasonal: {
      bonefish: [0.7, 0.75, 0.9, 1.0, 1.0, 0.9, 0.7, 0.55, 0.55, 0.85, 0.9, 0.8]
    },
    zips: [],
    towns: ["Marsh Harbour Abaco", "Cherokee Sound Abaco", "Andros Town", "Cargill Creek Andros", "Governors Harbour Eleuthera", "Rock Sound Eleuthera", "George Town Exuma", "Deadmans Cay Long Island", "McLeans Town Grand Bahama"],
    regs: [
      { n: "Bahamas flats fishing regulations (license required, bones are C&R)", u: "https://www.bahamas.com/plan-your-trip/fishing-regulations" }
    ],
    accessLaw: "Since 2017 the Bahamas requires a flats fishing permit for everyone, and bonefish are catch and release. DIY wading is legal on most flats but some are guide-only by local agreement. Ask at the lodge or settlement before you walk somebody's home water, it buys you more than goodwill."
  }
];

/* ---------------- Chat guide knowledge base ---------------- */
g.FG_KB = {
  persona: "You are the head guide at FlyGuide. Fifty seasons of tribal knowledge from Tabory to Mill to the dock talk nobody writes down. Direct, generous, zero fluff. You give real answers with real numbers: fly sizes, leader pounds, tide stages, months.",
  canon: [
    "Lou Tabory, Inshore Fly Fishing: the striper bible",
    "Andy Mill, A Passion for Tarpon, and the Mill House Podcast archive",
    "Dick Brown, Fly Fishing for Bonefish",
    "Chico Fernandez, Fly-Fishing for Bonefish",
    "Aaron Adams, The Fisherman's Coast: the science under the tribal knowledge",
    "Tom Gilmore, False Albacore",
    "Bob Popovics & Ed Jaworowski, Pop Fleyes: fly design for salt",
    "Lefty Kreh, Fly Fishing in Salt Water",
    "Tom Rowland Podcast and the Saltwater Experience school of skiff craft"
  ],
  faq: [
    { k: ["strip set", "trout set", "hook set"], a: "Strip set. Keep the rod tip at the water, pointed at the fly, and set by pulling the line hard with your stripping hand. Lift the rod on a saltwater eat and you pull the fly out of its mouth, then it is gone and so is your shot. Tarpon get two hard strip sets, bones get one long firm pull, everything gets the rod bent only after the hook is home." },
    { k: ["worm hatch", "palolo"], a: "Two worm events matter. Keys palolo hatch: around the May and June full moons, late afternoon outgoing tide, worms flush off the reef edges and tarpon lose their minds for orange and red worm flies. Rhode Island cinder worms: May and June in the salt ponds on warm evenings around the moons, small red and tan worm flies, slow lift retrieve, maddening and glorious." },
    { k: ["leader", "tippet", "shock"], a: "Striper: 9ft to 16 or 20lb, shorten to 3ft off a sink tip. Albie: 10 to 12ft to 15 or 20lb fluoro, they see everything. Bonefish: 10 to 12ft to 12 or 16lb. Tarpon: class section plus 60 to 80lb fluoro shock. Snook: always 30 to 40lb shock, the gill plates are razors. Redfish: 9ft to 16 or 20lb, they are not leader shy, they are presentation shy." },
    { k: ["fly color", "what color", "colors"], a: "The rule that survives every fishery: bright day bright fly, dark day dark fly, clear water natural, dirty water loud or black. Black and purple silhouettes best in low light and stained water. Match the bottom for bones (tan on sand, olive on grass), match the bait for everything that chases (size first, profile second, color third)." },
    { k: ["license", "regs", "regulations", "legal", "keep", "season limit"], a: "Rules change yearly and by state, so I will not quote you a slot limit from memory. The regs links in the footer go to the actual agencies. Non-negotiables that do not change: Florida tarpon is catch and release, over 40 inches stays in the water. Bahamas bonefish are catch and release and you need a flats permit. Snook needs an FWC permit stamp and the seasons close after cold kills." },
    { k: ["what rod", "which rod", "rod weight", "setup"], a: "One rod to travel the whole map: a 9wt with a floating and an intermediate line covers striper, snook, redfish, albies, and Bahamas bones in wind. Add an 8wt floater for calm flats and a 11 or 12wt if tarpon are the mission. Nobody ever came home complaining the rod was too big in the wind." },
    { k: ["confidence", "accuracy", "how accurate", "probability"], a: "Every day on the 30-day board carries a confidence number. Tides are astronomy, they are basically locked a year out. Weather is real forecast out to about 16 days and climatology after that. So day 3 might read 88 percent and day 26 reads 40, which means treat it as a lean, not a promise. Recheck inside a week, the board updates itself every time you open it." },
    { k: ["mullet run"], a: "September into October, the fall mullet run pours down the Florida Atlantic coast and every predator with a pulse follows it: snook in the trough, tarpon crashing pods, big jacks. Beach at dawn, big white baitfish fly or a Gurgler, cast parallel and hang on. It is the best month of shore fishing in the state." },
    { k: ["tailing", "tailer", "flood tide"], a: "Tailing fish are feeding fish with their heads down and guards down. Reds tail on flood tides over spartina grass, Jacksonville through the Lowcountry, biggest tides of August through October. Bones tail on early incoming across soft flats. Lead them 2 to 3 feet, land it soft, move it only when they can see it, and do not cast at the tail, the dinner end is the other end." },
    { k: ["hurricane", "storm", "front"], a: "Two days before a front can be the best fishing of the month, the fish feel it and feed. The day it passes, stay home and tie flies. Bahamas and Florida June through November is hurricane season: the app will score it, but watch the tropics yourself, no score is worth a boat on your rental car." }
  ]
};

/* ---------------- Spots ---------------- */
g.FG_SPOTS = [
  /* ================= NORTHEAST & MID-ATLANTIC ================= */
  { id: "odiorne", c: "ne", reg: "NH Seacoast", name: "Odiorne Point", area: "Rye NH",
    lat: 43.0448, lng: -70.7132, sp: { striper: 1 }, water: "flat", sight: false,
    station: "8423898", stName: "Fort Point NH", lag: 0, tidePref: "incoming", expo: 110,
    access: { v: "Public, fee lot", n: "Odiorne Point State Park, day fee, gates dawn to dusk. Below mean high water is public trust in NH." },
    wade: { r: "Easy", best: "high", n: "The flat wades easy and fish push on with the flood. Top half of the tide is the game." },
    boat: { ramps: [{ n: "Odiorne Point boat ramp", la: 43.0472, lo: -70.7205 }], drops: [] },
    bait: "May juvenile herring, June to August sand eels and silversides, September peanut bunker along the rocks.",
    brief: {
      read: "A boulder flat where Berry Brook drains warm marsh water across cool coast. Bass slide on with the flood to root the rockweed, then stage on the outer boulders as it drops.",
      cast: "Work the brook outlet seam first, then fan the flat. Fish move in singles and pairs, so pick a lane and let them come. Sixty feet covers everything.",
      gear: "9wt, intermediate, olive/white Clouser 1/0. Gurgler over the flat at first light before the sun gets on it.",
      prime: "Flood tide that peaks within two hours of dawn or dusk, light southwest wind.",
      blowout: "Hard east wind dirties it fast. Bail to the Squamscott outgoing or the Piscataqua rips."
    }, al: ["odiorne"] },

  { id: "squamscott", c: "ne", reg: "NH Seacoast", name: "Squamscott River", area: "Stratham NH",
    lat: 43.0355, lng: -70.9105, sp: { striper: 1 }, water: "river", sight: false,
    station: "8423898", stName: "Fort Point NH", lag: 150, tidePref: "outgoing", expo: 0,
    access: { v: "Public", n: "Chapmans Landing ramp off Route 108. Tide here runs about 2.5 hours behind the coast, the app corrects for it." },
    wade: { r: "Moderate", best: "mid", n: "Wade off the ramp at low to mid. The top of the tide floods the sod banks and turns the mud soft." },
    boat: { ramps: [{ n: "Chapmans Landing ramp", la: 43.0355, lo: -70.9110 }], drops: [] },
    bait: "April and May river herring stack the channel. June shrimp and silversides on the edges. By August the river runs warm and empties out.",
    brief: {
      read: "A tidal river draining Great Bay. Spring is the show: herring run upstream and the bass hold on the outside bends and channel edges picking them off.",
      cast: "Swing big herring patterns through the seams on the outgoing like a steelhead run. Cast quartering down, one mend, let it tension and hang at the dangle.",
      gear: "9wt, 250 grain sink tip in the channel, intermediate on the edges. White Hollow Fleye or a 3/0 herring Deceiver in May.",
      prime: "May and early June, first three hours of outgoing, dawn or dusk.",
      blowout: "July and August the water goes warm and the river is a ghost town. Do not fight it, fish the coast and come back in late September."
    }, al: ["squamscott", "chapmans", "great bay"] },

  { id: "joppa", c: "ne", reg: "North Shore MA", name: "Joppa Flats", area: "Newburyport MA",
    lat: 42.8100, lng: -70.8550, sp: { striper: 1 }, water: "flat", sight: true,
    station: "8443970", stName: "Boston MA", lag: 0, tidePref: "incoming", expo: 90,
    access: { v: "Public", n: "Free lot at Joppa Park on Water St. MA intertidal is private to low water but fishing access is protected under the colonial ordinance." },
    wade: { r: "Easy", best: "high", n: "Flats wade easy, fish arrive with the flood. Know your exit line before the bars cover." },
    boat: { ramps: [{ n: "Cashman Park ramp", la: 42.8158, lo: -70.8880 }], drops: [{ n: "Merrimack mouth bars", la: 42.8165, lo: -70.8110, note: "Drift the outgoing seams off the north jetty, birds tell you which bar." }] },
    bait: "Sand eels all season, juvenile menhaden by July, shrimp on the flood edges in June.",
    brief: {
      read: "The Merrimack pours nutrients over miles of hard sand. Bass ride the flood over the bars in skinny water, often visibly pushing wakes.",
      cast: "This is New England sight fishing. Watch for nervous water and wakes, lead the push by ten feet, small sand eel fly, do not line them.",
      gear: "8 or 9wt, floating or clear intermediate, sand eel patterns #2 to 1/0, 12ft leader. Crab fly for fish rooting the bottom.",
      prime: "Midday flood tides May through July, sun high so you can see, wind under 12.",
      blowout: "Northeast blow muddies the river plume. Swing the state ramp side of the jetties on the drop instead."
    }, al: ["joppa", "newburyport", "merrimack"] },

  { id: "canal", c: "ne", reg: "Cape Cod", name: "Cape Cod Canal", area: "Sandwich MA",
    lat: 41.7710, lng: -70.4940, sp: { striper: 1 }, water: "current", sight: false,
    station: "8443970", stName: "Boston MA", lag: 0, tidePref: "moving", expo: 20,
    access: { v: "Public", n: "Free lots along the service road both banks. Fishing from a boat inside the land cut is prohibited, this is bank fishing only." },
    wade: { r: "Bank only", best: "any", n: "Never wade the Canal. Six knots of current will end your season and maybe you. Riprap casting only." },
    boat: { ramps: [], drops: [] },
    bait: "Mackerel and herring flushing through spring, sand eels and squid mid-season, adult menhaden pushing east tides in July.",
    brief: {
      read: "The Big Ditch. A seven mile river of ocean that reverses every six hours, and when the east tide lines up with dawn the biggest bass in the Northeast eat on top.",
      cast: "Honest talk: fly water here means the tide turns and the edges. 450 grain head, cast up-current, let it swing the seam at your feet. Breaking fish at range belong to the jig guys.",
      gear: "10wt minimum, 450 grain, short 30lb leader, big Hollow Fleye or squid fly. A bike on the service road doubles your water.",
      prime: "East tide through first light, June and July around the moons when the big fish transit.",
      blowout: "The Canal itself rarely blows out. If the tide is wrong, Scorton Creek is ten minutes east for the marsh game."
    }, al: ["canal", "ditch", "sandwich"] },

  { id: "brewster", c: "ne", reg: "Cape Cod", name: "Brewster Flats", area: "Brewster MA",
    lat: 41.7730, lng: -70.0800, sp: { striper: 1 }, water: "flat", sight: true,
    station: "8443970", stName: "Boston MA", lag: 0, tidePref: "incoming", expo: 0,
    access: { v: "Public, sticker lots", n: "Town landings (Paines Creek, Point of Rocks) have resident sticker rules in summer, arrive at dawn or bike in." },
    wade: { r: "Easy", best: "low", n: "Walk out on the drop, fish the first of the flood, and keep a dry line home. The tide crosses this flat faster than you walk." },
    boat: { ramps: [{ n: "Sesuit Harbor ramp", la: 41.7530, lo: -70.1550 }], drops: [] },
    bait: "Sand eels in the guzzles, green crabs on the bars, silversides against the grass edges.",
    brief: {
      read: "Two miles of hard sand that empties at low. Bass slide up the guzzles with the new flood and cruise in a foot of water like bonefish with shoulders.",
      cast: "Set up on a bar edge, sun behind you, and take shots at cruising singles. Long lead, soft landing, one strip when the fish is inside six feet of the fly.",
      gear: "8wt, floating line, 12ft leader, crab and sand eel flies #4 to #1. Quiet feet, no wading skirts of spray.",
      prime: "First two hours of incoming, mid-morning through afternoon for sun, wind under 10.",
      blowout: "Cloud kills the sight game. Blind the guzzle mouths on the same tide or run to the Canal turn."
    }, al: ["brewster", "flats"] },

  { id: "race-point", c: "ne", reg: "Cape Cod", name: "Race Point", area: "Provincetown MA",
    lat: 42.0810, lng: -70.2180, sp: { striper: 1, albie: 0.35 }, water: "beach", sight: false,
    station: "8443970", stName: "Boston MA", lag: -20, tidePref: "moving", expo: 20,
    access: { v: "Public, fee", n: "National Seashore lot, entrance fee, ORV corridor with permit. The rip is a short walk west of the lot." },
    wade: { r: "Easy", best: "any", n: "Easy sand, but the bar drops into deep green water fast. Ankle to knee deep is plenty, the fish are at your feet." },
    boat: { ramps: [{ n: "Provincetown ramp", la: 42.0490, lo: -70.1830 }], drops: [] },
    bait: "Sand eels by the acre, mackerel in June, peanut bunker and anchovies in the fall sweep.",
    brief: {
      read: "Deep water sweeps a sand point and the rip runs within a fly cast of dry sand. Fish feed at your bootlaces here more than anywhere in the Northeast.",
      cast: "Cast up-current into the rip line and swing it like a wet fly. Two-hand retrieve when they chase, dead drift when they are on sand eels thick.",
      gear: "9 or 10wt, intermediate or 300 grain, sand eel flies and white Deceivers. Fall run: bring the albie box too, they crash bait inside the bar.",
      prime: "Moving tide at first light, June and again September into October. Mind the seals, where they stack the sharks patrol.",
      blowout: "Big northeast swell closes it out. Herring Cove around the corner fishes the lee."
    }, al: ["race point", "provincetown", "ptown"] },

  { id: "monomoy", c: "ne", reg: "Cape Cod", name: "Monomoy Flats", area: "Chatham MA",
    lat: 41.6180, lng: -69.9880, sp: { striper: 1 }, water: "flat", sight: true,
    station: "8443970", stName: "Boston MA", lag: -60, tidePref: "incoming", expo: 90,
    access: { v: "Boat smart", n: "The outside flats are a boat or shuttle ride from Chatham. Rip Ryder shuttle runs from Outermost Harbor in season. Tide times here are estimates off Boston." },
    wade: { r: "Easy once there", best: "low", n: "Hard sand wading for miles once the boat drops you. Watch the tide, the bars flood from behind." },
    boat: { ramps: [{ n: "Outermost Harbor", la: 41.6660, lo: -69.9520 }], drops: [{ n: "Common Flat edge", la: 41.6330, lo: -70.0050, note: "Stake off the west edge on the young flood and walk the bar line." }] },
    bait: "Sand eels are the whole story, with squid pulses in June out on the rips.",
    brief: {
      read: "The famous ocean flats. Big schools of bass flood across white sand in gin water and you get bonefish-style shots at 20 pound fish.",
      cast: "Sun high, wind at your back, lead the school and let them find it. One fish peeling off the edge is your target, not the middle of the pack.",
      gear: "9wt, floating, 12ft leader to 20lb, sand eel and crab flies. Bring more backing than pride.",
      prime: "June and July, incoming water, 10am to 3pm sun window.",
      blowout: "Fog is the killer out here and it comes fast. If it socks in, fish the Chatham inlets on the drop."
    }, al: ["monomoy", "chatham", "south beach"] },

  { id: "lobsterville", c: "ne", reg: "Cape & Islands", name: "Lobsterville Beach", area: "Aquinnah, Marthas Vineyard MA",
    lat: 41.3530, lng: -70.7780, sp: { striper: 1, albie: 0.9 }, water: "beach", sight: false,
    station: "8443970", stName: "Boston MA", lag: -200, tidePref: "moving", expo: 350,
    access: { v: "Public, tight parking", n: "Limited roadside on Lobsterville Rd, or bike from the Menemsha bike ferry. Tide here runs hours off Boston, treat times as estimates." },
    wade: { r: "Easy", best: "any", n: "Gentle sand and gravel the whole stretch, the friendliest wade in the Northeast." },
    boat: { ramps: [{ n: "Menemsha ramp", la: 41.3540, lo: -70.7680 }], drops: [] },
    bait: "Squid runs at night in early summer, sand eels all season, bay anchovies balled against the beach in September.",
    brief: {
      read: "The most fly-friendly beach in New England. Calm sound-side water, bait pinned against the shore, and the Menemsha jetty current next door.",
      cast: "Night game: unweighted squid fly on a slow swing, listen for pops. Day game in fall: albies run the beach at casting range, lead the melee and strip like you mean it.",
      gear: "9wt covers both. Floating for night squid, intermediate and small anchovy flies when the albies show.",
      prime: "June nights around the squid, then September when albies and bass double up.",
      blowout: "A north blow puts it in your face. Flip to the south shore ponds through the cuts."
    }, al: ["lobsterville", "vineyard", "menemsha", "aquinnah"] },

  { id: "montauk", c: "ne", reg: "Long Island NY", name: "Montauk Point", area: "Montauk NY",
    lat: 41.0720, lng: -71.8570, sp: { striper: 1, albie: 1 }, water: "rocky", sight: false,
    station: "8510560", stName: "Montauk NY", lag: 0, tidePref: "moving", expo: 90,
    access: { v: "Public, fee lot", n: "State park lot at the Light. Fall weekends are a circus, fish weekdays or dawn." },
    wade: { r: "Tricky", best: "low", n: "Slick boulders under the Light, studded boots not optional. The north bar wades at moderate stages." },
    boat: { ramps: [{ n: "Montauk public ramp, East Lake Dr", la: 41.0740, lo: -71.9360 }], drops: [{ n: "North rips", la: 41.0800, lo: -71.8500, note: "Set up-tide of the rip lines and drift the seams, respect the fleet pecking order." }] },
    bait: "Bay anchovies and peanut bunker in the fall blitz, sand eels spring, squid on the reefs.",
    brief: {
      read: "The End. Every migrating fish on the coast rounds this point, and in October the white water under the Light turns into the best surf blitz on earth.",
      cast: "Albies first light off the north bar: small anchovy fly, two-hand strip. Bass in the wash: white Hollow Fleye swung through the boulders. Stay mobile, the bait moves and you move with it.",
      gear: "10wt, intermediate plus a 350 grain, anchovy flies #2, big white profiles for bass. Korkers, drysuit-tough waders, a stripping basket or lose your line to the rocks.",
      prime: "Mid-September through early November, moving tide at dawn.",
      blowout: "It takes a real gale to kill Montauk, the fish just switch sides. North wind fish the south side, south wind fish the north bar."
    }, al: ["montauk", "the end", "the light"] },

  { id: "napatree", c: "ne", reg: "Rhode Island", name: "Napatree Point", area: "Watch Hill RI",
    lat: 41.3050, lng: -71.8800, sp: { striper: 1, albie: 0.9 }, water: "beach", sight: false,
    station: "8452660", stName: "Newport RI", lag: 0, tidePref: "moving", expo: 200,
    access: { v: "Public, paid village lots", n: "Park in Watch Hill village and walk the spit. The walk filters the crowd, worth every step." },
    wade: { r: "Easy", best: "any", n: "Easy sand the length of the spit. The point current deserves respect on big tides." },
    boat: { ramps: [{ n: "Avondale ramp, Pawcatuck River", la: 41.3390, lo: -71.8560 }], drops: [] },
    bait: "Silversides and sand eels along the bars, bay anchovies pinned at the point in September, squid in the Sound current.",
    brief: {
      read: "A mile of sand ending in rips where Fishers Island Sound meets the ocean. Bass work the bars the whole walk, albies wrap the point in fall.",
      cast: "Fish your way out: cast to the bar edges every hundred yards. At the point, swing the rip seam and watch up-current for albie showers moving down the beach.",
      gear: "9wt, intermediate, sand eel flies and a Surf Candy box. Fall mornings carry both rods if you own them.",
      prime: "September and October, first light, moving water at the point.",
      blowout: "Southerly gale puts swell on it. The Weekapaug and Quonnie breachways fish the outgoing in the lee."
    }, al: ["napatree", "watch hill"] },

  { id: "charlestown", c: "ne", reg: "Rhode Island", name: "Charlestown Breachway", area: "Charlestown RI",
    lat: 41.3560, lng: -71.6350, sp: { striper: 1, albie: 0.8 }, water: "inlet", sight: false,
    station: "8452660", stName: "Newport RI", lag: 0, tidePref: "outgoing", expo: 180,
    access: { v: "Public", n: "State lot at the breachway, fills at prime tides. The camp ground crowd owns the rock spots by 5am in season." },
    wade: { r: "Moderate", best: "any", n: "Fish the rocks or wade the beach beside the outflow. Never wade the channel, the outgoing will take you to Block Island." },
    boat: { ramps: [{ n: "Charlestown Breachway ramp", la: 41.3570, lo: -71.6360 }], drops: [] },
    bait: "The salt pond is a bait factory: silversides, shrimp, crabs flushing every outgoing, cinder worms in the pond in late May, anchovies in fall.",
    brief: {
      read: "A salt pond empties through a granite chute twice a day and everything that swims lines up in the outflow. The classic Rhody night game.",
      cast: "Drift the fly down the seam like the eel guys drift eels: cast up-current, big mend, let it tumble to the waiting fish. Two hours either side of dead low at night is church.",
      gear: "9wt, intermediate or sink tip, black Deceiver at night, shrimp and silverside flies. Fall daylight: albies crash the mouth, small epoxy anchovy.",
      prime: "Outgoing tide overlapping dusk to dawn, June and September.",
      blowout: "This spot loves ugly weather. If flat calm kills the night bite, hit the pond flats inside for cruisers at first light."
    }, al: ["charlestown", "breachway"] },

  { id: "pt-judith", c: "ne", reg: "Rhode Island", name: "Point Judith", area: "Narragansett RI",
    lat: 41.3610, lng: -71.4850, sp: { albie: 1, striper: 0.8 }, water: "rocky", sight: false,
    station: "8452660", stName: "Newport RI", lag: 0, tidePref: "moving", expo: 170,
    access: { v: "Public", n: "Free DEM lot at Camp Cronin, right on the water. The wall and the rocks west of the light are the fly water." },
    wade: { r: "Bank only", best: "any", n: "Rock perches, no wading. The flat shelf by the lighthouse gives stable footing and a clean backcast." },
    boat: { ramps: [{ n: "Galilee state ramp", la: 41.3800, lo: -71.5060 }], drops: [] },
    bait: "Bay anchovies stack against the point in September like smoke, peanut bunker in the harbor of refuge, sand eels on the beaches either side.",
    brief: {
      read: "Rhode Island albie headquarters. Current wraps the point, bait piles against the rocks, and from late August the funny fish eat within a cast of shore.",
      cast: "Watch the water, not your phone. When the shower erupts, one cast ahead of the direction of travel, strip until your arm cramps. Between blitzes blind the seams, they are still there.",
      gear: "9 or 10wt, floating or clear tip, 12ft leader to 16lb fluoro, Surf Candy and Albie Anchovy #2 to #4.",
      prime: "Labor Day through mid-October, first three hours of light, any moving tide.",
      blowout: "Albies want clean water. After a blow give it a day to green up, or slide inside the Harbor of Refuge where it cleans first."
    }, al: ["point judith", "camp cronin", "judith"] },

  { id: "sandy-hook", c: "ne", reg: "New Jersey", name: "Sandy Hook", area: "Highlands NJ",
    lat: 40.4650, lng: -73.9980, sp: { striper: 1, albie: 0.7 }, water: "beach", sight: false,
    station: "8531680", stName: "Sandy Hook NJ", lag: 0, tidePref: "moving", expo: 90,
    access: { v: "Public, fee in season", n: "Gateway NRA lots, beach fee in summer, night fishing permit for after hours. The tip is a walk from Lot C." },
    wade: { r: "Easy", best: "any", n: "Easy sand ocean side. Bay side flats are soft in spots, test before you commit." },
    boat: { ramps: [{ n: "Leonardo state ramp", la: 40.4180, lo: -74.0620 }], drops: [{ n: "The Rip at the tip", la: 40.4790, lo: -74.0010, note: "Drift the seam where hook current meets ocean, birds mark the lane." }] },
    bait: "Adult bunker in spring with 40 pound bass under them, sand eels and rain bait in fall, mullet dropping out in September.",
    brief: {
      read: "The hook tip rips, ocean bars, and bay flats in one walk, guarding New York Harbor. Spring bunker run puts the biggest bass of the year in casting range.",
      cast: "Spring: big flies to nervous bunker pods at dawn, let it fall through the school. Fall: run and gun the beach as bait pushes south, albies mixed in on the clean days.",
      gear: "10wt for spring bunker work with 400 grain and 8 inch Fleyes, 9wt intermediate for the fall sand eel game.",
      prime: "May for giants, late September through November for numbers plus albies.",
      blowout: "Ocean side blown means the bay side flats and Raritan rivers are in the lee, fish the flood there."
    }, al: ["sandy hook", "the hook"] },

  { id: "ibsp", c: "ne", reg: "New Jersey", name: "Island Beach State Park", area: "Seaside Park NJ",
    lat: 39.8120, lng: -74.0930, sp: { striper: 1, albie: 0.7 }, water: "beach", sight: false,
    station: "8534720", stName: "Atlantic City NJ", lag: 0, tidePref: "moving", expo: 90,
    access: { v: "Public, fee", n: "State park entrance fee, buggy corridor with permit. Ten miles of undeveloped beach, walk past the first cut and you are alone." },
    wade: { r: "Easy", best: "any", n: "Easy sand for ten miles. Read the bars at low, fish them at first light." },
    boat: { ramps: [] , drops: [] },
    bait: "Sand eels are the fall headline, rain bait against the beach in October, mullet in September, bunker schools passing all season.",
    brief: {
      read: "The most fly-friendly stretch on the Jersey coast: bars, sloughs, and cuts that reshape every storm, and a fall run that parks fish in the wash for weeks.",
      cast: "Find the cut in the outer bar, stand up-current of it, and swing sand eel flies through the funnel. November midday blitzes here are not a rumor.",
      gear: "9wt, intermediate, sand eel flies #1, white Deceivers, and the albie box through October.",
      prime: "October through Thanksgiving, any moving tide, dawn and the last two hours of light.",
      blowout: "Big blow rearranges the bars, which is a gift: fish it the first calm day and read the new cuts before the crowd does."
    }, al: ["island beach", "ibsp", "seaside"] },

  { id: "harkers", c: "ne", reg: "North Carolina", name: "Cape Lookout", area: "Harkers Island NC",
    lat: 34.6100, lng: -76.5250, sp: { albie: 1, striper: 0 }, water: "beach", sight: true,
    station: "8656483", stName: "Beaufort NC", lag: 0, tidePref: "moving", expo: 150,
    access: { v: "Boat smart", n: "The hook and shoals are a short run from Harkers Island ramps, ferries run from the island. Beach fishing works but the boat opens the whole show." },
    wade: { r: "Easy on the hook", best: "any", n: "Once on Shackleford or the hook, easy sand. Most of this game is played from a skiff on bait balls." },
    boat: { ramps: [{ n: "Harkers Island public ramp", la: 34.6960, lo: -76.5590 }], drops: [{ n: "The Hook, Lookout Bight", la: 34.6210, lo: -76.5330, note: "Glass calm mornings the bight fills with bait and albies, idle in and shut down, let them come." }] },
    bait: "Bay anchovies and silversides in clouds, October into December. When the rain bait is thick the fish get picky and small flies win.",
    brief: {
      read: "The albie capital of the planet. Clean green water, endless bait, and fish from 8 to 18 pounds crashing within sight of the lighthouse from October into December.",
      cast: "In the boat, position ahead of the school and cut the motor, never run through them. From the sand, watch the color change and the birds, the fish come to you on the tide.",
      gear: "10wt, clear intermediate, 12ft to 20lb fluoro, Albie Anchovy, Surf Candy, Gummy Minnow #1 to #4. A big arbor with real drag.",
      prime: "Mid-October through Thanksgiving, light wind mornings.",
      blowout: "Wind over 20 dirties the shoals. The backside of Shackleford and the turning basin hold cleaner water and happier fish."
    }, al: ["harkers", "cape lookout", "beaufort"] },
  /* ================= FLORIDA ================= */
  { id: "islamorada", c: "fl", reg: "Upper Keys", name: "Islamorada Oceanside", area: "Islamorada FL",
    lat: 24.9180, lng: -80.6330, sp: { tarpon: 1, bonefish: 0.8 }, water: "flat", sight: true,
    station: "8723970", stName: "Vaca Key FL", lag: 20, tidePref: "incoming", expo: 130,
    access: { v: "Public edges, boat smart", n: "Anne's Beach and roadside pulloffs give wade access to oceanside flats. The full show (Buchanan Bank, the edges) is skiff water. Tides are estimates off Vaca Key." },
    wade: { r: "Easy where sandy", best: "low", n: "Hard sand and marl off Anne's Beach wades fine on lower stages. Soft spots grab you near the grass, test as you go." },
    boat: { ramps: [{ n: "Founders Park ramp", la: 24.9530, lo: -80.5920 }], drops: [{ n: "Buchanan Bank", la: 24.8710, lo: -80.7290, note: "Stake the up-tide edge on the young flood and let the strings come to you. Published water, expect company in May." }] },
    bait: "Palolo worms around the May and June full moons, pilchards and crabs on the flood, glass minnows against the beach in summer.",
    brief: {
      read: "The sport's cathedral. Migrating tarpon string down the oceanside edge April through June, laid-up fish in the basins, bones on the flats between.",
      cast: "Ocean side is a string game: see them early, lead the lead fish, fly at eye level, slow strips. If the first fish flushes, stay down, number three might eat.",
      gear: "12wt floating for tarpon, 60lb shock. 8wt with tan crab flies for the bones. Push-pole quiet, trolling motors flush these fish.",
      prime: "Late April through mid-June, early flood, first three hours of light. Worm moons are the lottery.",
      blowout: "East wind over 15 puts chop on the ocean edge. Flip to the bayside basins for laid-up fish in the lee."
    }, al: ["islamorada", "annes beach", "buchanan"] },

  { id: "marathon", c: "fl", reg: "Middle Keys", name: "Marathon Bridges", area: "Marathon FL",
    lat: 24.7050, lng: -81.1230, sp: { tarpon: 1 }, water: "bridge", sight: false,
    station: "8723970", stName: "Vaca Key FL", lag: 0, tidePref: "moving", expo: 180,
    access: { v: "Public", n: "Old Seven Mile Bridge and channel edges, walk-on access from Knights Key side and Pigeon Key path. Boat opens every channel." },
    wade: { r: "Bank only", best: "any", n: "This is structure fishing from the old bridge or a skiff, not a wade. Current in the channels is serious." },
    boat: { ramps: [{ n: "33rd St ramp Marathon", la: 24.7130, lo: -81.0880 }], drops: [{ n: "Seven Mile channels", la: 24.6980, lo: -81.1600, note: "Stem the tide up-current of the shadow line at dawn or dusk, feed the rollers coming up the edge." }] },
    bait: "Pilchards and mullet stacking the shadow lines, crabs flushing on the spring tides, worms on the May moons.",
    brief: {
      read: "Tarpon highway. Fish stack in the bridge shadow lines and channel edges on every moving tide, rolling like porpoises when they are happy.",
      cast: "From the boat, hold up-current and swing a black/purple fly down the shadow line. Night tides under the lights: small shrimp fly, dead drift, brutal eats.",
      gear: "11 or 12wt, intermediate or 350 grain for the channels, 80lb shock around structure because you will need every pound.",
      prime: "April through July, the two hours around a tide change, dawn, dusk, and after dark.",
      blowout: "Wind barely matters in the channels. If the ocean is up, the bayside bridge edges stay fishable."
    }, al: ["marathon", "seven mile", "bridges"] },

  { id: "key-west", c: "fl", reg: "Lower Keys", name: "Key West Flats & Harbor", area: "Key West FL",
    lat: 24.5550, lng: -81.8030, sp: { tarpon: 1, bonefish: 0.5 }, water: "flat", sight: true,
    station: "8724580", stName: "Key West FL", lag: 0, tidePref: "incoming", expo: 200,
    access: { v: "Boat smart, some wade", n: "Harbor edges and Fort Zachary shoreline fish on foot. The basins, Boca Grande Key line, and the Marquesas are skiff water and worth every gallon." },
    wade: { r: "Limited", best: "low", n: "Smathers flat edges and the state park side wade at lower stages. Most of this fishery floats." },
    boat: { ramps: [{ n: "Boca Chica ramp", la: 24.5760, lo: -81.7250 }], drops: [{ n: "Key West Harbor edge", la: 24.5620, lo: -81.8080, note: "Daybreak laid-up fish along the harbor color changes before the boat traffic wakes up." }] },
    bait: "Pilchards everywhere, crabs on the spring flood, shrimp bars at night, worms in season.",
    brief: {
      read: "Year-round tarpon town. Winter warm spells wake the harbor fish, spring brings the migration through the basins, and the worm moons turn it electric.",
      cast: "Laid-up fish want the fly landed soft at eleven o'clock, three feet ahead, then barely moved. Swimming strings get the standard lead and slow strip. Do not hit them on the head.",
      gear: "12wt floating, tan Toads for clear sun, black/purple for grey light. 10wt does the harbor juveniles.",
      prime: "March through June prime, but any winter week over 75 degrees can light the harbor up.",
      blowout: "Twenty knots somewhere is a lee somewhere else, that is the gift of Key West. The guides just call it a running day."
    }, al: ["key west", "marquesas", "harbor"] },

  { id: "biscayne", c: "fl", reg: "Miami", name: "Biscayne Bay", area: "Miami FL",
    lat: 25.5470, lng: -80.2100, sp: { bonefish: 1, tarpon: 0.7 }, water: "flat", sight: true,
    station: "8723214", stName: "Virginia Key FL", lag: 0, tidePref: "incoming", expo: 90,
    access: { v: "Public edges, park fees", n: "Key Biscayne shorelines (Bill Baggs, Crandon) wade legally, Biscayne NP flats south are skiff water. City skyline, world-class bones." },
    wade: { r: "Easy on the edges", best: "low", n: "Hard sand and grass edges off the Key Biscayne parks wade well on the lower half. The middle bay is boat water." },
    boat: { ramps: [{ n: "Crandon Park Marina ramp", la: 25.7130, lo: -80.1580 }], drops: [{ n: "Featherbed banks", la: 25.5450, lo: -80.2280, note: "Pole the up-tide edge on the young flood for singles and small schools." }] },
    bait: "Shrimp and small crabs on the flood, glass minnows against the shorelines in summer, mullet in fall.",
    brief: {
      read: "Ten pound bonefish with a skyline backdrop. The bay's grass flats hold big, smart, boat-shy fish that reward the quiet angler on foot.",
      cast: "These bones have PhDs. Longer leads than the Bahamas, softer landings, smaller flies. When one tips on the fly, one slow strip and pray.",
      gear: "8wt, 12ft leader to 12lb fluoro, tan and olive shrimp flies #4 to #6, lighter eyes than you think.",
      prime: "April through June and October, incoming water mid-morning, sun high, wind under 12.",
      blowout: "Dirty water after a blow kills the sight game. Baby tarpon in the leeward creeks and canals save the day."
    }, al: ["biscayne", "key biscayne", "miami bones"] },

  { id: "government-cut", c: "fl", reg: "Miami", name: "Miami Beach & Government Cut", area: "Miami Beach FL",
    lat: 25.7620, lng: -80.1310, sp: { tarpon: 1, snook: 0.6 }, water: "inlet", sight: false,
    station: "8723214", stName: "Virginia Key FL", lag: 0, tidePref: "outgoing", expo: 90,
    access: { v: "Public", n: "South Pointe Park pier and jetty walk, plus the beach north. Night fishing is legal and that is when this place works." },
    wade: { r: "Bank and beach", best: "any", n: "Jetty and seawall casting at the cut, easy sand on the beach. Do not swim your backcast into the cruise ship channel." },
    boat: { ramps: [{ n: "Pelican Harbor ramp", la: 25.8500, lo: -80.1620 }], drops: [{ n: "Cut shadow lines", la: 25.7630, lo: -80.1250, note: "Night outgoing, hold off the jetty lights and swing shrimp flies down the seam." }] },
    bait: "Shrimp flushing on winter night tides, mullet run in fall, glass minnows summer.",
    brief: {
      read: "Urban tarpon at its finest. Winter shrimp runs pull big fish into the cut at night, and the fall mullet run marches them right down the beach.",
      cast: "Night game: cast up-current along the shadow line, dead drift a shrimp fly with tiny twitches. The eat sounds like a bathtub draining. Fall beach: sight-cast to rolling pods at dawn.",
      gear: "11 or 12wt, intermediate, 60 to 80lb shock. Black shrimp patterns at night, big white baitfish for the mullet run.",
      prime: "December through March night outgoings for the shrimp run, September October for mullet.",
      blowout: "Big east swell shuts the beach. The cut itself and Haulover to the north fish in most weather."
    }, al: ["government cut", "south pointe", "miami beach"] },

  { id: "flamingo", c: "fl", reg: "Everglades", name: "Flamingo", area: "Everglades National Park FL",
    lat: 25.1410, lng: -80.9230, sp: { snook: 1, redfish: 0.9, tarpon: 0.8 }, water: "mangrove", sight: true,
    station: "8723970", stName: "Vaca Key FL", lag: 60, tidePref: "outgoing", expo: 200,
    access: { v: "Public, park fee", n: "Everglades NP entrance fee, Flamingo marina ramps. Everything worth fishing is a boat ride, this is the edge of the map. Tides are rough estimates this deep in Florida Bay." },
    wade: { r: "No", best: "any", n: "You do not wade the Glades. Mud to your hips and things with teeth. This is skiff country, full stop." },
    boat: { ramps: [{ n: "Flamingo marina ramp", la: 25.1420, lo: -80.9230 }], drops: [{ n: "Snake Bight edge", la: 25.1690, lo: -80.8630, note: "Pole the outside edge on the last of the falling, fish stack where the mud drains off the flat." }] },
    bait: "Mullet and pilchards on the outside, shrimp flushing the creeks in winter, glass minnows in the rivers.",
    brief: {
      read: "The last wild place. Snook laid against every mangrove point, reds tailing the flats, tarpon rolling the rivers, and no cell service to bother you.",
      cast: "Hit the shadow line tight, a foot off the roots, and strip fast. Short accurate casts beat long pretty ones a hundred to one here.",
      gear: "8 or 9wt floating, 40lb shock for the snook, weedless everything. One rod rigged with a black/purple tarpon fly for the rivers.",
      prime: "November through March for the winter pattern, outgoing tides draining the creeks at first light.",
      blowout: "Wind is the poler's problem, the fish barely care inside. Twenty knots means fish the protected creeks and rivers."
    }, al: ["flamingo", "everglades", "snake bight"] },

  { id: "chokoloskee", c: "fl", reg: "Everglades", name: "Chokoloskee & Ten Thousand Islands", area: "Everglades City FL",
    lat: 25.8130, lng: -81.3620, sp: { snook: 1, redfish: 1, tarpon: 0.8 }, water: "mangrove", sight: true,
    station: "8725110", stName: "Naples FL", lag: 30, tidePref: "outgoing", expo: 270,
    access: { v: "Public ramps", n: "Chokoloskee island ramps and Everglades City. A thousand islands look identical, run a track out or hire a guide the first day, seriously." },
    wade: { r: "No", best: "any", n: "Oyster bars will shred boots and mud will keep them. Skiff fishery." },
    boat: { ramps: [{ n: "Chokoloskee causeway ramp", la: 25.8140, lo: -81.3610 }], drops: [{ n: "Rabbit Key Pass edges", la: 25.7860, lo: -81.4130, note: "Outgoing tide, stake the pass edge and work the bait flushing off the oyster bars." }] },
    bait: "Pilchards and thread herring on the outside islands, mullet everywhere, shrimp on winter lows.",
    brief: {
      read: "Oyster bars, outside beaches, and pass edges that reload with every tide. Snook on the points, reds on the bars, tarpon in the passes May and June.",
      cast: "Fish the down-tide point of every island: cast past the point, strip through the seam. On the outside beaches, walk the bow and sight-cast cruisers in the first trough.",
      gear: "8wt floating, white baitfish flies and a Kwan for the reds, 30 to 40lb shock all day.",
      prime: "Fall mullet run and the winter dry season lows. Summer mornings for the tarpon passes.",
      blowout: "West wind stacks the outside. Slide one row of islands inside and the water goes calm and clean."
    }, al: ["chokoloskee", "ten thousand", "everglades city"] },

  { id: "sanibel", c: "fl", reg: "Southwest FL", name: "Sanibel Beaches", area: "Sanibel FL",
    lat: 26.4260, lng: -82.0820, sp: { snook: 1, tarpon: 0.6 }, water: "beach", sight: true,
    station: "8725520", stName: "Fort Myers FL", lag: 0, tidePref: "incoming", expo: 200,
    access: { v: "Public, paid lots", n: "Island beach lots (Bowmans, Gulfside) are paid but plentiful. Dawn patrol parks free at some accesses before enforcement." },
    wade: { r: "Easy", best: "any", n: "You barely need to wade, the fish are in shin-deep water at your feet. Stay dry-footed and off the bar, walking the waterline spooks less." },
    boat: { ramps: [{ n: "Sanibel causeway ramp", la: 26.4750, lo: -82.0290 }], drops: [] },
    bait: "Glass minnows and scaled sardines in the trough all summer, mullet pushing through September.",
    brief: {
      read: "The best sight fishery nobody wades: summer snook cruise the first trough in inches of clear Gulf water, singles and pairs, all morning.",
      cast: "Walk the beach at dawn, sun behind you, and cast parallel to shore ahead of cruising fish. The eat happens ten feet off the sand. Small fly, soft landing, fast erratic strips.",
      gear: "8wt floating, 30lb shock, tiny white baitfish flies #2 to #4, a DT Special when they get fussy.",
      prime: "May through September, first three hours of light, incoming water, flat calm.",
      blowout: "Any real surf ends the sight game. Flip to the bay side mangrove edges on the same tide."
    }, al: ["sanibel", "captiva"] },

  { id: "boca-grande", c: "fl", reg: "Southwest FL", name: "Boca Grande", area: "Boca Grande FL",
    lat: 26.7180, lng: -82.2630, sp: { tarpon: 1, snook: 0.7 }, water: "pass", sight: true,
    station: "8725520", stName: "Fort Myers FL", lag: 20, tidePref: "outgoing", expo: 250,
    access: { v: "Public beaches, boat for the pass", n: "Gasparilla Island beaches wade free with paid island parking. The pass itself is the most famous tarpon hole on earth and strictly boat water." },
    wade: { r: "Easy on the beach", best: "any", n: "Beach wading is easy sand. The pass is 70 feet deep with hill tide current, nobody wades it, ever." },
    boat: { ramps: [{ n: "Placida ramp", la: 26.8290, lo: -82.2660 }], drops: [{ n: "The Pass lighthouse edge", la: 26.7160, lo: -82.2600, note: "Fly game is the beach side strings and the bar, not the crab-flush circus in the hole. Dawn, before the fleet." }] },
    bait: "The famous hill tide crab flushes around the May and June moons, threadfins on the beach, mullet in fall.",
    brief: {
      read: "Thousands of tarpon stage here May and June. The fly game is the beach: strings run the bar line in clean water at first light before the pass fleet fires up.",
      cast: "Anchor or pole the beach bar, watch up-light for strings, lead the lead fish by fifteen feet. On the hill tides throw a crab fly and dead drift it like the real thing.",
      gear: "12wt floating, 60 to 80lb shock, tan and rust crab flies for the flushes, Toads for the strings.",
      prime: "May and June, hill tides around the moons, dawn beach patrol.",
      blowout: "West wind over 15 muddies the beach line. Charlotte Harbor's east side flats hold laid-up fish in the lee."
    }, al: ["boca grande", "gasparilla", "the pass"] },

  { id: "homosassa", c: "fl", reg: "Nature Coast", name: "Homosassa", area: "Homosassa FL",
    lat: 28.7420, lng: -82.7590, sp: { tarpon: 1, redfish: 0.7 }, water: "flat", sight: true,
    station: "8727520", stName: "Cedar Key FL", lag: -30, tidePref: "incoming", expo: 260,
    access: { v: "Boat", n: "MacRae's and the public ramp put you minutes from the flats. This is the giant tarpon grounds of legend, treat it like sacred water." },
    wade: { r: "No", best: "any", n: "Soft grass flats and long runs, a poling skiff fishery through and through." },
    boat: { ramps: [{ n: "Homosassa public ramp", la: 28.7810, lo: -82.6150 }], drops: [{ n: "Oklahoma Flat", la: 28.7550, lo: -82.7420, note: "The most storied tarpon flat alive. Long poles, long leads, glass calm mornings. Give other skiffs a quarter mile, that is the law here." }] },
    bait: "The giants here do not chase bait much, they are travelers. Crabs on the surface during big tides, needlefish and mullet for the reds inside.",
    brief: {
      read: "Where the world records swam. May and June, strings of 150 pound fish track the outside grass flats in clear Gulf water, and everything about it is earned.",
      cast: "One shot fishing. See the string at 300 feet, set up the intercept, and make the one cast count: lead, sink, and a slow draw as the lead fish closes. Then hold on for the sleigh ride.",
      gear: "12wt, floating, 16 to 20lb class with 60lb shock if you care about records, black/purple early, tan when the sun is up.",
      prime: "May through mid-June, first light through mid-morning, calm and clear or stay home.",
      blowout: "Any real wind ends it, the fish are still there but you cannot see them. The backcountry reds around the river mouths save the day."
    }, al: ["homosassa", "oklahoma flat"] },

  { id: "fort-desoto", c: "fl", reg: "Tampa Bay", name: "Fort De Soto", area: "St Petersburg FL",
    lat: 27.6220, lng: -82.7220, sp: { redfish: 1, snook: 0.9, tarpon: 0.5 }, water: "flat", sight: true,
    station: "8726520", stName: "St Petersburg FL", lag: 0, tidePref: "incoming", expo: 220,
    access: { v: "Public, park fee", n: "County park fee, huge lots, and miles of legal wading flats. One of the best walk-in fisheries in Florida." },
    wade: { r: "Easy", best: "low", n: "Hard sand and grass wades beautifully on the lower half. The potholes and edges are the fish, not the open flat." },
    boat: { ramps: [{ n: "Fort De Soto ramp", la: 27.6480, lo: -82.7130 }], drops: [] },
    bait: "Scaled sardines balled on the edges, shrimp and crabs on the grass, mullet rains in fall.",
    brief: {
      read: "Grass flats, sand potholes, and mangrove edges inside Tampa Bay's mouth. Reds tail on the flood, snook guard the potholes, and it all wades.",
      cast: "Fish the potholes like a milk run: cast past the sand, strip the fly through the hole, pause on the edge. Tailing reds on the flood get the crab fly and a soft lead.",
      gear: "8wt floating, weedless Kwan and copper spoon flies for reds, white baitfish for the snook, 30lb shock.",
      prime: "Big morning flood tides March through November, first light through mid-morning.",
      blowout: "It fishes in most wind, just move to the lee shorelines. Dirty water means gold spoon flies and black/purple."
    }, al: ["fort desoto", "de soto", "tampa"] },

  { id: "mosquito-lagoon", c: "fl", reg: "East Central FL", name: "Mosquito Lagoon", area: "Titusville FL",
    lat: 28.7550, lng: -80.7550, sp: { redfish: 1 }, water: "lagoon", sight: true,
    station: "8721604", stName: "Trident Pier FL", lag: 0, tidePref: "both", expo: 90,
    access: { v: "Public, refuge rules", n: "Ramps at Haulover Canal and Biolab Rd inside Merritt Island NWR, check refuge hours. The lagoon is microtidal, wind moves more water than the moon here." },
    wade: { r: "Easy where firm", best: "any", n: "Sand shorelines wade fine, interior mud does not. The kayak is the great equalizer here." },
    boat: { ramps: [{ n: "Haulover Canal ramp", la: 28.7360, lo: -80.7550 }], drops: [{ n: "Tiger Shoal edges", la: 28.7700, lo: -80.7450, note: "Idle way out, pole or drift the shoal edges glassy mornings for laid-up and tailing fish." }] },
    bait: "Shrimp and crabs in the grass, finger mullet on the shorelines, small pinfish in the potholes.",
    brief: {
      read: "The sight-fishing lab. No real tide, gin water on calm days, and big resident redfish that have seen everything, laid up like brown logs over white sand.",
      cast: "Stealth is the whole game. Push pole or wade quiet, lead laid-up fish by three feet, let the fly sit, then barely crawl it. If the fish flinches, stop everything.",
      gear: "7 or 8wt floating, 12ft leader, small weedless shrimp and crab flies #4, black/purple on grass, tan on sand.",
      prime: "Any calm clear morning year-round, winter especially when the water cleans up.",
      blowout: "Wind is everything here since there is no tide to save you. Over 12 knots, fish the lee shore of the spoil islands or go tie flies."
    }, al: ["mosquito lagoon", "titusville", "merritt island"] },

  { id: "sebastian", c: "fl", reg: "East Central FL", name: "Sebastian Inlet", area: "Sebastian FL",
    lat: 27.8600, lng: -80.4470, sp: { snook: 1, tarpon: 0.7, redfish: 0.5 }, water: "inlet", sight: false,
    station: "8721604", stName: "Trident Pier FL", lag: 15, tidePref: "outgoing", expo: 90,
    access: { v: "Public, park fee", n: "State park both sides, famous north jetty, 24 hour fishing. The fly water is the beach corners and the flats inside, not elbow-to-elbow on the jetty." },
    wade: { r: "Easy on the beach", best: "any", n: "Beach and inside flats wade easy. The inlet current itself is deadly serious, stay off the rocks when swell runs." },
    boat: { ramps: [{ n: "Sebastian Inlet ramp", la: 27.8560, lo: -80.4550 }], drops: [] },
    bait: "The mullet run in September and October is biblical here, glass minnows summer, shrimp on winter night tides.",
    brief: {
      read: "The east coast's fish funnel. Everything migrating trades through this cut, and the fall mullet run stacks snook and tarpon in the first trough like a parade.",
      cast: "Mullet run: dawn on the beach south of the jetty, cast parallel, big white fly swum with panic. Rest of year: night outgoing on the inside flats, shrimp fly on the shadow lines.",
      gear: "9wt intermediate, 40lb shock for snook, and a 11wt rigged when the tarpon crash the mullet pods.",
      prime: "September and October beach mornings, otherwise outgoing tides at night.",
      blowout: "Big swell owns the beach. The inside flats and Indian River spoil islands fish in anything."
    }, al: ["sebastian", "inlet"] },

  { id: "jupiter", c: "fl", reg: "Southeast FL", name: "Jupiter Beaches", area: "Jupiter FL",
    lat: 26.9430, lng: -80.0720, sp: { tarpon: 1, snook: 0.8 }, water: "beach", sight: true,
    station: "8722670", stName: "Lake Worth Pier FL", lag: 0, tidePref: "incoming", expo: 90,
    access: { v: "Public", n: "Beach accesses off A1A from Juno to Hobe Sound, meter parking. The fish run the trough within casting range of dry sand." },
    wade: { r: "Easy", best: "any", n: "Stand on the sand, the fish are inside the bar. Wading out just puts you behind them." },
    boat: { ramps: [{ n: "Burt Reynolds Park ramp", la: 26.9410, lo: -80.0850 }], drops: [] },
    bait: "Spring glass minnow and pilchard runs, summer threadfins, the September mullet run with tarpon and snook stacked under it.",
    brief: {
      read: "The palm beach tarpon sidewalk. Spring and fall, strings of fish cruise the clear trough heading north or south, visible from the dune line.",
      cast: "Walk high on the berm to spot, drop down to cast. Lead the string, let the fly sink to their level, slow draw. Snook eat the same water at your feet at first light.",
      gear: "11 or 12wt floating for the tarpon lane, 8wt for dawn snook, black/purple early then tan and white.",
      prime: "April through June northbound, September October southbound with the mullet, always the first two hours of light.",
      blowout: "East swell over three feet stirs the trough. The Loxahatchee River mangrove game inside is the fallback."
    }, al: ["jupiter", "juno", "palm beach"] },

  { id: "jax", c: "fl", reg: "Northeast FL", name: "Jacksonville Marshes", area: "Jacksonville FL",
    lat: 30.4100, lng: -81.4300, sp: { redfish: 1 }, water: "marsh", sight: true,
    station: "8720218", stName: "Mayport FL", lag: 20, tidePref: "incoming", expo: 90,
    access: { v: "Public ramps", n: "Ramps at Sisters Creek and Cedar Point put you in the spartina maze. Flood tide fishing happens on the biggest tides of the month, check the board." },
    wade: { r: "Marsh mud, boat smart", best: "high", n: "The flood tide game is played from a skiff or kayak staked at the grass edge, then careful steps on firm spots. Solo mud walking is how legends get stuck." },
    boat: { ramps: [{ n: "Sisters Creek ramp", la: 30.4190, lo: -81.4610 }], drops: [{ n: "Spartina flood flats", la: 30.4430, lo: -81.4520, note: "On 5ft-plus tides, pole into the flooded grass the last hour of incoming and hunt tails." }] },
    bait: "Fiddler crabs by the million on the flood flats, shrimp and mullet in the creeks the rest of the tide.",
    brief: {
      read: "The flood tide tailing game. On the big tides of late summer, reds follow the water into the spartina and tail on fiddler crabs with their backs out of the water.",
      cast: "Find a tail, plan the shot: lead it three feet, land the crab fly soft, and move it only when the fish lifts its head. The take is visual and it will ruin you for everything else.",
      gear: "8wt floating, weedless crab flies (Kwan, Redfish Crack) #2 to #4, 16lb tippet, a push pole or paddle.",
      prime: "The 4 to 6 biggest tide days per month, August through October, evening floods best.",
      blowout: "No flood tide, no grass game. Fall back to the creek mouths on the last of the outgoing, the reds stack where bait flushes."
    }, al: ["jacksonville", "jax", "sisters creek", "flood tide"] },

  /* ================= BAHAMAS ================= */
  { id: "abaco-marls", c: "bah", reg: "Abaco", name: "The Marls", area: "Abaco, Bahamas",
    lat: 26.3800, lng: -77.2200, sp: { bonefish: 1 }, water: "flat", sight: true,
    station: null, stName: null, lag: 0, tidePref: "incoming", expo: 270,
    access: { v: "Lodge/guide water", n: "Two hundred square miles of mangrove flats on Abaco's west side, reached by skiff from Marsh Harbour lodges. Flats permit required, bones are catch and release nationwide." },
    wade: { r: "Soft, boat based", best: "any", n: "Mostly too soft to wade, this is poling water. Your guide will tell you the firm spots." },
    boat: { ramps: [{ n: "Marsh Harbour government dock", la: 26.5410, lo: -77.0630 }], drops: [] },
    bait: "Shrimp, small crabs, and gobies in the mangrove edges. The fish here eat happily, which is why it is the best classroom in the sport.",
    brief: {
      read: "An endless maze of creeks and flats holding uncountable bonefish in the 2 to 5 pound class, with enough doubles and school shots to fix a lifetime of bad casting.",
      cast: "Schools push wakes you can see at 200 feet. Lead the wake, let the fly land ahead, and strip when the lead fish is close. Fast, fun, forgiving.",
      gear: "8wt floating, 10ft to 12lb, Gotchas and pink shrimp #4 to #6, bead chain eyes for the soft bottoms.",
      prime: "March through June, tide matters less here than light, fish it whenever the sun is up.",
      blowout: "The Marls ARE the blowout plan, the mangroves kill the wind. This is where Abaco guides run when everything else is white-capped."
    }, al: ["marls", "abaco"] },

  { id: "cherokee", c: "bah", reg: "Abaco", name: "Cherokee Sound", area: "Abaco, Bahamas",
    lat: 26.2660, lng: -77.0540, sp: { bonefish: 1 }, water: "flat", sight: true,
    station: null, stName: null, lag: 0, tidePref: "incoming", expo: 140,
    access: { v: "DIY friendly", n: "Walk-in flats off the settlement and Casuarina Point, rental car water. Flats permit required, respect the guides working clients, give them the flat." },
    wade: { r: "Easy", best: "low", n: "Hard white sand wades like a sidewalk on the lower half of the tide. Watch your line of retreat as it floods." },
    boat: { ramps: [], drops: [] },
    bait: "Shrimp and small crabs on the sand, worms in the marl patches.",
    brief: {
      read: "Classic DIY water: hard sand flats where singles and pairs slide on with the flood. Bigger and smarter than Marls fish, a proper test.",
      cast: "Walk slow, scan the edges of the light, and take the shot early. These fish come from deep water hungry on the young flood and leave when it drops.",
      gear: "8wt, 12ft leader to 12lb, tan Gotchas and Spawning Shrimp #4, small crab for the big singles.",
      prime: "First half of the incoming, mid-morning sun, April through June and again October November.",
      blowout: "East wind over 18 puts chop on it. The Casuarina side and the creek behind fish the lee."
    }, al: ["cherokee", "casuarina"] },

  { id: "andros-west", c: "bah", reg: "Andros", name: "Andros West Side", area: "Andros, Bahamas",
    lat: 24.4500, lng: -78.1000, sp: { bonefish: 1 }, water: "flat", sight: true,
    station: null, stName: null, lag: 0, tidePref: "incoming", expo: 270,
    access: { v: "Lodge/guide water", n: "The uninhabited west coast, reached by long skiff runs from Cargill Creek or via west side lodges. National park water, permit required, C&R." },
    wade: { r: "Mixed", best: "low", n: "Some firm ocean-side flats wade, much is soft marl. Follow the guide's boots exactly." },
    boat: { ramps: [], drops: [] },
    bait: "Big shrimp, crabs, and the giant bones here will eat a well-presented baby snapper pattern. This is where double digit fish live.",
    brief: {
      read: "The holy ground of big bonefish. Ten pound fish cruise in singles off the mouths of the creeks, and everything about the day feels like the edge of the world because it is.",
      cast: "One good shot per fish. Longer leads, heavier flies to get down fast, and a strip set you have practiced until it is religion. The first run will hit the backing before you exhale.",
      gear: "8 or 9wt, 12ft to 16lb, bigger flies than the guidebooks say: #2 mantis and crab patterns with lead eyes.",
      prime: "March through June, around the creek mouths on the young flood.",
      blowout: "A real west blow shuts it down and the run home gets sporty. The bights and east side creeks are the fallback, and they are hardly a consolation prize."
    }, al: ["andros", "west side"] },

  { id: "cargill", c: "bah", reg: "Andros", name: "Cargill Creek", area: "Andros, Bahamas",
    lat: 24.4930, lng: -77.7180, sp: { bonefish: 1 }, water: "flat", sight: true,
    station: null, stName: null, lag: 0, tidePref: "incoming", expo: 90,
    access: { v: "Lodge hub, some DIY", n: "The lodge row of Andros. Walk-in flats near the creek mouths and behind the settlement, endless guided water in the bights." },
    wade: { r: "Easy near the creeks", best: "low", n: "Firm sand near the creek mouths, softer as you push into the bight. Test every step past the white sand." },
    boat: { ramps: [{ n: "Cargill Creek lodge docks", la: 24.4930, lo: -77.7180 }], drops: [] },
    bait: "Shrimp and crabs flushing the creeks on the falling tide, schools mudding in the bight on the flood.",
    brief: {
      read: "Creek-mouth bonefishing: the tide is a conveyor belt and the fish work it on schedule. Muds in the bight give blind-cast action when the light dies.",
      cast: "Fish the creek mouths on the last of the falling as bait flushes out, then follow the flood onto the flats. On muds, cast to the up-tide edge and count the fly down.",
      gear: "8wt, Gotchas and Bitters #4 to #6, one rod rigged heavy for the muds.",
      prime: "October through June, tide change windows, morning light.",
      blowout: "The bights bend around every wind. There is always a lee flat on Andros, that is why the lodges are here."
    }, al: ["cargill", "behring point", "bight"] },

  { id: "savannah-sound", c: "bah", reg: "Eleuthera", name: "Savannah Sound", area: "Eleuthera, Bahamas",
    lat: 25.0850, lng: -76.1330, sp: { bonefish: 1 }, water: "flat", sight: true,
    station: null, stName: null, lag: 0, tidePref: "incoming", expo: 120,
    access: { v: "DIY friendly", n: "Roadside pulloffs on the Queens Highway put you on the sound flats. The most famous DIY water in the Bahamas, permit required, tread lightly and release everything." },
    wade: { r: "Easy", best: "low", n: "Hard sand and firm grass through most of the sound. The middle channels get deep, plan around the flood." },
    boat: { ramps: [], drops: [] },
    bait: "Shrimp, crabs, and worms across the turtle grass, glass minnows against the beach edges.",
    brief: {
      read: "A sheltered sound of white sand and grass where schools flood in from the cuts. Rental car, breakfast at the settlement, tails by nine.",
      cast: "Post up where the sand channels meet the grass and let the tide bring them. Schools first, then the bigger singles trailing behind, always check behind the school.",
      gear: "8wt, 10 to 12ft leader, tan and pink #4 to #6, olive Bitters over the grass.",
      prime: "Incoming through midday sun, November through June.",
      blowout: "The sound is protected from most wind. A hard norther means the south end flats near the bridge, in the lee of the island."
    }, al: ["savannah sound", "eleuthera"] },

  { id: "deep-creek", c: "bah", reg: "Eleuthera", name: "Deep Creek & South Eleuthera", area: "Eleuthera, Bahamas",
    lat: 24.7830, lng: -76.2550, sp: { bonefish: 1 }, water: "flat", sight: true,
    station: null, stName: null, lag: 0, tidePref: "incoming", expo: 200,
    access: { v: "DIY friendly", n: "The creek and the flats toward Cape Eleuthera walk from the road. Quiet settlements, honest fish, permit required." },
    wade: { r: "Easy", best: "low", n: "Firm sand in the creek and along the ocean-side bars. Soft in the mangrove backwaters." },
    boat: { ramps: [], drops: [] },
    bait: "Shrimp and fiddlers in the creek, crabs on the outside bars.",
    brief: {
      read: "A long tidal creek that drains and refills with bonefish twice a day. Low water concentrates them at the mouth, the flood spreads them across the inside flats.",
      cast: "At the mouth on low, take shots at fish staging in the channel edges. As it floods, walk ahead of the push and pick off the leaders.",
      gear: "8wt, standard Bahamas box, bead chain for the skinny inside water.",
      prime: "Low incoming, morning or afternoon sun, December through May.",
      blowout: "Wind funnels down the creek but the mangrove arms break it. Or drive twenty minutes, Eleuthera always has a lee coast."
    }, al: ["deep creek", "cape eleuthera", "rock sound"] },

  { id: "exuma-airport", c: "bah", reg: "Exuma", name: "Exuma Flats", area: "George Town, Exuma, Bahamas",
    lat: 23.5570, lng: -75.8660, sp: { bonefish: 1 }, water: "flat", sight: true,
    station: null, stName: null, lag: 0, tidePref: "incoming", expo: 180,
    access: { v: "DIY friendly", n: "The airport flats and Moriah Harbour cays walk or paddle from the road. Half the DIY articles ever written happened here, expect educated fish." },
    wade: { r: "Easy", best: "low", n: "Hard white sand, the easiest wading in the islands. The cuts between cays run deep and fast on the change." },
    boat: { ramps: [{ n: "George Town government dock", la: 23.5160, lo: -75.7710 }], drops: [] },
    bait: "Shrimp and small crabs, milky muds of feeding schools on the bigger tides.",
    brief: {
      read: "Postcard flats: blinding sand, gin water, and bonefish that have seen a fly or two. The fish are honest, the shots are long, and the wind is part of the deal.",
      cast: "These fish reward the 60 foot cast in 15 knots. Lead them long, let the fly disappear into the sand, and move it only when they are on it. Downsize when refused.",
      gear: "8wt (a 9 in the wind is no crime), 12ft to 12lb, #6 Gotchas, tan over white, lighter eyes than Andros.",
      prime: "Incoming water with sun, November through May, afternoons often calmer than the guidebooks admit.",
      blowout: "Trade winds are constant, not a blowout, adjust the leader and keep fishing. A real front means the lee of the cays at Moriah Harbour."
    }, al: ["exuma", "george town", "moriah"] },

  { id: "deadmans", c: "bah", reg: "Long Island", name: "Deadmans Cay", area: "Long Island, Bahamas",
    lat: 23.1780, lng: -75.0930, sp: { bonefish: 1 }, water: "flat", sight: true,
    station: null, stName: null, lag: 0, tidePref: "incoming", expo: 270,
    access: { v: "DIY and local guides", n: "Vast west side flats off the settlements, walkable from side roads. Sleepy, uncrowded, and the locals will point you right if you buy lunch first." },
    wade: { r: "Easy", best: "low", n: "Miles of firm sand and marl. The distances are the challenge, pick a flat and fish it properly instead of walking to the horizon." },
    boat: { ramps: [], drops: [] },
    bait: "Shrimp, crabs, big worms in the marl. Schools here run bigger average than Exuma.",
    brief: {
      read: "The overlooked island. Huge, empty flats where schools of 3 to 6 pound fish work the edges and nobody else's boot prints spoil the sand.",
      cast: "Textbook school fishing: intercept the push, cast to the edge not the middle, and you can take multiple fish from one school if you land them away from it.",
      gear: "8wt, standard box, plus one heavier crab pattern for the deep edges where the big singles hold.",
      prime: "November through May, incoming tide, all-day fishery with the sun.",
      blowout: "West side blows out in a strong westerly, which is rare. The east side blue holes and creeks are the novelty-act fallback."
    }, al: ["deadmans", "long island"] },

  { id: "mcleans", c: "bah", reg: "Grand Bahama", name: "East End", area: "McLeans Town, Grand Bahama",
    lat: 26.6520, lng: -77.9660, sp: { bonefish: 1 }, water: "flat", sight: true,
    station: null, stName: null, lag: 0, tidePref: "incoming", expo: 180,
    access: { v: "Guide smart, some DIY", n: "The famous east end flats and pine cays run from McLeans Town, an hour from Freeport. Deep Water Cay's old water, big fish, guides know the tides cold." },
    wade: { r: "Mixed", best: "low", n: "Ocean side sand wades firm, the inside marl is soft. Guides stake and wade the good stuff daily." },
    boat: { ramps: [{ n: "McLeans Town dock", la: 26.6520, lo: -77.9660 }], drops: [] },
    bait: "Crabs and mantis shrimp on the ocean flats, schools of mudding fish inside.",
    brief: {
      read: "Big-fish water an easy flight from Florida. Ocean-side flats hold heavy singles and doubles that eat crabs like they are paid to.",
      cast: "Crab fly fishing: lead the fish, let it hit bottom with a puff, and do not move it. The bone will race over and pin it. Moving a crab away from a bonefish is how you lose the shot.",
      gear: "8 or 9wt, 12ft to 16lb, #2 to #4 crab and mantis patterns with lead eyes, tan and olive.",
      prime: "March through June, tide changes, mid-morning light.",
      blowout: "North wind in winter is the enemy. The creeks and the south side pine flats give shelter and honest schoolies."
    }, al: ["mcleans", "grand bahama", "east end", "deep water cay"] },
];

})(typeof window !== "undefined" ? window : globalThis);
