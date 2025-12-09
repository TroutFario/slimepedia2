import { Recipe, RecipeElement, UnlockRequirementNames } from "./blueprints";

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
  MARKER_SLIME = "markerslime",
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
  DISTRIBUTOR = "distributor",
}

export const utilitiesList: {
  [key in Utility]: [string, UnlockRequirementNames, Recipe];
} = {
  medstation: [
    "Med Station",
    UnlockRequirementNames.VIKTOR,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.PINK, 10],
      [RecipeElement.BRINE, 10],
      [RecipeElement.JELLY, 5],
    ]),
  ],
  dashpad: [
    "Dash Pad",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.CRYSTAL, 10],
      [RecipeElement.ANGLER, 10],
      [RecipeElement.LAVA, 5],
      [RecipeElement.SAND, 5],
    ]),
  ],
  springpad: [
    "Spring Pad",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.COTTON, 10],
      [RecipeElement.PHOSPHOR, 10],
      [RecipeElement.SAND, 5],
      [RecipeElement.HONEY, 5],
    ]),
  ],
  turret: [
    "Hydro Turret",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 250],
      [RecipeElement.BOOM, 10],
      [RecipeElement.PUDDLE, 5],
      [RecipeElement.BRINE, 5],
    ]),
  ],
  superturret: [
    "Super Turret",
    UnlockRequirementNames.OGDEN,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.BOOM, 30],
      [RecipeElement.PUDDLE, 10],
      [RecipeElement.BRINE, 10],
      [RecipeElement.SAND, 5],
    ]),
  ],
  trydroturret: [
    "Trydroturret",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 2000],
      [RecipeElement.HYPER, 30],
      [RecipeElement.PUDDLE, 20],
      [RecipeElement.AQUA, 10],
      [RecipeElement.PRIMORDY, 10],
    ]),
  ],
  shower: [
    "Hydro Shower",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.FLUTTER, 40],
      [RecipeElement.PUDDLE, 10],
      [RecipeElement.SNOWFLAKE, 10],
      [RecipeElement.WILDHONEY, 5],
    ]),
  ],
  tamingbell: [
    "Taming Bell",
    UnlockRequirementNames.THORA,
    new Map([
      [RecipeElement.NEWBUCKS, 250],
      [RecipeElement.FLUTTER, 10],
      [RecipeElement.COTTON, 10],
      [RecipeElement.PRIMORDY, 10],
      [RecipeElement.WILDHONEY, 5],
    ]),
  ],
  watertap: [
    "Portable Water Tap",
    UnlockRequirementNames.OGDEN,
    new Map([
      [RecipeElement.NEWBUCKS, 250],
      [RecipeElement.PUDDLE, 10],
      [RecipeElement.ANGLER, 10],
      [RecipeElement.BRINE, 10],
      [RecipeElement.RADIANT, 5],
    ]),
  ],
  portablescareslime: [
    "Portable Scare Slime",
    UnlockRequirementNames.OGDEN,
    new Map([
      [RecipeElement.NEWBUCKS, 250],
      [RecipeElement.BATTY, 30],
      [RecipeElement.RINGTAIL, 10],
      [RecipeElement.JELLY, 10],
      [RecipeElement.SAND, 5],
    ]),
  ],
  snarenovice: [
    "Novice Gordo Snare",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 250],
      [RecipeElement.HUNTER, 10],
      [RecipeElement.PRIMORDY, 10],
      [RecipeElement.WAX, 10],
      [RecipeElement.JELLY, 10],
    ]),
  ],
  snareadvanced: [
    "Advanced Gordo Snare",
    UnlockRequirementNames.THORA,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.HUNTER, 20],
      [RecipeElement.FLUTTER, 10],
      [RecipeElement.RADIANT, 10],
      [RecipeElement.WILDHONEY, 5],
      [RecipeElement.LAVA, 5],
    ]),
  ],
  snaremaster: [
    "Master Gordo Snare",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 2000],
      [RecipeElement.HUNTER, 20],
      [RecipeElement.SLOOMBER, 20],
      [RecipeElement.HYPER, 20],
      [RecipeElement.PETAL, 5],
      [RecipeElement.BLACKINDIGO, 5],
    ]),
  ],
  baitpogo: [
    "Fruit Slime Bait",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 250],
      [RecipeElement.PHOSPHOR, 20],
      [RecipeElement.BATTY, 10],
      [RecipeElement.HONEY, 10],
      [RecipeElement.WAX, 10],
    ]),
  ],
  baitcarrot: [
    "Veggie Slime Bait",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 250],
      [RecipeElement.COTTON, 20],
      [RecipeElement.ROCK, 10],
      [RecipeElement.CRYSTAL, 10],
      [RecipeElement.RADIANT, 10],
    ]),
  ],
  baitchicken: [
    "Meat Slime Bait",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 250],
      [RecipeElement.TABBY, 20],
      [RecipeElement.BOOM, 10],
      [RecipeElement.HUNTER, 10],
      [RecipeElement.PRIMORDY, 10],
    ]),
  ],
  slimestage: [
    "Slime Stage",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.PINK, 20],
      [RecipeElement.TABBY, 10],
      [RecipeElement.WAX, 10],
      [RecipeElement.LAVA, 5],
    ]),
  ],
  slimestagefloral: [
    "Floral Slime Stage",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 1000],
      [RecipeElement.FLUTTER, 20],
      [RecipeElement.PUDDLE, 10],
      [RecipeElement.PETAL, 10],
      [RecipeElement.WILDHONEY, 5],
    ]),
  ],
  snowballmachine: [
    "Snowball Machine",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 2000],
      [RecipeElement.SABER, 20],
      [RecipeElement.SNOWFLAKE, 10],
      [RecipeElement.DIAMOND, 1],
    ]),
  ],
  fan: [
    "Easy Breezy Fan",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.DERVISH, 10],
      [RecipeElement.ROCK, 5],
      [RecipeElement.BRINE, 3],
    ]),
  ],
  bumper: [
    "Round Bumper",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.PINK, 10],
      [RecipeElement.SABER, 10],
      [RecipeElement.PRIMORDY, 3],
    ]),
  ],
  cannon: [
    "Stunt Cannon",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 1000],
      [RecipeElement.BOOM, 20],
      [RecipeElement.FIRE, 5],
      [RecipeElement.LAVA, 3],
    ]),
  ],
  accelerator: [
    "Accelerator",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.RINGTAIL, 1],
      [RecipeElement.BRINE, 1],
    ]),
  ],
  goal: [
    "Slimeball Goal",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 5000],
      [RecipeElement.HONEY, 25],
      [RecipeElement.FLUTTER, 25],
      [RecipeElement.SAND, 3],
    ]),
  ],
  markerexcl: [
    "Attention Flag",
    UnlockRequirementNames.VIKTOR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PINK, 5],
      [RecipeElement.JELLY, 5],
    ]),
  ],
  markerno: [
    "Cautious Flag",
    UnlockRequirementNames.VIKTOR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PINK, 5],
      [RecipeElement.FOSSIL, 5],
    ]),
  ],
  markerquestion: [
    "Curious Flag",
    UnlockRequirementNames.VIKTOR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PINK, 5],
      [RecipeElement.FOSSIL, 5],
    ]),
  ],
  markerfruit: [
    "Fruit Flag",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PINK, 5],
      [RecipeElement.JELLY, 5],
    ]),
  ],
  markerveggie: [
    "Veggie Flag",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PINK, 5],
      [RecipeElement.JELLY, 5],
    ]),
  ],
  markermeat: [
    "Meat Flag",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PINK, 5],
      [RecipeElement.JELLY, 5],
    ]),
  ],
  markerspout: [
    "Spout Resource Flag",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PINK, 5],
      [RecipeElement.JELLY, 5],
    ]),
  ],
  markermineral: [
    "Mineral Resource Flag",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PINK, 5],
      [RecipeElement.JELLY, 5],
    ]),
  ],
  markerhive: [
    "Hive Resource Flag",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PINK, 5],
      [RecipeElement.JELLY, 5],
    ]),
  ],
  markerslime: [
    "Slime Resource Flag",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PINK, 5],
      [RecipeElement.JELLY, 1],
    ]),
  ],
  markerstabilizer: [
    "Stabilizer Flag",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PINK, 5],
      [RecipeElement.PETAL, 1],
    ]),
  ],
  dreamlantern: [
    "Dream Lantern",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 10000],
      [RecipeElement.HONEY, 50],
      [RecipeElement.CRYSTAL, 50],
      [RecipeElement.LAVA, 10],
      [RecipeElement.SAND, 10],
      [RecipeElement.DIAMOND, 1],
    ]),
  ],
  dreamlantern2: [
    "Dream Lantern II",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 15000],
      [RecipeElement.HONEY, 50],
      [RecipeElement.CRYSTAL, 50],
      [RecipeElement.LAVA, 10],
      [RecipeElement.SAND, 10],
      [RecipeElement.ROYAL, 1],
    ]),
  ],
  radiantprojector: [
    "Radiant Projector",
    UnlockRequirementNames.VIKTOR,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.HUNTER, 10],
      [RecipeElement.BOOM, 10],
      [RecipeElement.SAND, 5],
      [RecipeElement.LAVA, 5],
    ]),
  ],
  nullifier: [
    "Nullifier",
    UnlockRequirementNames.GIGI,
    new Map([
      [RecipeElement.NEWBUCKS, 1000],
      [RecipeElement.SHADOW, 20],
      [RecipeElement.HYPER, 20],
      [RecipeElement.TWIN, 20],
      [RecipeElement.SLOOMBER, 20],
    ]),
  ],
  disruptiondetector: [
    "Disruption Detector",
    UnlockRequirementNames.GIGI,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.PRISMA, 10],
      [RecipeElement.PETAL, 5],
      [RecipeElement.DREAM, 5],
    ]),
  ],
  dronestation: [
    "Quantum Drone Station",
    UnlockRequirementNames.GHOST,
    new Map([
      [RecipeElement.NEWBUCKS, 5000],
      [RecipeElement.FLUTTER, 100],
      [RecipeElement.LAVA, 15],
      [RecipeElement.WILDHONEY, 15],
      [RecipeElement.DIAMOND, 3],
      [RecipeElement.DRONEMODULE, 1],
    ]),
  ],
  distributor: [
    "Distributor",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 3000],
      [RecipeElement.DERVISH, 25],
      [RecipeElement.SABER, 25],
      [RecipeElement.JELLY, 10],
      [RecipeElement.RADIANT, 10]
    ]),
  ]
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
  markerslime: "A useful marker to call attention to something slime-related nearby.",
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
  "Quantum Drones flicker trough obstacles and store items in the quantum cloud. They do different tasks if at the ranch or out in the range. Charge them up for the best results!",
  distributor:
    "Vacs up nearby objects and shoots them out the other end. It will pick them up from loose on the ground, or from various collectors, depots, or silos. Send objects further than ever before! Only functions with a rancher nearby."
};

export const utilityNames = Object.values(Utility);