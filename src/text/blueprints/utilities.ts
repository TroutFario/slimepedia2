import { Recipe, UnlockRequirementNames } from "./blueprints";

export enum Utility {
  DASH_PAD = "dashpad",
  SNARE_MASTER = "snaremaster",
  SNARE_ADVANCED = "snareadvanced",
  SNARE_NOVICE = "snarenovice",
  SHOWER = "shower",
  TURRET = "turret",
  SUPER_TURRET = "superturret",
  TRYDRO_TURRET = "trydroturret",
  MED_STATION = "medstation",
  PORTABLE_SCARE_SLIME = "portablescareslime",
  BAIT_POGO = "baitpogo",
  BAIT_CHICKEN = "baitchicken",
  BAIT_CARROT = "baitcarrot",
  WATER_TAP = "watertap",
  SLIME_STAGE = "slimestage",
  SLIME_STAGE_FLORAL = "slimestagefloral",
  SNOWBALL_MACHINE = "snowballmachine",
  SPRING_PAD = "springpad",
  TAMING_BELL = "tamingbell",
  MARKER_EXCL = "markerexcl",
  MARKER_NO = "markerno",
  MARKER_QUESTION = "markerquestion",
  MARKER_FRUIT = "markerfruit",
  MARKER_MEAT = "markermeat",
  MARKER_VEGGIE = "markerveggie",
  MARKER_SPOUT = "markerspout",
  MARKER_MINERAL = "markermineral",
  MARKER_HIVE = "markerhive",
  MARKER_STABILIZER = "markerstabilizer",
  FAN = "fan",
  BUMPER = "bumper",
  CANNON = "cannon",
  ACCELERATOR = "accelerator",
  GOAL = "goal",
  DREAM_LANTERN = "dreamlantern",
  DREAM_LANTERN_2 = "dreamlantern2",
  RADIANT_PROJECTOR = "radiantprojector",
  NULLIFIER = "nullifier",
  DISRUPTION_DETECTOR = "disruptiondetector",
  DRONE_STATION = "dronestation",
}

