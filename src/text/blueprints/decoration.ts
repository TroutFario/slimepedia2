import { Recipe, UnlockRequirementNames } from "./blueprints";

export enum Decoration {
  EMERALD_GRASS = "emeraldgrass",
  EMERALD_SHRUBS = "emeraldshrubs",
  EMERALD_CYPRESS = "emeraldcypress",
  TALL_EMERALD_CYPRESS = "tallemeraldcypress",
  EMERALD_CYPRESS_CLUSTER = "emeraldcypresscluster",
  AMBER_GRASS = "ambergrass",
  AMBER_SHRUBS = "ambershrubs",
  AMBER_CYPRESS = "ambercypress",
  TALL_AMBER_CYPRESS = "tallambercypress",
  AMBER_CYPRESS_CLUSTER = "ambercypresscluster",
  GOLD_PETAL_FLOWERS = "goldpetalflowers",
  OCHRE_POPPIES = "ochrepoppies",
  CINDER_SPIKE_BLOSSOMS = "cinderspikeblossoms",
  STARBLOOM_FLOWERS = "starbloomflowers",
  ASH_BLOOMS = "ashblooms",
  SUNFIRE_DAISIES = "sunfiredaisies",
  RAINBOW_GRASS = "rainbowgrass",
  AZURE_GRASS = "azuregrass",
  AZURE_SHRUBS = "azureshrubs",
  AZURE_MANGROVE = "azuremangrove",
  PINK_GRASS = "pinkgrass",
  PINK_MANGROVE = "pinkmangrove",
  PINK_BONSAI = "pinkbonsai",
  LARGE_PINK_BONSAI = "largepinkbonsai",
  SEASHELLS = "seashells",
  SEASHELL_COLLECTION = "seashellcollection",
  SEAGRASS = "seagrass",
  SEAWEED = "seaweed",
  CURLY_SEAWEED = "curlyseaweed",
  BLUE_REEF_BUSH = "bluereefbush",
  YELLOW_REEF_BUSH = "yellowreefbush",
  PINK_REEF_BUSH = "pinkreefbush",
  BLUE_SWIRL_TREE = "blueswirltree",
  PINK_REEF_TREE = "pinkreeftree",
  PINK_REEF_TREE_CLUSTER = "pinkreeftreecluster",
  TALL_PINK_REEF_TREE = "tallpinkreeftree",
  SHORT_PINK_FLOWER_REEF = "shortpinkflowerreef",
  PINK_FLOWER_REEF = "pinkflowerreef",
  TALL_PINK_FLOWER_REEF = "tallpinkflowerreef",
  BLUE_ANEMONE = "blueanemone",
  PINK_ANEMONE = "pinkanemone",
  PINK_ANEMONE_CLUSTER = "pinkanemonecluster",
  SANDY_YELLOW_CORAL = "sandyyellowcoral",
  SHORT_PALM = "shortpalm",
  MEDIUM_PALM = "mediumpalm",
  ROOT_TANGLE = "roottangle",
  ROOT_ARCHES = "rootarches",
  ROCK_FRAGMENTS = "rockfragments",
  ROCK_CLUSTER = "rockcluster",
  ROCK_CLUMP = "rockclump",
  SMALL_BOULDER = "smallboulder",
  SHARP_BOULDER = "sharpboulder",
  COSTAL_ROCK = "costalrock",
  COSTAL_ROCK_PILLAR = "costalrockpillar",
  RAINBOW_MOUND = "rainbowmound",
  RAINBOW_LUMPS = "rainbowlumps",
  SHORT_PINK_CORAL_COLUMNS = "shortpinkcoralcolumns",
  MEDIUM_PINK_CORAL_COLUMNS = "mediumpinkcoralcolumns",
  TALL_PINK_CORAL_COLUMNS = "tallpinkcoralcolumns",
  TALL_VIOLET_SWIRL_SHROOM = "tallvioletswirlshroom",
  VIOLET_SWIRL_SHROOM = "violetswirlshroom",
  AZURE_GLOW_SHROOMS = "azureglowshrooms",
  PINK_GLOW_SHROOMS = "pinkglowshrooms",
  CAVE_PILLAR = "cavepillar",
  THIN_CAVE_PILLAR = "thincavepillar",
  STALAGMITE = "stalagmite",
  STALAGMITE_CLUSTER = "stalagmitecluster",
  SHORT_MAGMA_CLUMP = "shortmagmaclump",
  TALL_MAGMA_CLUMP = "tallmagmaclump",
  MAGMA_POOL = "magmapool",
  ROUNDED_MAGMA_POOL = "roundedmagmapool",
  RUBY_GRASS = "rubygrass",
  GNARLED_ASH_WOOD = "gnarledashwood",
  SHORT_RED_ASH_WOOD = "shortredashwood",
  MEDIUM_RED_ASH_WOOD = "mediumredashwood",
  TALL_ASH_WOOD = "tallashwood",
  SNOWY_BUSH = "snowybush",
  ICE_TREE_O = "icetreeo",
  FROSTED_SHELL = "frostedshell",
  GLACIAL_CRYSTAL = "glacialcrystal",
  SNOWZ_BENCH = "snowzbench",
  CRYSTAL_SPIRES = "crystalspires",
  ICE_CUBED = "icecubed",
  ICE_LAMP = "icelamp",
  CHILLY_SLIME_STACK = "chillyslimestack",
  FIRE_FLOWER = "fireflower",
  AURORA_FLOWERS = "auroraflowers",
  AURORA_PINE = "aurorapine",
  FROZEN_FLAME = "frozenflame",
  MAJESTIC_SNOWFLAKE = "majesticsnowflake",
  SNOW_GLOBE = "snowglobe",
  STONY_EGG_LAMP = "stonyegglamp",
  MOSSY_HEN_STATUE = "mossyhenstatue",
  BEACH_UMBRELLA = "beachumbrella",
  SUNFLOWER_UMBRELLA = "sunflowerumbrella",
  SAKURA_UMBRELLA = "sakuraumbrella",
  STRIPED_BEACH_BLANKET = "stripedbeachblanket",
  PRIDE_FLAG = "prideflag",
  PENNANT = "pennant",
  RIBBON_STREAMERS = "ribbonstreamers",
  SCARF_STREAMERS = "scarfstreamers",
  WIND_SOCKS = "windsocks",
  SMALL_PINWHEEL = "smallpinwheel",
  LARGE_PINWHEEL = "largepinwheel",
  WIDE_TRELLIS = "widetrellis",
  SMALL_TRELLIS = "smalltrellis",
  TRELLIS_ARCH = "trellisarch",
  WIDE_EMERALD_TRELLIS = "wideemeraldtrellis",
  SMALL_EMERALD_TRELLIS = "smallemeraldtrellis",
  WHEELBARROW = "wheelbarrow",
  WIND_CHIMES = "windchimes",
  CONSERVATORY_BENCH = "conservatorybench",
  LARGE_SIMPLE_BENCH = "largesimplebench",
  CONSERVATORY_CHAIR = "conservatorychair",
  CONSERVATORY_TABLE = "conservatorytable",
  MUSHROOM_PLANTER = "mushroomplanter",
  POTTED_PLANTS = "pottedplants",
  CONSERVATORY_LAMP = "conservatorylamp",
  CHEERFUL_STATUE = "cheerfulstatue",
  HAPPY_STATUE = "happystatue",
  OVERJOYED_STATUE = "overjoyedstatue",
  BOOMBOX = "boombox",
  DAINTY_TEACUP = "daintyteacup",
  BOUNTIFUL_TEACUP = "bountifulteacup",
  PINK_STRIPED_LAMP = "pinkstripedlamp",
  BEACH_LANTERN = "beachlantern",
  SWING = "swing",
  SEESAW = "seesaw",
  DISPLAY_CASE = "displaycase",
  SMALL_SANDCASTLE = "smallsandcastle",
  LARGE_SANDCASTLE = "largesandcastle",
  REEF_CHAIR = "reefchair",
  REEF_TABLE = "reeftable",
  CLAM_THRONE = "clamthrone",
  SLIME_JAIL_STANDEE = "slimejailstandee",
  SUNFLOWER_STANDEE = "sunflowerstandee",
  SNOWMAN_STANDEE = "snowmanstandee",
  TARR_STANDEE = "tarrstandee",
  MUSIC_TILE = "musictile",
  MUSIC_PILLAR = "musicpillar",
  SMALL_NET = "smallnet",
  MEDIUM_NET = "mediumnet",
  LARGE_NET = "largenet",
  ANCIENT_ARCHED_WALL = "ancientarchedwall",
  POTTED_LAVA_PLANTS = "pottedlavaplants",
  EXCAVATION_LIGHTS = "excavationlights",
  WALL_LIGHTING = "walllighting",
  YOUNG_CEDAR_OAK = "youngcedaroak",
  ANCIENT_PURPLE_OAK = "ancientpurpleoak",
  ANCIENT_ROUND_PILLAR = "ancientroundpillar",
  GOLD_SLIME_FLOOR_PANEL = "goldslimefloorpanel",
  AQUARIUM = "aquarium",
  MAGMA_FOUNTAIN = "magmafountain",
  ANGLER_FOUNTAIN = "anglerfountain",
  GOLD_TWISTED_TREE = "goldtwistedtree",
  SHIP_IN_A_BOTTLE = "shipinabottle",
  CAROUSEL = "carousel",
  FERRIS_WHEEL = "ferriswheel",
  WOODEN_FENCE = "woodenfence",
  STRAIGHT_STONE_FENCE = "straightstonefence",
  CURVED_STONE_FENCE = "curvedstonefence",
  ELECTRIC_PILLAR_LAMP = "electricpillarlamp",
  SMALL_FLOWER_PILLOW = "smallflowerpillow",
  LARGE_FLOWER_PILLOW = "largeflowerpillow",
  AZURE_WATER_FLOWER = "azurewaterflower",
  OVERGROWN_LILYPAD = "overgrownlilypad",
  GIANT_STALKS = "giantstalks",
  FLORAL_SLIME_TREE = "floralslimetree",
  FLOWER_LAMP = "flowerlamp",
  HIGHTECH_WALL = "hightechwall",
  HIGHTECH_BATTERY = "hightechbattery",
  MINIATURES_DOME = "miniaturesdome",
  MINIATURE_WINDMILL = "miniaturewindmill",
  GOLDEN_CHICKEN_STATUE = "goldenchickenstatue",
  GOLDEN_COTTON_STATUE = "goldencottonstatue",
  GOLDEN_TABBY_STATUE = "goldentabbystatue",
  GOLDEN_ANGLER_STATUE = "goldenanglerstatue",
  GOLDEN_BATTY_STATUE = "goldenbattystatue",
  GOLDEN_FLUTTER_STATUE = "goldenflutterstatue",
  GOLDEN_DERVISH_STATUE = "goldendervishstatue",
  GOLDEN_TANGLE_STATUE = "goldentanglestatue",
  GOLDEN_TWIN_STATUE = "goldentwinstatue",
  GOLDEN_SLOOMBER_STATUE = "goldensloomberstatue",
  GOLDEN_HYPER_STATUE = "goldenhyperstatue",
  GOLDEN_YOLKY_STATUE = "goldenyolkystatue",
}