export const utilitiesList: {
  [key in Utility]: [string, UnlockRequirementNames, Recipe];
} = {
  medstation: [
    "Med Station",
    UnlockRequirementNames.VIKTOR,
    { newbucks: 100, pink: 10, brine: 10, jelly: 5 },
  ],
  dashpad: [
    "Dash Pad",
    UnlockRequirementNames.POD,
    { newbucks: 500, crystal: 10, angler: 10, lava: 5, sand: 5 },
  ],
  springpad: [
    "Spring Pad",
    UnlockRequirementNames.POD,
    { newbucks: 500, cotton: 10, phosphor: 10, sand: 5, honey: 5 },
  ],
  turret: [
    "Hydro Turret",
    UnlockRequirementNames.POD,
    { newbucks: 250, boom: 10, puddle: 5, brine: 5 },
  ],
  superturret: [
    "Super Turret",
    UnlockRequirementNames.OGDEN,
    { newbucks: 500, boom: 30, puddle: 10, brine: 10, sand: 5 },
  ],
  trydroturret: [
    "Trydroturret",
    UnlockRequirementNames.DOOR,
    { newbucks: 2000, hyper: 30, puddle: 20, aqua: 10, primordy: 10 },
  ],
  shower: [
    "Hydro Shower",
    UnlockRequirementNames.POD,
    { newbucks: 500, flutter: 40, puddle: 10, snowflake: 10, wildHoney: 5 },
  ],
  tamingbell: [
    "Taming Bell",
    UnlockRequirementNames.THORA,
    { newbucks: 250, flutter: 10, cotton: 10, primordy: 10, wildHoney: 5 },
  ],
  watertap: [
    "Portable Water Tap",
    UnlockRequirementNames.OGDEN,
    { newbucks: 250, puddle: 10, angler: 10, brine: 10, radiant: 5 },
  ],
  portablescareslime: [
    "Portable Scare Slime",
    UnlockRequirementNames.OGDEN,
    { newbucks: 250, batty: 30, ringtail: 10, jelly: 10, sand: 5 },
  ],
  snarenovice: [
    "Novice Gordo Snare",
    UnlockRequirementNames.POD,
    { newbucks: 250, hunter: 10, primordy: 10, wax: 10, jelly: 10 },
  ],
  snareadvanced: [
    "Advanced Gordo Snare",
    UnlockRequirementNames.THORA,
    { newbucks: 500, hunter: 20, flutter: 10, radiant: 10, wildHoney: 5, lava: 5 },
  ],
  snaremaster: [
    "Master Gordo Snare",
    UnlockRequirementNames.IDK,
    { newbucks: 2000, hunter: 20, sloomber: 20, hyper: 20, petal: 5, blackindigo: 5 },
  ],
  baitpogo: [
    "Fruit Slime Bait",
    UnlockRequirementNames.POD,
    { newbucks: 250, phosphor: 20, batty: 10, honey: 10, wax: 10 },
  ],
  baitcarrot: [
    "Veggie Slime Bait",
    UnlockRequirementNames.POD,
    { newbucks: 250, cotton: 20, rock: 10, crystal: 10, radiant: 10 },
  ],
  baitchicken: [
    "Meat Slime Bait",
    UnlockRequirementNames.POD,
    { newbucks: 250, tabby: 20, boom: 10, hunter: 10, primordy: 10 },
  ],
  slimestage: [
    "Slime Stage",
    UnlockRequirementNames.POD,
    { newbucks: 500, pink: 20, tabby: 10, wax: 10, lava: 5 },
  ],
  slimestagefloral: [
    "Floral Slime Stage",
    UnlockRequirementNames.DOOR,
    { newbucks: 1000, flutter: 20, puddle: 10, petal: 10, wildHoney: 5 },
  ],
  snowballmachine: [
    "Snowball Machine",
    UnlockRequirementNames.POD,
    { newbucks: 2000, saber: 20, snowflake: 10, diamond: 1 },
  ],
  fan: [
    "Easy Breezy Fan",
    UnlockRequirementNames.POD,
    { newbucks: 500, dervish: 10, rock: 5, brine: 3 },
  ],
  bumper: [
    "Round Bumper",
    UnlockRequirementNames.POD,
    { newbucks: 500, pink: 10, saber: 10, primordy: 3 },
  ],
  cannon: [
    "Stunt Cannon",
    UnlockRequirementNames.POD,
    { newbucks: 1000, boom: 20, fire: 5, lava: 3 },
  ],
  accelerator: ["Accelerator", UnlockRequirementNames.POD, { newbucks: 50, ringtail: 1, brine: 1 }],
  goal: [
    "Slimeball Goal",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 5000, honey: 25, flutter: 25, sand: 3 },
  ],
  markerexcl: ["Attention Flag", UnlockRequirementNames.VIKTOR, { newbucks: 50, pink: 5, jelly: 5 }],
  markerno: ["Cautious Flag", UnlockRequirementNames.VIKTOR, { newbucks: 50, pink: 5, fossil: 5 }],
  markerquestion: [
    "Curious Flag",
    UnlockRequirementNames.VIKTOR,
    { newbucks: 50, pink: 5, fossil: 5 },
  ],
  markerfruit: ["Fruit Flag", UnlockRequirementNames.POD, { newbucks: 50, pink: 5, jelly: 5 }],
  markerveggie: ["Veggie Flag", UnlockRequirementNames.POD, { newbucks: 50, pink: 5, jelly: 5 }],
  markermeat: ["Meat Flag", UnlockRequirementNames.POD, { newbucks: 50, pink: 5, jelly: 5 }],
  markerspout: [
    "Spout Resource Flag",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 50, pink: 5, jelly: 5 },
  ],
  markermineral: [
    "Mineral Resource Flag",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 50, pink: 5, jelly: 5 },
  ],
  markerhive: [
    "Hive Resource Flag",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 50, pink: 5, jelly: 5 },
  ],
  markerstabilizer: [
    "Stabilizer Flag",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 50, pink: 5, petal: 1 },
  ],
  dreamlantern: [
    "Dream Lantern",
    UnlockRequirementNames.DOOR,
    { newbucks: 10000, honey: 50, crystal: 50, lava: 10, sand: 10, diamond: 1 },
  ],
  dreamlantern2: [
    "Dream Lantern II",
    UnlockRequirementNames.DOOR,
    { newbucks: 15000, honey: 50, crystal: 50, lava: 10, sand: 10, royal: 1 },
  ],
  radiantprojector: [
    "Radiant Projector",
    UnlockRequirementNames.VIKTOR,
    { newbucks: 500, hunter: 10, boom: 10, sand: 5, lava: 5 },
  ],
  nullifier: [
    "Nullifier",
    UnlockRequirementNames.GIGI,
    { newbucks: 1000, shadow: 20, hyper: 20, twin: 20, sloomber: 20 },
  ],
  disruptiondetector: [
    "Disruption Detector",
    UnlockRequirementNames.GIGI,
    { newbucks: 500, prisma: 10, petal: 5, dream: 5 },
  ],
  dronestation: [
    "Quantum Drone Station",
    UnlockRequirementNames.GHOST,
    { newbucks: 5000, flutter: 100, lava: 15, wildHoney: 15, diamond: 3, droneModule: 1 },
  ],
};

export const utilitiesDescription: { [key in Utility]: string } = {
  medstation:
    "Rapidly drains your energy to restore health. Fixes you up fast!",
  dashpad: "Allows you to briefly sprint with zero energy cost.",
  springpad: "Launches anything that touches it straight into the air!",
  turret:
    "A defensive cannon that will automatically target Tarr and blast them with water.",
  superturret:
    "An advanced defensive cannon that doubles the firepower against tarr.",
  trydroturret:
    "A bigger, better defensive cannon that helps stack the odds against tarr.",
  shower:
    "This oversized sprinkler system is perfect panic button for dealing with large numbers of tarr.",
  tamingbell:
    "The dulcet tone of this curious bell will calm the anger of any feral slime that hears it.",
  watertap: "Creates a refreshing fresh water spring.",
  portablescareslime:
    "Used to keep slimes away from things on your ranch, or to just scare them because you're THAT person.",
  snarenovice:
    "A special snare that captures a gordo slime. Bait it with food and wait...",
  snareadvanced:
    "A more advanced gordo snare with less random results. Bait it with food and wait...",
  snaremaster:
    "A master-class gordo snare that guarantees a gordo who favors the food used.",
  baitpogo:
    "This special slime bait can be used to harmlessly attract fruit-eating slimes.",
  baitcarrot:
    "This special slime bait can be used to harmlessly attract veggie-eating slimes.",
  baitchicken:
    "This special slime bait can be used to harmlessly attract meat-eating slimes.",
  slimestage:
    "Allows you to let other slimes know who is, unequivocally, the number one slime.",
  slimestagefloral:
    "Allows you to let other slimes know who is, unequivocally, the prettiest slime in the garden.",
  snowballmachine:
    "The everfrost cooling system in this device provides fresh and powdery snowballs year-round.",
  fan: "For most ranchers this fan is simply a great way to cool down on a hot day. But you're not most ranchers.",
  bumper:
    "A pinball-inspired bumper that bumps around any object you throw at it. See that? You're picturing a very silly setup with enough of these and slimes, and to that we say YES.",
  cannon:
    "This danger-defying cannon launches whatever is loaded into it through the air. Never get in yourself, unless you're wearing a slime as a safety helmet.",
  accelerator:
    "Any object shot through this ring will gain a boost of speed. It's rumored that too many accelerators bend time and space. Accelerate responsibly!",
  goal: "Challenge your vac skills and delight your slimes with this moving Slimeball goal! How high can you score?",
  markerexcl:
    "A useful marker for when you really need to call attention to something.",
  markerno:
    "A useful marker for when you need to remember to be cautious in an area.",
  markerquestion: "A useful marker to point you towards a nearby curiosity.",
  markerfruit: "A useful marker to call attention to any nearby fruit.",
  markerveggie: "A useful marker to call attention to any nearby veggies.",
  markermeat: "A useful marker to call attention to any nearby chicken nests.",
  markerspout:
    "A useful marker to call attention to any nearby spout resources.",
  markermineral:
    "A useful marker to call attention to any nearby mineral resources.",
  markerhive: "A useful marker to call attention to any nearby hive resources.",
  markerstabilizer:
    "A useful marker to call attention to any nearby stabilizers.",
  dreamlantern:
    "When turned on, the calming aura of this device will put slimes to sleep, and help them stay asleep trough all kinds of disruptions. Tough the mechanism is not fully understood, it seems if must briefly reset every three days, after which it requires manual activation.",
  dreamlantern2:
    "When activated, this advanced Dream Lantern projects a restful aura that puts slimes into a deep sleep, unbroken by any kind of disruption. It lasts for six days, after which it must be manually reactivated.",
  radiantprojector:
    "This device can help restart long-dormant devices in the Grey Labyrinth.",
  nullifier:
    "A strange device designed by Gigi. When placed near unstable walls, it allows passage into the hidden room beyond.",
  disruptiondetector:
    "This device can detect nearby active and incoming prisma disruptions before they even happen.",
  dronestation:
  "Quantum Drones flicker trough obstacles and store items in the quantum cloud. They do different tasks if at the ranch or out in the range. Charge them up for the best results!"
};

export const utilityNames = Object.values(Utility);