export const decorationsList: {
  [key in Decoration]: [string, UnlockRequirementNames, Recipe, string];
} = {
  emeraldgrass: [
    "Emerald Grass",
    UnlockRequirementNames.THORA,
    { newbucks: 25, tabby: 5 },
    "fields",
  ],
  emeraldshrubs: [
    "Emerald Shrubs",
    UnlockRequirementNames.OGDEN,
    { newbucks: 50, phosphor: 10 },
    "fields",
  ],
  emeraldcypress: [
    "Emerald Cypress",
    UnlockRequirementNames.POD,
    { newbucks: 50, tabby: 10 },
    "fields",
  ],
  tallemeraldcypress: [
    "Tall Emerald Cypress",
    UnlockRequirementNames.OGDEN,
    { newbucks: 50, puddle: 5, brine: 1 },
    "fields",
  ],
  emeraldcypresscluster: [
    "Emerald Cypress Cluster",
    UnlockRequirementNames.POD,
    { newbucks: 75, cotton: 10 },
    "fields",
  ],
  goldpetalflowers: [
    "Goldpetal Flowers",
    UnlockRequirementNames.THORA,
    { newbucks: 25, phosphor: 5, brine: 1 },
    "fields",
  ],
  rainbowgrass: ["Rainbow Grass", UnlockRequirementNames.THORA, { newbucks: 25, pink: 5 }, "fields"],
  pinkbonsai: [
    "Pink Bonsai",
    UnlockRequirementNames.OGDEN,
    { newbucks: 150, hunter: 20, jelly: 3, wildHoney: 2, wax: 2 },
    "fields",
  ],
  largepinkbonsai: [
    "Large Pink Bonsai",
    UnlockRequirementNames.POD,
    { newbucks: 200, honey: 20, jelly: 3, brine: 2, sand: 2 },
    "fields",
  ],
  rockfragments: [
    "Rock Fragments",
    UnlockRequirementNames.BOB,
    { newbucks: 50, pink: 5, jelly: 1 },
    "fields",
  ],
  rockcluster: [
    "Rock Cluster",
    UnlockRequirementNames.BOB,
    { newbucks: 50, pink: 10, wax: 1 },
    "fields",
  ],
  rockclump: [
    "Rock Clump",
    UnlockRequirementNames.BOB,
    { newbucks: 50, cotton: 10, brine: 1 },
    "fields",
  ],
  smallboulder: [
    "Small Boulder",
    UnlockRequirementNames.POD,
    { newbucks: 50, cotton: 10, jelly: 1 },
    "fields",
  ],
  sharpboulder: [
    "Sharp Boulder",
    UnlockRequirementNames.BOB,
    { newbucks: 50, rock: 10, brine: 1 },
    "fields",
  ],
  rainbowmound: [
    "Rainbow Mound",
    UnlockRequirementNames.BOB,
    { newbucks: 50, ringtail: 10 },
    "fields",
  ],
  rainbowlumps: ["Rainbow Lumps", UnlockRequirementNames.BOB, { newbucks: 50, rock: 10 }, "fields"],
  shortpinkcoralcolumns: [
    "Short Pink Coral Columns",
    UnlockRequirementNames.MOCHI,
    { newbucks: 100, angler: 5, jelly: 3, wax: 2 },
    "fields",
  ],
  mediumpinkcoralcolumns: [
    "Medium Pink Coral Columns",
    UnlockRequirementNames.OGDEN,
    { newbucks: 150, angler: 20, primordy: 3, jelly: 2, sand: 2 },
    "fields",
  ],
  tallpinkcoralcolumns: [
    "Tall Pink Coral Columns",
    UnlockRequirementNames.THORA,
    { newbucks: 150, angler: 10, wax: 3, primordy: 2, sand: 2 },
    "fields",
  ],
  overjoyedstatue: [
    "Overjoyed Statue",
    UnlockRequirementNames.POD,
    { newbucks: 700, crystal: 15, puddle: 10, hunter: 15, radiant: 10, jelly: 10, },
    "fields",
  ],
  ambergrass: [
    "Amber Grass",
    UnlockRequirementNames.THORA,
    { newbucks: 25, pink: 5, jelly: 1 },
    "valley",
  ],
  ambershrubs: [
    "Amber Shrubs",
    UnlockRequirementNames.OGDEN,
    { newbucks: 50, rock: 10 }, "valley"
  ],
  ambercypress: [
    "Amber Cypress",
    UnlockRequirementNames.OGDEN,
    { newbucks: 50, phosphor: 10, primordy: 1 },
    "valley",
  ],
  tallambercypress: [
    "Tall Amber Cypress",
    UnlockRequirementNames.POD,
    { newbucks: 50, fire: 5, primordy: 1 },
    "valley",
  ],
  ambercypresscluster: [
    "Amber Cypress Cluster",
    UnlockRequirementNames.POD,
    { newbucks: 50, tabby: 10, primordy: 51 },
    "valley",
  ],
  ochrepoppies: [
    "Ochre Poppies",
    UnlockRequirementNames.OGDEN,
    { newbucks: 25, pink: 5, primordy: 1 },
    "valley",
  ],
  cinderspikeblossoms: [
    "Cinder Spike Blossoms",
    UnlockRequirementNames.THORA,
    { newbucks: 25, boom: 10, radiant: 1 },
    "valley",
  ],
  ashblooms: [
    "Ash Blooms",
    UnlockRequirementNames.MOCHI,
    { newbucks: 25, ringtail: 5, lava: 1 },
    "valley",
  ],
  sunfiredaisies: [
    "Sunfire Daisies",
    UnlockRequirementNames.THORA,
    { newbucks: 25, phosphor: 10, primordy: 1 },
    "valley",
  ],
  shortpalm: [
    "Short Palm",
    UnlockRequirementNames.THORA,
    { newbucks: 100, batty: 20, jelly: 3, wax: 3 },
    "valley",
  ],
  mediumpalm: [
    "Medium Palm",
    UnlockRequirementNames.POD,
    { newbucks: 100, honey: 20, brine: 3, primordy: 3, sand: 3 },
    "valley",
  ],
  stalagmite: [
    "Stalagmite",
    UnlockRequirementNames.POD,
    { newbucks: 50, crystal: 10, lava: 1 },
    "valley",
  ],
  stalagmitecluster: [
    "Stalagmite Cluster",
    UnlockRequirementNames.BOB,
    { newbucks: 75, ringtail: 10, brine: 1 },
    "valley",
  ],
  shortmagmaclump: [
    "Short Magma Clump",
    UnlockRequirementNames.MOCHI,
    { newbucks: 100, crystal: 20, primordy: 3, jelly: 2 },
    "valley",
  ],
  tallmagmaclump: [
    "Tall Magma Clump",
    UnlockRequirementNames.POD,
    { newbucks: 150, boom: 10, primordy: 3, brine: 2, lava: 2 },
    "valley",
  ],
  magmapool: [
    "Magma Pool",
    UnlockRequirementNames.POD,
    { newbucks: 150, fire: 10, primordy: 3, jelly: 2, lava: 2 },
    "valley",
  ],
  roundedmagmapool: [
    "Rounded Magma Pool",
    UnlockRequirementNames.MOCHI,
    { newbucks: 200, fire: 10, primordy: 3, radiant: 2, lava: 2 },
    "valley",
  ],
  gnarledashwood: [
    "Gnarled Ashwood",
    UnlockRequirementNames.MOCHI,
    { newbucks: 100, crystal: 20, primordy: 3, wax: 2, fire: 2 },
    "valley",
  ],
  shortredashwood: [
    "Short Red Ashwood",
    UnlockRequirementNames.MOCHI,
    { newbucks: 150, phosphor: 20, primordy: 3, jelly: 2, fire: 2 },
    "valley",
  ],
  mediumredashwood: [
    "Medium Red Ashwood",
    UnlockRequirementNames.MOCHI,
    { newbucks: 150, honey: 20, primordy: 3, wax: 2, fire: 2 },
    "valley",
  ],
  tallashwood: [
    "Tall Ashwood",
    UnlockRequirementNames.MOCHI,
    { newbucks: 150, crystal: 20, primordy: 3, wax: 2, lava: 2 },
    "valley",
  ],
  stonyegglamp: [
    "Stony Egg Lamp",
    UnlockRequirementNames.POD,
    { newbucks: 2500, yolky: 10, fossil: 5, primordy: 5, lava: 2 },
    "valley",
  ],
  happystatue: [
    "Happy Statue",
    UnlockRequirementNames.POD,
    { newbucks: 700, flutter: 15, pink: 15, batty: 15, radiant: 10, primordy: 10 },
    "valley",
  ],
  starbloomflowers: [
    "Starbloom Flowers",
    UnlockRequirementNames.POD,
    { newbucks: 25, flutter: 10, wax: 1 },
    "strand",
  ],
  azuregrass: [
    "Azure Grass",
    UnlockRequirementNames.THORA,
    { newbucks: 25, pink: 5, wax: 1 },
    "strand",
  ],
  azureshrubs: [
    "Azure Shrubs",
    UnlockRequirementNames.OGDEN,
    { newbucks: 50, tabby: 10, brine: 1 },
    "strand",
  ],
  azuremangrove: [
    "Azure Mangrove",
    UnlockRequirementNames.POD,
    { newbucks: 200, puddle: 10, primordy: 3, brine: 2, wildHoney: 2 },
    "strand",
  ],
  pinkgrass: [
    "Pink Grass",
    UnlockRequirementNames.THORA,
    { newbucks: 25, pink: 5, wax: 1 },
    "strand",
  ],
  pinkmangrove: [
    "Pink Mangrove",
    UnlockRequirementNames.THORA,
    { newbucks: 150, jelly: 3, wax: 2, wildHoney: 2 },
    "strand",
  ],
  roottangle: [
    "Root Tangle",
    UnlockRequirementNames.POD,
    { newbucks: 100, ringtail: 20, wax: 3, primordy: 2, wildHoney: 2 },
    "strand",
  ],
  rootarches: [
    "Root Arches",
    UnlockRequirementNames.MOCHI,
    { newbucks: 100, flutter: 20, wax: 3, primordy: 2, wildHoney: 2 },
    "strand",
  ],
  costalrock: [
    "Costal Rock",
    UnlockRequirementNames.POD,
    { newbucks: 75, cotton: 10, jelly: 1 },
    "strand",
  ],
  costalrockpillar: [
    "Costal Rock Pillar",
    UnlockRequirementNames.POD,
    { newbucks: 75, tabby: 10, brine: 1 },
    "strand",
  ],
  tallvioletswirlshroom: [
    "Tall Violet Swirl Shrool",
    UnlockRequirementNames.POD,
    { newbucks: 100, honey: 10, brine: 3, wax: 2, wildHoney: 2 },
    "strand",
  ],
  violetswirlshroom: [
    "Violet Swirl Shroom",
    UnlockRequirementNames.MOCHI,
    { newbucks: 100, hunter: 20, radiant: 3, brine: 2, wildHoney: 2 },
    "strand",
  ],
  azureglowshrooms: [
    "Azure Glow Shrooms",
    UnlockRequirementNames.MOCHI,
    { newbucks: 100, phosphor: 10, brine: 3, wax: 2, diamond: 1 },
    "strand",
  ],
  pinkglowshrooms: [
    "Pink Glow Shrooms",
    UnlockRequirementNames.MOCHI,
    { newbucks: 100, phosphor: 20, jelly: 3, lava: 2, diamond: 1 },
    "strand",
  ],
  cavepillar: [
    "Cave Pillar",
    UnlockRequirementNames.POD,
    { newbucks: 75, pink: 10, brine: 1 },
    "strand",
  ],
  thincavepillar: [
    "Thin Cave Pillar",
    UnlockRequirementNames.BOB,
    { newbucks: 50, rock: 10, brine: 1 },
    "strand",
  ],
  mossyhenstatue: [
    "Mossy Hen Statue",
    UnlockRequirementNames.POD,
    { newbucks: 2500, yolky: 15, brine: 5, fossil: 5, wildHoney: 2 },
    "strand",
  ],
  cheerfulstatue: [
    "Cheerful Statue",
    UnlockRequirementNames.POD,
    { newbucks: 700, ringtail: 20, fire: 10, tabby: 15, radiant: 10, wax: 10 },
    "strand",
  ],
  rubygrass: [
    "Ruby Grass",
    UnlockRequirementNames.THORA,
    { newbucks: 25, pink: 5, brine: 1 },
    "bluffs",
  ],
  snowybush: [
    "Snowy Bush",
    UnlockRequirementNames.POD,
    { newbucks: 100, batty: 10, snowflake: 1 },
    "bluffs",
  ],
  icetreeo: [
    "Ice Treeo",
    UnlockRequirementNames.POD,
    { newbucks: 250, crystal: 15, snowflake: 2 },
    "bluffs",
  ],
  frostedshell: [
    "Frosted Shell",
    UnlockRequirementNames.POD,
    { newbucks: 200, saber: 10, fossil: 2 },
    "bluffs",
  ],
  glacialcrystal: [
    "Glacial Crystal",
    UnlockRequirementNames.POD,
    { newbucks: 100, rock: 10, snowflake: 1 },
    "bluffs",
  ],
  snowzbench: [
    "SnowZ Bench",
    UnlockRequirementNames.POD,
    { newbucks: 1000, saber: 25, cotton: 15, yolky: 5, fossil: 10, jelly: 5 },
    "bluffs",
  ],
  crystalspires: [
    "Crystal Spires",
    UnlockRequirementNames.POD,
    { newbucks: 500, crystal: 10, snowflake: 1 },
    "bluffs",
  ],
  icecubed: [
    "Ice Cubed",
    UnlockRequirementNames.POD,
    { newbucks: 100, puddle: 10, snowflake: 2 },
    "bluffs",
  ],
  icelamp: [
    "Ice Lamp",
    UnlockRequirementNames.POD,
    { newbucks: 100, phosphor: 30, radiant: 3, snowflake: 2, sunsap: 1 },
    "bluffs",
  ],
  chillyslimestack: [
    "Chilly Slime Stack",
    UnlockRequirementNames.POD,
    { newbucks: 800, saber: 25, rock: 10, snowflake: 3 },
    "bluffs",
  ],
  fireflower: [
    "Fire Flower",
    UnlockRequirementNames.POD,
    { newbucks: 500, tangle: 15, wax: 5 },
    "bluffs",
  ],
  auroraflowers: [
    "Aurora Flowers",
    UnlockRequirementNames.POD,
    { newbucks: 25, saber: 5 },
    "bluffs",
  ],
  aurorapine: [
    "Aurora Pine",
    UnlockRequirementNames.POD,
    { newbucks: 5000, honey: 25, fossil: 10, wax: 10 },
    "bluffs",
  ],
  frozenflame: [
    "Frozen Flame",
    UnlockRequirementNames.POD,
    { newbucks: 6000, puddle: 15, fire: 15, snowflake: 10, radiant: 10 },
    "bluffs",
  ],
  majesticsnowflake: [
    "Majestic Snowflake",
    UnlockRequirementNames.POD,
    { newbucks: 8000, saber: 25, flutter: 25, snowflake: 10 },
    "bluffs",
  ],
  snowglobe: [
    "Snow Globe",
    UnlockRequirementNames.POD,
    { newbucks: 15000, yolky: 20, boom: 25, fossil: 10 },
    "bluffs",
  ],
  conservatorybench: [
    "Conservatory Bench",
    UnlockRequirementNames.POD,
    { newbucks: 100, pink: 10 },
    "conservatory",
  ],
  largesimplebench: [
    "Large Simple Bench",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 500, boom: 10, cotton: 10, drift: 3 },
    "conservatory",
  ],
  conservatorychair: [
    "Conservatory Chair",
    UnlockRequirementNames.VIKTOR,
    { newbucks: 100, cotton: 10 },
    "conservatory",
  ],
  conservatorytable: [
    "Conservatory Table",
    UnlockRequirementNames.VIKTOR,
    { newbucks: 100, tabby: 10 },
    "conservatory",
  ],
  conservatorylamp: [
    "Conservatory Lamp",
    UnlockRequirementNames.POD,
    { newbucks: 100, phosphor: 10, glass: 1 },
    "conservatory",
  ],
  smalltrellis: [
    "Small Trellis",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 100, tabby: 5, brine: 5 },
    "conservatory",
  ],
  widetrellis: [
    "Wide Trellis",
    UnlockRequirementNames.POD,
    { newbucks: 150, angler: 5, jelly: 3 },
    "conservatory",
  ],
  trellisarch: [
    "Trellis Arch",
    UnlockRequirementNames.POD,
    { newbucks: 150, batty: 5, wildHoney: 3 },
    "conservatory",
  ],
  smallemeraldtrellis: [
    "Small Emerald Trellis",
    UnlockRequirementNames.OGDEN,
    { newbucks: 100, cotton: 20, brine: 3, jelly: 2, wildHoney: 2 },
    "conservatory",
  ],
  wideemeraldtrellis: [
    "Wide Emerald Trellis",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 200, tangle: 10, jelly: 3 },
    "conservatory",
  ],
  pottedplants: [
    "Potted Plants",
    UnlockRequirementNames.POD,
    { newbucks: 250, honey: 10, brine: 5 },
    "conservatory",
  ],
  mushroomplanter: [
    "Mushroom Planter",
    UnlockRequirementNames.POD,
    { newbucks: 100, tabby: 5, fossil: 3 },
    "conservatory",
  ],
  displaycase: [
    "Display Case",
    UnlockRequirementNames.POD,
    { newbucks: 1500, crystal: 10, glass: 5 },
    "conservatory",
  ],
  wheelbarrow: [
    "Wheelbarrow",
    UnlockRequirementNames.POD,
    { newbucks: 100, rock: 10, sand: 5 },
    "conservatory",
  ],
  goldenanglerstatue: [
    "Golden Angler Statue",
    UnlockRequirementNames.POD,
    { newbucks: 15000, angler: 50, gold: 3, primordy: 10, diamond: 1 },
    "golden",
  ],
  goldenbattystatue: [
    "Golden Batty Statue",
    UnlockRequirementNames.POD,
    { newbucks: 15000, batty: 50, gold: 3, jelly: 10, diamond: 1 },
    "golden",
  ],
  goldenchickenstatue: [
    "Golden Chicken Statue",
    UnlockRequirementNames.POD,
    { newbucks: 15000, yolky: 20, gold: 3, fossil: 10, diamond: 1 },
    "golden",
  ],
  goldencottonstatue: [
    "Golden Cotton Statue",
    UnlockRequirementNames.POD,
    { newbucks: 15000, cotton: 50, gold: 3, brine: 10, diamond: 1 },
    "golden",
  ],
  goldendervishstatue: [
    "Golden Dervish Statue",
    UnlockRequirementNames.POD,
    { newbucks: 15000, dervish: 50, gold: 3, primordy: 10, diamond: 1 },
    "golden",
  ],
  goldenflutterstatue: [
    "Golden Flutter Statue",
    UnlockRequirementNames.POD,
    { newbucks: 15000, flutter: 50, gold: 3, wax: 10, diamond: 1 },
    "golden",
  ],
  goldentabbystatue: [
    "Golden Tabby Statue",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 10000, tabby: 50, gold: 3, wax: 10, diamond: 1 },
    "golden",
  ],
  goldentanglestatue: [
    "Golden Tangle Statue",
    UnlockRequirementNames.POD,
    { newbucks: 15000, tangle: 50, gold: 3, jelly: 10, diamond: 1 },
    "golden",
  ],
  // pas sur ==============================================================================\
  goldentwinstatue: [
    "Golden Twin Statue",
    UnlockRequirementNames.NIGHT,
    {},
    "golden",
  ],
  goldensloomberstatue: [
    "Golden Sloomber Statue",
    UnlockRequirementNames.NIGHT,
    {},
    "golden",
  ],
  goldenhyperstatue: [
    "Golden Hyper Statue",
    UnlockRequirementNames.NIGHT,
    {},
    "golden",
  ],
  goldenyolkystatue: [
    "Golden Yolky Statue",
    UnlockRequirementNames.DOOR,
    {},
    "golden",
  ],
  woodenfence: [
    "Wooden Fence",
    UnlockRequirementNames.DOOR,
    { twin: 10, petal: 5, blackindigo: 5, newbucks: 150 },
    "labyrinth",
  ],
  straightstonefence: [
    "Straight Stone Fence",
    UnlockRequirementNames.DOOR,
    { sloomber: 10, rock: 10, blackindigo: 5, jelly: 5, newbucks: 200 },
    "labyrinth",
  ],
  curvedstonefence: [
    "Curved Stone Fence",
    UnlockRequirementNames.DOOR,
    { sloomber: 10, rock: 10, blackindigo: 5, jelly: 5, newbucks: 200 },
    "labyrinth",
  ],
  electricpillarlamp: [
    "Electric Pillar Lamp",
    UnlockRequirementNames.NIGHT,
    {},
    "labyrinth",
  ],
  smallflowerpillow: [
    "Small Flower Pillow",
    UnlockRequirementNames.NIGHT,
    { honey: 10, cotton: 10, sand: 5, newbucks: 200 },
    "labyrinth",
  ],
  largeflowerpillow: [
    "Large Flower Pillow",
    UnlockRequirementNames.NIGHT,
    { flutter: 10, batty: 10, wildHoney: 5, newbucks: 250 },
    "",
  ],
  azurewaterflower: [
    "Azure Water Flower",
    UnlockRequirementNames.DOOR,
    { hyper: 10, puddle: 10, aqua: 5, newbucks: 200 },
    "labyrinth",
  ],
  overgrownlilypad: [
    "Overgrown Lilypad",
    UnlockRequirementNames.DOOR,
    { twin: 10, hyper: 10, aqua: 5, newbucks: 200 },
    "labyrinth",
  ],
  giantstalks: [
    "Giant Stalks",
    UnlockRequirementNames.DOOR,
    { tangle: 10, tabby: 10, wax: 5, newbucks: 200 },
    "labyrinth",
  ],
  floralslimetree: [
    "Floral Slime Tree",
    UnlockRequirementNames.DOOR,
    { tangle: 10, tabby: 10, wax: 5, newbucks: 200 },
    "labyrinth",
  ],
  flowerlamp: [
    "Flower Lamp",
    UnlockRequirementNames.DOOR,
    { hyper: 20, hunter: 10, petal: 10, blackindigo: 10, newbucks: 1500 },
    "labyrinth",
  ],
  hightechwall: [
    "High-Tech Wall",
    UnlockRequirementNames.NIGHT,
    {},
    "labyrinth",
  ],
  hightechbattery: [
    "High-Tech Battery",
    UnlockRequirementNames.NIGHT,
    {},
    "labyrinth",
  ],
  miniaturesdome: [
    "Miniatures Dome",
    UnlockRequirementNames.DOOR,
    { twin: 25, batty: 25, petal: 20, dream: 20, newbucks: 20000 },
    "labyrinth",
  ],
  miniaturewindmill: [
    "Miniature Windmill",
    UnlockRequirementNames.NIGHT,
    {},
    "labyrinth",
  ],
  // pas sur ==============================================================================/
  yellowreefbush: [
    "Yellow Reef Bush",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 25, cotton: 5, brine: 1 },
    "beach",
  ],
  sunflowerumbrella: [
    "Sunflower Umbrella",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 200, cotton: 5, honey: 5, wildHoney: 1 },
    "beach",
  ],
  sakuraumbrella: [
    "Sakura Umbrella",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 200, cotton: 5, pink: 5, wax: 1 },
    "beach",
  ],
  beachumbrella: [
    "Beach Umbrella",
    UnlockRequirementNames.POD,
    { newbucks: 200, cotton: 20, pink: 5, sand: 1 },
    "beach",
  ],
  stripedbeachblanket: [
    "Striped Beach Blanket",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 150, cotton: 10, jelly: 3 },
    "beach",
  ],
  beachlantern: [
    "Beach Lantern",
    UnlockRequirementNames.POD,
    { newbucks: 200, angler: 5, lava: 3 },
    "beach",
  ],
  seashells: [
    "Seashells",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 25, tabby: 5, primordy: 1 },
    "beach",
  ],
  seashellcollection: [
    "Seashell Collection",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 25, cotton: 5, radiant: 1 },
    "beach",
  ],
  seagrass: [
    "Seagrass",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 25, tabby: 5, brine: 1 },
    "beach",
  ],
  seaweed: [
    "Seaweed",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 25, pink: 5, jelly: 1 },
    "beach",
  ],
  curlyseaweed: [
    "Curly Seaweed",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 25, phosphor: 5, fossil: 1 },
    "beach",
  ],
  blueswirltree: [
    "Blue Swirl Tree",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 50, boom: 10, radiant: 1 },
    "beach",
  ],
  pinkreefbush: [
    "Pink Reef Bush",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 50, fire: 5, fossil: 1 },
    "beach",
  ],
  pinkreeftree: [
    "Pink Reef Tree",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 50, angler: 10, primordy: 1 },
    "beach",
  ],
  pinkreeftreecluster: [
    "Pink Reef Tree Cluster",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 50, cotton: 10, fossil: 1 },
    "beach",
  ],
  tallpinkreeftree: [
    "Tall Pink Reef Tree",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 50, tabby: 10, glass: 1 },
    "beach",
  ],
  bluereefbush: [
    "Blue Reef Bush",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 50, saber: 10, jelly: 1 },
    "beach",
  ],
  blueanemone: [
    "Blue Anemone",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 25, phosphor: 5, wax: 1 },
    "beach",
  ],
  pinkanemone: [
    "Pink Anemone",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 25, pink: 5, jelly: 1 },
    "beach",
  ],
  pinkanemonecluster: [
    "Pink Anemone Cluster",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 25, tabby: 5, radiant: 1 },
    "beach",
  ],
  shortpinkflowerreef: [
    "Short Pink Flower Reef",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 50, dervish: 10, jelly: 1 },
    "beach",
  ],
  pinkflowerreef: [
    "Pink Flower Reef",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 50, honey: 10, wax: 1 },
    "beach",
  ],
  tallpinkflowerreef: [
    "Tall Pink Flower Reef",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 50, tangle: 10, snowflake: 1 },
    "beach",
  ],
  clamthrone: [
    "Clam Throne",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 500, angler: 10, honey: 10, brine: 3 },
    "beach",
  ],
  smallsandcastle: [
    "Small Sand Castle",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 500, fire: 10, flutter: 10, wildHoney: 3 },
    "beach",
  ],
  largesandcastle: [
    "Large Sand Castle",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 500, puddle: 10, honey: 10, sand: 3 },
    "beach",
  ],
  reefchair: [
    "Reef Chair",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 200, puddle: 5, fossil: 5 },
    "beach",
  ],
  reeftable: [
    "Reef Table",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 200, angler: 10, brine: 5 },
    "beach",
  ],
  smallnet: [
    "Small Net",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 400, cotton: 10, wildHoney: 3 },
    "beach",
  ],
  mediumnet: [
    "Medium Net",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 500, puddle: 10, sand: 3 },
    "beach",
  ],
  largenet: [
    "Large Net",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 1000, dervish: 20, glass: 5 },
    "beach",
  ],
  shipinabottle: [
    "Ship in a Bottle",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 9000, flutter: 50, tabby: 50, radiant: 10, sunsap: 1 },
    "beach",
  ],
  sandyyellowcoral: [
    "Sandy Yellow Coral",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 50, angler: 10, brine: 1 },
    "beach",
  ],
  pennant: ["Pennant", UnlockRequirementNames.VIKTOR, { newbucks: 50, pink: 5 }, "fun"],
  ribbonstreamers: [
    "Ribbon Streamers",
    UnlockRequirementNames.VIKTOR,
    { newbucks: 50, pink: 5 },
    "fun",
  ],
  scarfstreamers: [
    "Scarf Streamers",
    UnlockRequirementNames.VIKTOR,
    { newbucks: 50, pink: 5 },
    "fun",
  ],
  windsocks: ["Windsocks", UnlockRequirementNames.VIKTOR, { newbucks: 50, dervish: 5 }, "fun"],
  smallpinwheel: [
    "Small Pinwheel",
    UnlockRequirementNames.VIKTOR,
    { newbucks: 50, dervish: 5, wax: 1 },
    "fun",
  ],
  largepinwheel: [
    "Large Pinwheel",
    UnlockRequirementNames.VIKTOR,
    { newbucks: 50, tangle: 5, jelly: 1 },
    "fun",
  ],
  windchimes: [
    "Windchimes",
    UnlockRequirementNames.POD,
    { newbucks: 250, honey: 10, drift: 5 },
    "fun",
  ],
  boombox: [
    "Boombox",
    UnlockRequirementNames.POD,
    { newbucks: 1000, boom: 25, angler: 25, fossil: 5, glass: 3 },
    "fun",
  ],
  daintyteacup: [
    "Dainty Teacup",
    UnlockRequirementNames.POD,
    { newbucks: 500, angler: 10, primordy: 5 },
    "fun",
  ],
  bountifulteacup: [
    "Bountiful Teacup",
    UnlockRequirementNames.POD,
    { newbucks: 500, fire: 10, glass: 5 },
    "fun",
  ],
  pinkstripedlamp: [
    "Pink Striped Lamp",
    UnlockRequirementNames.POD,
    { newbucks: 200, pink: 20, mote: 3 },
    "fun",
  ],
  swing: [
    "Swing",
    UnlockRequirementNames.POD,
    { newbucks: 1500, batty: 25, wildHoney: 4, drift: 6 },
    "fun",
  ],
  prideflag: ["Pride Flag", UnlockRequirementNames.POLESTAR, { newbucks: 50, pink: 5 }, "fun"],
  seesaw: [
    "Seesaw",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 1000, hunter: 25, tabby: 25, brine: 3 },
    "fun",
  ],
  carousel: [
    "Carousel",
    UnlockRequirementNames.POD,
    { newbucks: 10000, phosphor: 50, crystal: 50, radiant: 10, mote: 5, diamond: 1 },
    "fun",
  ],
  ferriswheel: [
    "Ferris Wheel",
    UnlockRequirementNames.POD,
    { newbucks: 10000, ringtail: 50, rock: 50, brine: 10, drift: 3, sunsap: 1 },
    "fun",
  ],
  slimejailstandee: [
    "Slime Jail Standee",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 500, ringtail: 10, tabby: 5, lava: 3 },
    "fun",
  ],
  sunflowerstandee: [
    "Sunflower Standee",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 500, tangle: 10, puddle: 5, radiant: 3 },
    "fun",
  ],
  snowmanstandee: [
    "Snowman Standee",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 500, saber: 10, cotton: 5, snowflake: 3 },
    "fun",
  ],
  tarrstandee: [
    "Tarr Standee",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 500, hunter: 10, boom: 5, glass: 3 },
    "fun",
  ],
  musictile: [
    "Music Tile",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 50, saber: 3, tabby: 3, radiant: 1 },
    "fun",
  ],
  musicpillar: [
    "Music Pilar",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 50, hunter: 3, cotton: 3, radiant: 1 },
    "fun",
  ],
  anglerfountain: [
    "Angler Fountain",
    UnlockRequirementNames.DOOR,
    { newbucks: 9000, sloomber: 25, prisma: 20, brine: 10, aqua: 10 },
    "labyrinth",
  ],
  magmafountain: [
    "Magma Fountain",
    UnlockRequirementNames.DOOR,
    { newbucks: 7000, twin: 25, fire: 25, primordy: 10, magma: 10 },
    "labyrinth",
  ],
  ancientroundpillar: [
    "Ancient Round Pillar",
    UnlockRequirementNames.DOOR,
    { newbucks: 100, twin: 10, blackindigo: 3 },
    "labyrinth",
  ],
  ancientarchedwall: [
    "Ancient Arched Wall",
    UnlockRequirementNames.DOOR,
    { newbucks: 200, rock: 10, petal: 5, blackindigo: 5 },
    "labyrinth",
  ],
  excavationlights: [
    "Excavation Lights",
    UnlockRequirementNames.DOOR,
    { newbucks: 150, dervish: 10, aqua: 5, dream: 5 },
    "labyrinth",
  ],
  goldslimefloorpanel: [
    "Gold Slime Floor Panel",
    UnlockRequirementNames.DOOR,
    { newbucks: 1000, sloomber: 25, flutter: 25, aqua: 10, dream: 10 },
    "labyrinth",
  ],
  goldtwistedtree: [
    "Gold Twisted Tree",
    UnlockRequirementNames.DOOR,
    { newbucks: 1000, sloomber: 20, petal: 15, aqua: 5, dream: 5 },
    "labyrinth",
  ],
  ancientpurpleoak: [
    "Ancient Purple Oak",
    UnlockRequirementNames.DOOR,
    { newbucks: 200, sloomber: 10, petal: 5, wax: 5 },
    "labyrinth",
  ],
  youngcedaroak: [
    "Young Cedaroak",
    UnlockRequirementNames.DOOR,
    { newbucks: 200, twin: 10, petal: 5, wildHoney: 5 },
    "labyrinth",
  ],
  pottedlavaplants: [
    "Potted Lava Plants",
    UnlockRequirementNames.DOOR,
    { newbucks: 150, tangle: 10, petal: 5, blackindigo: 5 },
    "labyrinth",
  ],
  walllighting: [
    "Ancient Wall Lighting",
    UnlockRequirementNames.DOOR,
    { newbucks: 50, rock: 3, primordy: 3, diamond: 1 },
    "labyrinth",
  ],
  aquarium: [
    "Aquarium",
    UnlockRequirementNames.DOOR,
    { newbucks: 6000, twin: 25, hunter: 25, puddle: 5, aqua: 10 },
    "labyrinth",
  ],
};

export const decorationsDescription: { [key in Decoration]: string } = {
  emeraldgrass:
    "A small patch of idyllic, lush grass that never needs watering. Truly miraculous!",
  emeraldshrubs:
    "Vibrantly green and often found near cypresses, they will not grow into trees. They're shrubs.",
  emeraldcypress:
    "A tree whose leaves are a rich emerald color. They're just leaves though, and won't make you rich.",
  tallemeraldcypress:
    "This cypress is extra lush and healthy. It must be because it's taller and gets more sunlight.",
  emeraldcypresscluster:
    "A group of cypress trees is a great start for a grove. Two times more effective than a lone tree.",
  goldpetalflowers:
    "Lustrous and glittering, these flowers definitely aren't gold but are beautiful nonetheless.",
  rainbowgrass:
    "This unique ground cover ripples with all the colors of the Rainbow Fields.",
  pinkbonsai:
    "This contemplative arrangement of tree and rock is guaranteed to decrease stress. It's science.",
  largepinkbonsai:
    "A lovely centerpiece to any garden, this arrangement evokes peace, calm, and the joy of pink slimes.",
  rockfragments:
    "Rock slimes get their spikes by rolling over fragments like these tiny shards.",
  rockcluster:
    "A clump of rocks resulting from repeated rock slime impacts against larger boulders.",
  rockclump:
    "Sometimes these are signs of a Rock Gordo! But most of the time they're just a bunch of rocks.",
  smallboulder: "Larger than a pebble. Smaller than a boulder.",
  sharpboulder:
    "Wind and time have sharpened this rock formation to a rough point.",
  rainbowmound:
    "Rumor has it that cotton slimes perfect their jumping by bounding over these grass-covered mounds.",
  rainbowlumps:
    "A dollop of soil and rocks topped and sprinkled with prismatic grass.",
  overjoyedstatue:
    "The only thing potentially happier than a slime is an overjoyed statue of a slime.",
  ambergrass:
    "Grass that flashes with the fiery colors of fall, but without the satisfying crunch of dry grass.",
  ambershrubs: "Orange as a pumpkin, but you can't carve them. They're shrubs.",
  ambercypress:
    "Minerals in the soil give this cypress a fiery orange hue reminiscent of fall.",
  tallambercypress:
    "Mineral-packed soil gives this strong cypress its signature fall hue and exceptional height.",
  ambercypresscluster:
    "Good thing the soil gives these amber trees their color rather than seasons. Less leaves to sweep.",
  ochrepoppies:
    "A patch of poppies whose leaves are the color of the setting sun.",
  cinderspikeblossoms:
    "These blossoms glow with the heat of the magma far beneath their soil.",
  ashblooms:
    "Flowers growing near lava flows that take on the burning hue of the magma beneath the surface.",
  sunfiredaisies:
    "It's recommended to wear eye protection when staring straight into the center of these daisies.",
  shortpalm:
    "These palms provide a nice shade-covered retreat for slimes in hot environments.",
  mediumpalm:
    "These tall palms are like leafy umbrellas offering protection from the sun.",
  stalagmite:
    "Looks like a giant tooth. It's a good thing the caves they're found in are just caves. Right?",
  stalagmitecluster:
    "Found often in batty slime caves, this rocky cluster resembles a pair of fangs. Creepy coincidence.",
  shortmagmaclump: "A small clump of magma that has cooled for now.",
  tallmagmaclump:
    "Bubbling up from deep underground, these magma clumps give off tremendous amounts of heat.",
  magmapool:
    "There's nothing like a hot, relaxing soak in the magma pool... if you're a fire slime.",
  roundedmagmapool:
    "Shaped like a natural, geothermal cauldron, the only things it'll cook are careless ranchers.",
  gnarledashwood:
    "A bare, twisted tree, which means fewer leaves catching fire in the lava areas the tree is found in.",
  shortredashwood:
    "Found far above lava flows, these ashwood trees have fiery red leaves.",
  mediumredashwood:
    "These tall ashwood trees rise far above the heat that would cause their red leaves to wilt.",
  tallashwood:
    "A tall tree that has lost its leaves. Perfect for a spooky holiday.",
  stonyegglamp:
    "These rounded, stone lamps are egg-cellent ways to brighten up the night.",
  happystatue:
    "Ancient sculptors captured the likeness of a well-fed slime in its natural state.",
  starbloomflowers:
    "Flowers that shimmer like shooting stars and are rumored to grow where the fragments land.",
  azuregrass:
    "A small patch of grass and flowers that smell like a refreshing, cool breeze after a rainstorm.",
  azureshrubs:
    "These soothing shrubs may be as blue as the sky and fluffy as a cloud, but they're just bushes.",
  azuremangrove:
    "The sky-colored, fluffy canopy of this mangrove is held aloft like a cloud on a stick.",
  pinkgrass: "This soft, pink grass makes for a lovely place to take a nap.",
  pinkmangrove:
    "Usually found on coasts, this mangrove uses the slime-linity of the soil to grow anywhere.",
  roottangle:
    "Often mistaken for tree trunks, these are actually roots. Some trees can grow to massive scales.",
  rootarches:
    "These graceful natural arches mirror the larger structures found around certain areas of the island.",
  costalrock:
    "Retains its smooth, ocean-worn surface even when taken out of its natural environment.",
  costalrockpillar:
    "You've saved this rocky pillar from its demise by ocean-based erosion.",
  shortpinkcoralcolumns:
    "These coral towers are usually found submerged beneath the slime sea. Curious.",
  mediumpinkcoralcolumns:
    "Once populated by other aquatic life, these columns are often found where angler slimes abound.",
  tallpinkcoralcolumns:
    "The level of the slime sea once rose above even these tall columns of pink coral.",
  tallvioletswirlshroom:
    "The caps of these mushrooms hardened long ago, otherwise they look like springy platforms.",
  violetswirlshroom:
    "These mysterious mushrooms shouldn't be eaten even if their caps do look like candy.",
  azureglowshrooms:
    "Despite being the color of a clear blue sky, these mushrooms truly shine at night.",
  pinkglowshrooms:
    "These pink and springy mushrooms get their unique properties from their slime-filled ecosystems.",
  cavepillar:
    "This pillar of solid stone looks like it could hold up a tiny cave roof. Tiny cave not included.",
  thincavepillar:
    "Formed by mineral-rich water droplets, on their own these thin pillars look like 'cavern trees'.",
  mossyhenstatue:
    "This moss-covered statue depicts the most serene hen hen in egg-istence.",
  cheerfulstatue:
    "This eternally cheerful slime never gets hungry or agitated, but unfortunately makes no plorts.",
  rubygrass:
    "A small patch of vibrant, hardy grass that thrives even in the coldest environments.",
  snowybush:
    "This red shrub adds a splash of rosy warmth to even the coldest climates.",
  icetreeo:
    "These red spruce trees come in triplets to quickly bring boreal beauty anywhere on Rainbow Island.",
  frostedshell:
    "An ancient shell that was once home to a Pre-Jellassic ammonite.",
  glacialcrystal:
    "Just looking at these massive chunks of glacial ice is enough to make one shiver. Brrrr!",
  snowzbench:
    "Bundle up and have some hot cocoa while relaxing on this cozy, snow-dappled bench.",
  crystalspires:
    "Defying even the warmest temperatures, these spires of ice refuse to melt.",
  icecubed:
    "Is it an art piece? Is it a miniature slime ziggurat? A saber slime scratching post?",
  icelamp: "These glacial gifts light up the night with inner radiance.",
  chillyslimestack:
    "Add a touch of playful, wintry cheer with this snowy stack of slimes.",
  fireflower:
    "This fiery flora glows with heat supplied by the planet's magma without any of the actual fire hazards.",
  auroraflowers:
    "While not truly auroras, these ethereal flowers capture the majestic, prismatic splendor of the night sky.",
  aurorapine:
    "While not truly an aurora, this ethereal pine tree evokes the wonder of the night sky even during the day.",
  frozenflame:
    "Prismatic energy captured in ice the shape of a dancing flame lights up the night surely as any fire.",
  majesticsnowflake:
    "It's not perfect, but this massive snowflake adds a touch of serenity and grace anywhere it's placed.",
  snowglobe:
    "A decorative globe that plays a hauntingly beautiful melody reminiscent of a moonlit dance during a snowy night.",
  conservatorybench:
    "A bench that invites one to just relax and take in the view. Even the energetic slimes enjoy taking a break on a bench now and then.",
  largesimplebench:
    "An inviting bench, where slimes can relax together and take a breath.",
  conservatorychair:
    "If slimes had legs they'd love to kick back and relax on one of these comfy chairs. For now, they can only dream...",
  conservatorytable:
    "A simple round table that is clearly part of a furniture set. Chairs sold separately, because that's how they get you.",
  conservatorylamp:
    "These self-powered lamps use mysterious, advanced technology so their bulbs never need to be changed.",
  smalltrellis:
    "This small trellis wall is a great way to add structure to a garden when space is at a premium or you're just a big fan of small trellises.",
  widetrellis:
    "This trellis wall is a great way to add structure to a garden, though some might say a garden should have no such thing.",
  trellisarch:
    "A beautiful accent to any trellis wall that comes with hanging ivy and a small planter of flowers.",
  smallemeraldtrellis:
    "Provides a touch of privacy like a natural drapery of vines, but makes it fashionable.",
  wideemeraldtrellis:
    "A large trellis with lovely ivy growing over it. Perfect for adding a bit of structure to a garden.",
  pottedplants:
    "A collection of various flowers found around Rainbow Island to brighten up any space.",
  mushroomplanter: "Add a sporal splash of color with some fabulous fungi.",
  displaycase:
    "Show off your prized collection of items with this handy display case. Perfectly preserving objects for your viewing pleasure!",
  wheelbarrow:
    "Despite vacpack technology making many manual hauling devices obsolete, wheelbarrows persisted for their advanced ability to get in one and go weeeeeeee.",
  goldenanglerstatue:
    "Dazzle onlookers with this golden monument to Rainbow Island's most flashy slime.",
  goldenbattystatue:
    "This shining monument to Rainbow Island's nocturnal hunters will bring a sparkle to even the darkest cave.",
  goldenchickenstatue: "A golden, soaring monument to all chicken-kind.",
  goldencottonstatue:
    "Elevate any area with this golden monument to Rainbow Island's resident high jumper.",
  goldendervishstatue:
    "Celebrate Dervish Slimes with this shiny, gold statue that importantly, remains perfectly still all the time, and doesn't create hazardous cyclones. If it ever does: full refund.",
  goldenflutterstatue:
    "A golden monument to Rainbow Island's most soothing slime.",
  goldentabbystatue:
    "A golden monument to Rainbow Island's most playful boopers.",
  goldentanglestatue:
    "A golden monument to the tenacious Tangle slime, which makes a great garden centerpiece when you'd rather not deal with Tangle Slimes.",
  yellowreefbush: "This reef bush evokes the warmth and calm of a summer day.",
  sunflowerumbrella:
    "A large, sunflower-shaped umbrella perfect for providing shade for a picnic.",
  sakuraumbrella:
    "A large umbrella with vibrant blossoms perfect for providing shade for a spring outing.",
  beachumbrella:
    "A large, playful umbrella perfect for providing shade for a beach day.",
  stripedbeachblanket:
    "Perfect for lying out on the beach and soaking up some rays. (not the fish)",
  beachlantern:
    "A hanging lantern in the shape of a beach ball, yet it is not a beach ball, but instead a hanging lantern. So, very clever of this beach ball I mean lantern.",
  seashells:
    "While delicate, these seashells add a pop of color and character to any garden.",
  seashellcollection:
    "A collection of pristine shells found in tide pools and on rocky shores.",
  seagrass: "A small patch of grass that sways gracefully in water or wind.",
  seaweed:
    "This robust seaweed is able to thrive everywhere from deep currents to sandy beaches.",
  curlyseaweed: "This robust seaweed can grow in water and on land.",
  blueswirltree:
    "These trees unfurl to enormous sizes in the depths of the slime sea, but swirl playfully when transplanted to the shore.",
  pinkreefbush:
    "This hardly little reef bush resembles a mass of pink worms, but is only occasionally an actual mass of worms.",
  pinkreeftree:
    "The delicate tendrils of this reef tree add an elegant touch to any aquatic garden.",
  pinkreeftreecluster:
    "A cluster of delicate reef trees that provide a sense of tranquility in any garden.",
  tallpinkreeftree:
    "Tall reef trees add a sense of grandeur to any seascape or garden.",
  bluereefbush:
    "This reef bush offers a pop of color that brings to mind a still and serene seascape.",
  blueanemone:
    "This small blue anemone thrives in coastal regions, smelling of the sea and salt in that order.",
  pinkanemone:
    "This small pink anemone thrives in coastal regions, smelling of salt and the sea in that order.",
  pinkanemonecluster:
    "This decorative cluster of anemones will add an ocean vibe to any garden!",
  shortpinkflowerreef:
    "While this flower reef resembles a table, it is not advisable to eat off of it.",
  pinkflowerreef:
    "This vibrant flower reef creates a tranquil haven for sea life beneath its large fronds.",
  tallpinkflowerreef:
    "These tall reef flowers create an inviting shelter beneath their spreading fronds.",
  clamthrone: "This elegant clam throne is fit for a goddess.",
  smallsandcastle:
    "Is the best part of making a sandcastle building it, or stomping on it after?",
  largesandcastle:
    "A day at the beach isn't complete without building a sand castle. This one stands proud and imposing. Just don't step on it!",
  reefchair:
    "This attractive reef chair is perfect for kicking back and enjoying an ocean view.",
  reeftable:
    "Perfect for laying out a feast while pretending to be in an underwater kingdom.",
  smallnet:
    "A small net for catching items and slimes. The thick rope is stiff with seawater, but still effective.",
  mediumnet:
    "A medium net for catching items and slimes. The thick rope is stiff with seawater, but still effective.",
  largenet:
    "A large net for catching items and slimes. The thick rope is stiff with seawater, but still effective.",
  shipinabottle:
    "Memorialize crossing the Slime Sea with this elegant ship in a bottle.",
  sandyyellowcoral:
    "This cheerful yellow coral resembles a burst of sunshine beneath the waves.",
  pennant:
    "This pennant has an eye-catching yet simple design, perfect for leaving a telltale marker in the world.",
  ribbonstreamers:
    "These streamers are attached to a long pole and great at fluttering in the wind.",
  scarfstreamers:
    "An economical, yet elegant use of all the extra scarves sitting in your closet.",
  windsocks:
    "Socks should only have one hole, so these are perfect for stringing up and leaving outside.",
  smallpinwheel:
    "A small pinwheel that twirls whimsically in the breeze just like its bigger cousin.",
  largepinwheel:
    "A large pinwheel that spins wildly when the wind picks up. Until then, it waits...",
  windchimes:
    "These chimes sway in the wind, adding dulcet tones anywhere they're placed.",
  boombox:
    "Carry the tunes of the Far, Far Range wherever you go, so long as where you go includes this boombox.",
  daintyteacup:
    "This delicate teacup perfectly fits slimes, who are so eager to hop inside that it's never practical to fill it with tea.",
  bountifulteacup:
    "This large teacup might be overflowing with tea if largos weren't always trying to take turns hopping inside of it.",
  pinkstripedlamp:
    "This bright and playful lamp is guaranteed to lend a touch of whimsical brilliance anywhere it's used.",
  swing:
    "The only problem is that a slime can't push itself on this swing, because you know, arms.",
  prideflag: "Show off your pride!",
  seesaw:
    "A great way for slimes to make friends, and help each other through all the ups and downs of life on the ranch.",
  carousel:
    "...riding a carousel around and around is a wonderful way for slimes to have fun because going in circles is always fun, just like how...",
  ferriswheel:
    "A slime can definitely see its home from the top of this ferris wheel.",
  slimejailstandee: "For naughty slimes, or those who wish they were.",
  sunflowerstandee: "Perfect for slimes that wish they were Tangle slimes.",
  snowmanstandee: "All the joy of a snowman, now available anywhere!",
  tarrstandee: "Edgier slimes will love posing as a terrifying Tarr.",
  musictile: "Festive floor tiles that light up and create music when touched.",
  musicpillar: "Playful pillars that light up and create music when touched.",
  anglerfountain:
    "The lure on this angler fountain won't daze you, but the relaxing sound of running water may put you to sleep all the same.",
  magmafountain:
    "This fountain draws magma fromthe depths of the planet, transforming the awesome power of nature into a cute garden ornament.",
  ancientroundpillar:
    "What ancient builder first decided on roundd over square? And why a hole in the pillar? Were they inspired by ancient slimes, or cheating at ancient hide-and-seek?",
  ancientarchedwall:
    "The winding designs on this arched wall are truly amazing.",
  excavationlights: "Essential for safety exploring ancient ruins.",
  goldslimefloorpanel:
    "A burnished ode to the duality of slime-kind, and also a flashy addition to any garden path.",
  goldtwistedtree:
    "Organic and metal, wood and gold twine together unnaturally, yet with a brilliant beauty.",
  ancientpurpleoak:
    "A mighty oak whose branches provide shade and peace to anyone resting below.",
  youngcedaroak:
    "This tree seems to have characteristics of several different species of plant.",
  pottedlavaplants:
    "These lava plants bring warmth to any space, and can fire the very pots they're potted in.",
  walllighting:
    "Add a dash of elegance, and light, to any space with this wall lighting.",
  aquarium:
    "Inspired by ancient water works, this aquarium works to keep water inside.",
  woodenfence: "",
  straightstonefence: "",
  curvedstonefence: "",
  electricpillarlamp: "",
  smallflowerpillow: "",
  largeflowerpillow: "",
  azurewaterflower: "",
  overgrownlilypad: "",
  giantstalks: "",
  floralslimetree: "",
  flowerlamp: "",
  hightechwall: "",
  hightechbattery: "",
  miniaturesdome: "",
  miniaturewindmill: "",
  goldentwinstatue: "",
  goldensloomberstatue: "",
  goldenhyperstatue: "",
  goldenyolkystatue: "",
};

export const decorationNames = Object.values(Decoration);