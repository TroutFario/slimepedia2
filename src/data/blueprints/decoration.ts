import { DecorationTheme, Recipe, RecipeElement, UnlockRequirementNames } from "./blueprints";

export const themeList: { [key in DecorationTheme]: [string, string] } = {
  [DecorationTheme.ANY]: ["Any", "misc/decoration"],
  [DecorationTheme.FIELDS]: ["Rainbow Fields", "world/fields"],
  [DecorationTheme.VALLEY]: ["Ember Valley", "world/valley"],
  [DecorationTheme.STRAND]: ["Starlight Strand", "world/strand"],
  [DecorationTheme.BLUFFS]: ["Powderfall Bluffs", "world/bluffs"],
  [DecorationTheme.LABYRINTH]: ["Grey Labyrinth", "world/labyrinth"],
  [DecorationTheme.CONSERVATORY]: ["The Conservatory", "world/conservatory"],
  [DecorationTheme.GOLDEN]: ["Golden Statues", "plorts/gold"],
  [DecorationTheme.BEACH]: ["Beach", "world/tidepools"],
  [DecorationTheme.FUN]: ["Fun", "food/ranchersnslimes"],
};

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
  INDIGO_GRASS = "indigograss",
  INDIGO_FLOWERS = "indigoflowers",
  INDIGO_CYPRESS = "indigocypress",
  INDIGO_CYPRESS_CLUSTER = "indigocypresscluster",
  TALL_INDIGO_CYPRESS = "tallindigocypress",
  INDIGO_SHRUBS = "indigoshrubs",
  LABYRINTH_WALL_LAMP = "labyrinthwalllamp",
  LABYRINTH_STANDING_LAMP = "labyrinthstandinglamp",
}

export const decorationList: {
  [key in Decoration]: [string, UnlockRequirementNames, Recipe, DecorationTheme];
} = {
  emeraldgrass: [
    "Emerald Grass",
    UnlockRequirementNames.THORA,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.TABBY, 5],
    ]),
    DecorationTheme.FIELDS,
  ],
  emeraldshrubs: [
    "Emerald Shrubs",
    UnlockRequirementNames.OGDEN,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PHOSPHOR, 10],
    ]),
    DecorationTheme.FIELDS,
  ],
  emeraldcypress: [
    "Emerald Cypress",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.TABBY, 10],
    ]),
    DecorationTheme.FIELDS,
  ],
  tallemeraldcypress: [
    "Tall Emerald Cypress",
    UnlockRequirementNames.OGDEN,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PHOSPHOR, 10],
    ]),
    DecorationTheme.FIELDS,
  ],
  emeraldcypresscluster: [
    "Emerald Cypress Cluster",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 75],
      [RecipeElement.COTTON, 10],
    ]),
    DecorationTheme.FIELDS,
  ],
  goldpetalflowers: [
    "Goldpetal Flowers",
    UnlockRequirementNames.THORA,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.PHOSPHOR, 5],
      [RecipeElement.BRINE, 1],
    ]),
    DecorationTheme.FIELDS,
  ],
  rainbowgrass: [
    "Rainbow Grass",
    UnlockRequirementNames.THORA,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.PINK, 5],
    ]),
    DecorationTheme.FIELDS,
  ],
  pinkbonsai: [
    "Pink Bonsai",
    UnlockRequirementNames.OGDEN,
    new Map([
      [RecipeElement.NEWBUCKS, 150],
      [RecipeElement.HUNTER, 20],
      [RecipeElement.JELLY, 3],
      [RecipeElement.WILDHONEY, 2],
      [RecipeElement.WAX, 2],
    ]),
    DecorationTheme.FIELDS,
  ],
  largepinkbonsai: [
    "Large Pink Bonsai",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 200],
      [RecipeElement.HONEY, 20],
      [RecipeElement.JELLY, 3],
      [RecipeElement.BRINE, 2],
      [RecipeElement.SAND, 2],
    ]),
    DecorationTheme.FIELDS,
  ],
  rockfragments: [
    "Rock Fragments",
    UnlockRequirementNames.BOB,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PINK, 5],
      [RecipeElement.JELLY, 1],
    ]),
    DecorationTheme.FIELDS,
  ],
  rockcluster: [
    "Rock Cluster",
    UnlockRequirementNames.BOB,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PINK, 10],
      [RecipeElement.WAX, 1],
    ]),
    DecorationTheme.FIELDS,
  ],
  rockclump: [
    "Rock Clump",
    UnlockRequirementNames.BOB,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.COTTON, 10],
      [RecipeElement.BRINE, 1],
    ]),
    DecorationTheme.FIELDS,
  ],
  smallboulder: [
    "Small Boulder",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.COTTON, 10],
      [RecipeElement.JELLY, 1],
    ]),
    DecorationTheme.FIELDS,
  ],
  sharpboulder: [
    "Sharp Boulder",
    UnlockRequirementNames.BOB,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.ROCK, 10],
      [RecipeElement.BRINE, 1],
    ]),
    DecorationTheme.FIELDS,
  ],
  rainbowmound: [
    "Rainbow Mound",
    UnlockRequirementNames.BOB,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.RINGTAIL, 10],
    ]),
    DecorationTheme.FIELDS,
  ],
  rainbowlumps: [
    "Rainbow Lumps",
    UnlockRequirementNames.BOB,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.ROCK, 10],
    ]),
    DecorationTheme.FIELDS,
  ],
  shortpinkcoralcolumns: [
    "Short Pink Coral Columns",
    UnlockRequirementNames.MOCHI,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.ANGLER, 5],
      [RecipeElement.JELLY, 3],
      [RecipeElement.WAX, 2],
    ]),
    DecorationTheme.FIELDS,
  ],
  mediumpinkcoralcolumns: [
    "Medium Pink Coral Columns",
    UnlockRequirementNames.OGDEN,
    new Map([
      [RecipeElement.NEWBUCKS, 150],
      [RecipeElement.ANGLER, 20],
      [RecipeElement.PRIMORDY, 3],
      [RecipeElement.JELLY, 2],
      [RecipeElement.SAND, 2],
    ]),
    DecorationTheme.FIELDS,
  ],
  tallpinkcoralcolumns: [
    "Tall Pink Coral Columns",
    UnlockRequirementNames.THORA,
    new Map([
      [RecipeElement.NEWBUCKS, 150],
      [RecipeElement.ANGLER, 10],
      [RecipeElement.WAX, 3],
      [RecipeElement.PRIMORDY, 2],
      [RecipeElement.SAND, 2],
    ]),
    DecorationTheme.FIELDS,
  ],
  overjoyedstatue: [
    "Overjoyed Statue",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 700],
      [RecipeElement.CRYSTAL, 15],
      [RecipeElement.PUDDLE, 10],
      [RecipeElement.HUNTER, 15],
      [RecipeElement.RADIANT, 10],
      [RecipeElement.JELLY, 10],
    ]),
    DecorationTheme.FIELDS,
  ],
  ambergrass: [
    "Amber Grass",
    UnlockRequirementNames.THORA,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.PINK, 5],
      [RecipeElement.JELLY, 1],
    ]),
    DecorationTheme.VALLEY,
  ],
  ambershrubs: [
    "Amber Shrubs",
    UnlockRequirementNames.OGDEN,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.ROCK, 10],
    ]),
    DecorationTheme.VALLEY,
  ],
  ambercypress: [
    "Amber Cypress",
    UnlockRequirementNames.OGDEN,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PHOSPHOR, 10],
      [RecipeElement.PRIMORDY, 1],
    ]),
    DecorationTheme.VALLEY,
  ],
  tallambercypress: [
    "Tall Amber Cypress",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.FIRE, 5],
      [RecipeElement.PRIMORDY, 1],
    ]),
    DecorationTheme.VALLEY,
  ],
  ambercypresscluster: [
    "Amber Cypress Cluster",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.TABBY, 10],
      [RecipeElement.PRIMORDY, 51],
    ]),
    DecorationTheme.VALLEY,
  ],
  ochrepoppies: [
    "Ochre Poppies",
    UnlockRequirementNames.OGDEN,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.PINK, 5],
      [RecipeElement.PRIMORDY, 1],
    ]),
    DecorationTheme.VALLEY,
  ],
  cinderspikeblossoms: [
    "Cinder Spike Blossoms",
    UnlockRequirementNames.THORA,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.BOOM, 10],
      [RecipeElement.RADIANT, 1],
    ]),
    DecorationTheme.VALLEY,
  ],
  ashblooms: [
    "Ash Blooms",
    UnlockRequirementNames.MOCHI,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.RINGTAIL, 5],
      [RecipeElement.LAVA, 1],
    ]),
    DecorationTheme.VALLEY,
  ],
  sunfiredaisies: [
    "Sunfire Daisies",
    UnlockRequirementNames.THORA,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.PHOSPHOR, 10],
      [RecipeElement.PRIMORDY, 1],
    ]),
    DecorationTheme.VALLEY,
  ],
  shortpalm: [
    "Short Palm",
    UnlockRequirementNames.THORA,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.BATTY, 20],
      [RecipeElement.JELLY, 3],
      [RecipeElement.WAX, 3],
    ]),
    DecorationTheme.VALLEY,
  ],
  mediumpalm: [
    "Medium Palm",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.HONEY, 20],
      [RecipeElement.BRINE, 3],
      [RecipeElement.PRIMORDY, 3],
      [RecipeElement.SAND, 3],
    ]),
    DecorationTheme.VALLEY,
  ],
  stalagmite: [
    "Stalagmite",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.CRYSTAL, 10],
      [RecipeElement.LAVA, 1],
    ]),
    DecorationTheme.VALLEY,
  ],
  stalagmitecluster: [
    "Stalagmite Cluster",
    UnlockRequirementNames.BOB,
    new Map([
      [RecipeElement.NEWBUCKS, 75],
      [RecipeElement.RINGTAIL, 10],
      [RecipeElement.BRINE, 1],
    ]),
    DecorationTheme.VALLEY,
  ],
  shortmagmaclump: [
    "Short Magma Clump",
    UnlockRequirementNames.MOCHI,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.CRYSTAL, 20],
      [RecipeElement.PRIMORDY, 3],
      [RecipeElement.JELLY, 2],
    ]),
    DecorationTheme.VALLEY,
  ],
  tallmagmaclump: [
    "Tall Magma Clump",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 150],
      [RecipeElement.BOOM, 10],
      [RecipeElement.PRIMORDY, 3],
      [RecipeElement.BRINE, 2],
      [RecipeElement.LAVA, 2],
    ]),
    DecorationTheme.VALLEY,
  ],
  magmapool: [
    "Magma Pool",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 150],
      [RecipeElement.FIRE, 10],
      [RecipeElement.PRIMORDY, 3],
      [RecipeElement.JELLY, 2],
      [RecipeElement.LAVA, 2],
    ]),
    DecorationTheme.VALLEY,
  ],
  roundedmagmapool: [
    "Rounded Magma Pool",
    UnlockRequirementNames.MOCHI,
    new Map([
      [RecipeElement.NEWBUCKS, 200],
      [RecipeElement.FIRE, 10],
      [RecipeElement.PRIMORDY, 3],
      [RecipeElement.RADIANT, 2],
      [RecipeElement.LAVA, 2],
    ]),
    DecorationTheme.VALLEY,
  ],
  gnarledashwood: [
    "Gnarled Ashwood",
    UnlockRequirementNames.MOCHI,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.CRYSTAL, 20],
      [RecipeElement.PRIMORDY, 3],
      [RecipeElement.WAX, 2],
      [RecipeElement.FIRE, 2],
    ]),
    DecorationTheme.VALLEY,
  ],
  shortredashwood: [
    "Short Red Ashwood",
    UnlockRequirementNames.MOCHI,
    new Map([
      [RecipeElement.NEWBUCKS, 150],
      [RecipeElement.PHOSPHOR, 20],
      [RecipeElement.PRIMORDY, 3],
      [RecipeElement.JELLY, 2],
      [RecipeElement.FIRE, 2],
    ]),
    DecorationTheme.VALLEY,
  ],
  mediumredashwood: [
    "Medium Red Ashwood",
    UnlockRequirementNames.MOCHI,
    new Map([
      [RecipeElement.NEWBUCKS, 150],
      [RecipeElement.HONEY, 20],
      [RecipeElement.PRIMORDY, 3],
      [RecipeElement.WAX, 2],
      [RecipeElement.FIRE, 2],
    ]),
    DecorationTheme.VALLEY,
  ],
  tallashwood: [
    "Tall Ashwood",
    UnlockRequirementNames.MOCHI,
    new Map([
      [RecipeElement.NEWBUCKS, 150],
      [RecipeElement.CRYSTAL, 20],
      [RecipeElement.PRIMORDY, 3],
      [RecipeElement.WAX, 2],
      [RecipeElement.LAVA, 2],
    ]),
    DecorationTheme.VALLEY,
  ],
  stonyegglamp: [
    "Stony Egg Lamp",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 2500],
      [RecipeElement.YOLKY, 10],
      [RecipeElement.FOSSIL, 5],
      [RecipeElement.PRIMORDY, 5],
      [RecipeElement.LAVA, 2],
    ]),
    DecorationTheme.VALLEY,
  ],
  happystatue: [
    "Happy Statue",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 700],
      [RecipeElement.FLUTTER, 15],
      [RecipeElement.PINK, 15],
      [RecipeElement.BATTY, 15],
      [RecipeElement.RADIANT, 10],
      [RecipeElement.PRIMORDY, 10],
    ]),
    DecorationTheme.VALLEY,
  ],
  starbloomflowers: [
    "Starbloom Flowers",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.FLUTTER, 10],
      [RecipeElement.WAX, 1],
    ]),
    DecorationTheme.STRAND,
  ],
  azuregrass: [
    "Azure Grass",
    UnlockRequirementNames.THORA,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.PINK, 5],
      [RecipeElement.WAX, 1],
    ]),
    DecorationTheme.STRAND,
  ],
  azureshrubs: [
    "Azure Shrubs",
    UnlockRequirementNames.OGDEN,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.TABBY, 10],
      [RecipeElement.BRINE, 1],
    ]),
    DecorationTheme.STRAND,
  ],
  azuremangrove: [
    "Azure Mangrove",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 200],
      [RecipeElement.PUDDLE, 10],
      [RecipeElement.PRIMORDY, 3],
      [RecipeElement.BRINE, 2],
      [RecipeElement.WILDHONEY, 2],
    ]),
    DecorationTheme.STRAND,
  ],
  pinkgrass: [
    "Pink Grass",
    UnlockRequirementNames.THORA,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.PINK, 5],
      [RecipeElement.WAX, 1],
    ]),
    DecorationTheme.STRAND,
  ],
  pinkmangrove: [
    "Pink Mangrove",
    UnlockRequirementNames.THORA,
    new Map([
      [RecipeElement.NEWBUCKS, 150],
      [RecipeElement.JELLY, 3],
      [RecipeElement.WAX, 2],
      [RecipeElement.WILDHONEY, 2],
    ]),
    DecorationTheme.STRAND,
  ],
  roottangle: [
    "Root Tangle",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.RINGTAIL, 20],
      [RecipeElement.WAX, 3],
      [RecipeElement.PRIMORDY, 2],
      [RecipeElement.WILDHONEY, 2],
    ]),
    DecorationTheme.STRAND,
  ],
  rootarches: [
    "Root Arches",
    UnlockRequirementNames.MOCHI,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.FLUTTER, 20],
      [RecipeElement.WAX, 3],
      [RecipeElement.PRIMORDY, 2],
      [RecipeElement.WILDHONEY, 2],
    ]),
    DecorationTheme.STRAND,
  ],
  costalrock: [
    "Costal Rock",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 75],
      [RecipeElement.COTTON, 10],
      [RecipeElement.JELLY, 1],
    ]),
    DecorationTheme.STRAND,
  ],
  costalrockpillar: [
    "Costal Rock Pillar",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 75],
      [RecipeElement.TABBY, 10],
      [RecipeElement.BRINE, 1],
    ]),
    DecorationTheme.STRAND,
  ],
  tallvioletswirlshroom: [
    "Tall Violet Swirl Shrool",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.HONEY, 10],
      [RecipeElement.BRINE, 3],
      [RecipeElement.WAX, 2],
      [RecipeElement.WILDHONEY, 2],
    ]),
    DecorationTheme.STRAND,
  ],
  violetswirlshroom: [
    "Violet Swirl Shroom",
    UnlockRequirementNames.MOCHI,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.HUNTER, 20],
      [RecipeElement.RADIANT, 3],
      [RecipeElement.BRINE, 2],
      [RecipeElement.WILDHONEY, 2],
    ]),
    DecorationTheme.STRAND,
  ],
  azureglowshrooms: [
    "Azure Glow Shrooms",
    UnlockRequirementNames.MOCHI,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.PHOSPHOR, 10],
      [RecipeElement.BRINE, 3],
      [RecipeElement.WAX, 2],
      [RecipeElement.DIAMOND, 1],
    ]),
    DecorationTheme.STRAND,
  ],
  pinkglowshrooms: [
    "Pink Glow Shrooms",
    UnlockRequirementNames.MOCHI,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.PHOSPHOR, 20],
      [RecipeElement.JELLY, 3],
      [RecipeElement.LAVA, 2],
      [RecipeElement.DIAMOND, 1],
    ]),
    DecorationTheme.STRAND,
  ],
  cavepillar: [
    "Cave Pillar",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 75],
      [RecipeElement.PINK, 10],
      [RecipeElement.BRINE, 1],
    ]),
    DecorationTheme.STRAND,
  ],
  thincavepillar: [
    "Thin Cave Pillar",
    UnlockRequirementNames.BOB,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.ROCK, 10],
      [RecipeElement.BRINE, 1],
    ]),
    DecorationTheme.STRAND,
  ],
  mossyhenstatue: [
    "Mossy Hen Statue",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 2500],
      [RecipeElement.YOLKY, 15],
      [RecipeElement.BRINE, 5],
      [RecipeElement.FOSSIL, 5],
      [RecipeElement.WILDHONEY, 2],
    ]),
    DecorationTheme.STRAND,
  ],
  cheerfulstatue: [
    "Cheerful Statue",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 700],
      [RecipeElement.RINGTAIL, 20],
      [RecipeElement.FIRE, 10],
      [RecipeElement.TABBY, 15],
      [RecipeElement.RADIANT, 10],
      [RecipeElement.WAX, 10],
    ]),
    DecorationTheme.STRAND,
  ],
  rubygrass: [
    "Ruby Grass",
    UnlockRequirementNames.THORA,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.PINK, 5],
      [RecipeElement.BRINE, 1],
    ]),
    DecorationTheme.BLUFFS,
  ],
  snowybush: [
    "Snowy Bush",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.BATTY, 10],
      [RecipeElement.SNOWFLAKE, 1],
    ]),
    DecorationTheme.BLUFFS,
  ],
  icetreeo: [
    "Ice Treeo",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 250],
      [RecipeElement.CRYSTAL, 15],
      [RecipeElement.SNOWFLAKE, 2],
    ]),
    DecorationTheme.BLUFFS,
  ],
  frostedshell: [
    "Frosted Shell",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 200],
      [RecipeElement.SABER, 10],
      [RecipeElement.FOSSIL, 2],
    ]),
    DecorationTheme.BLUFFS,
  ],
  glacialcrystal: [
    "Glacial Crystal",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.ROCK, 10],
      [RecipeElement.SNOWFLAKE, 1],
    ]),
    DecorationTheme.BLUFFS,
  ],
  snowzbench: [
    "SnowZ Bench",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 1000],
      [RecipeElement.SABER, 25],
      [RecipeElement.COTTON, 15],
      [RecipeElement.YOLKY, 5],
      [RecipeElement.FOSSIL, 10],
      [RecipeElement.JELLY, 5],
    ]),
    DecorationTheme.BLUFFS,
  ],
  crystalspires: [
    "Crystal Spires",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.CRYSTAL, 10],
      [RecipeElement.SNOWFLAKE, 1],
    ]),
    DecorationTheme.BLUFFS,
  ],
  icecubed: [
    "Ice Cubed",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.PUDDLE, 10],
      [RecipeElement.SNOWFLAKE, 2],
    ]),
    DecorationTheme.BLUFFS,
  ],
  icelamp: [
    "Ice Lamp",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.PHOSPHOR, 30],
      [RecipeElement.RADIANT, 3],
      [RecipeElement.SNOWFLAKE, 2],
      [RecipeElement.SUNSAP, 1],
    ]),
    DecorationTheme.BLUFFS,
  ],
  chillyslimestack: [
    "Chilly Slime Stack",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 800],
      [RecipeElement.SABER, 25],
      [RecipeElement.ROCK, 10],
      [RecipeElement.SNOWFLAKE, 3],
    ]),
    DecorationTheme.BLUFFS,
  ],
  fireflower: [
    "Fire Flower",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.TANGLE, 15],
      [RecipeElement.WAX, 5],
    ]),
    DecorationTheme.BLUFFS,
  ],
  auroraflowers: [
    "Aurora Flowers",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.SABER, 5],
    ]),
    DecorationTheme.BLUFFS,
  ],
  aurorapine: [
    "Aurora Pine",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 5000],
      [RecipeElement.HONEY, 25],
      [RecipeElement.FOSSIL, 10],
      [RecipeElement.WAX, 10],
    ]),
    DecorationTheme.BLUFFS,
  ],
  frozenflame: [
    "Frozen Flame",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 6000],
      [RecipeElement.PUDDLE, 15],
      [RecipeElement.FIRE, 15],
      [RecipeElement.SNOWFLAKE, 10],
      [RecipeElement.RADIANT, 10],
    ]),
    DecorationTheme.BLUFFS,
  ],
  majesticsnowflake: [
    "Majestic Snowflake",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 8000],
      [RecipeElement.SABER, 25],
      [RecipeElement.FLUTTER, 25],
      [RecipeElement.SNOWFLAKE, 10],
    ]),
    DecorationTheme.BLUFFS,
  ],
  snowglobe: [
    "Snow Globe",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 15000],
      [RecipeElement.YOLKY, 20],
      [RecipeElement.BOOM, 25],
      [RecipeElement.FOSSIL, 10],
    ]),
    DecorationTheme.BLUFFS,
  ],
  conservatorybench: [
    "Conservatory Bench",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.PINK, 10],
    ]),
    DecorationTheme.CONSERVATORY,
  ],
  largesimplebench: [
    "Large Simple Bench",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.BOOM, 10],
      [RecipeElement.COTTON, 10],
      [RecipeElement.DRIFT, 3],
    ]),
    DecorationTheme.CONSERVATORY,
  ],
  conservatorychair: [
    "Conservatory Chair",
    UnlockRequirementNames.VIKTOR,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.COTTON, 10],
    ]),
    DecorationTheme.CONSERVATORY,
  ],
  conservatorytable: [
    "Conservatory Table",
    UnlockRequirementNames.VIKTOR,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.TABBY, 10],
    ]),
    DecorationTheme.CONSERVATORY,
  ],
  conservatorylamp: [
    "Conservatory Lamp",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.PHOSPHOR, 10],
      [RecipeElement.GLASS, 1],
    ]),
    DecorationTheme.CONSERVATORY,
  ],
  smalltrellis: [
    "Small Trellis",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.TABBY, 5],
      [RecipeElement.BRINE, 5],
    ]),
    DecorationTheme.CONSERVATORY,
  ],
  widetrellis: [
    "Wide Trellis",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 150],
      [RecipeElement.ANGLER, 5],
      [RecipeElement.JELLY, 3],
    ]),
    DecorationTheme.CONSERVATORY,
  ],
  trellisarch: [
    "Trellis Arch",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 150],
      [RecipeElement.BATTY, 5],
      [RecipeElement.WILDHONEY, 3],
    ]),
    DecorationTheme.CONSERVATORY,
  ],
  smallemeraldtrellis: [
    "Small Emerald Trellis",
    UnlockRequirementNames.OGDEN,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.COTTON, 20],
      [RecipeElement.BRINE, 3],
      [RecipeElement.JELLY, 2],
      [RecipeElement.WILDHONEY, 2],
    ]),
    DecorationTheme.CONSERVATORY,
  ],
  wideemeraldtrellis: [
    "Wide Emerald Trellis",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 200],
      [RecipeElement.TANGLE, 10],
      [RecipeElement.JELLY, 3],
    ]),
    DecorationTheme.CONSERVATORY,
  ],
  pottedplants: [
    "Potted Plants",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 250],
      [RecipeElement.HONEY, 10],
      [RecipeElement.BRINE, 5],
    ]),
    DecorationTheme.CONSERVATORY,
  ],
  mushroomplanter: [
    "Mushroom Planter",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.TABBY, 5],
      [RecipeElement.FOSSIL, 3],
    ]),
    DecorationTheme.CONSERVATORY,
  ],
  displaycase: [
    "Display Case",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 1500],
      [RecipeElement.CRYSTAL, 10],
      [RecipeElement.GLASS, 5],
    ]),
    DecorationTheme.CONSERVATORY,
  ],
  wheelbarrow: [
    "Wheelbarrow",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.ROCK, 10],
      [RecipeElement.SAND, 5],
    ]),
    DecorationTheme.CONSERVATORY,
  ],
  goldenanglerstatue: [
    "Golden Angler Statue",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 15000],
      [RecipeElement.ANGLER, 50],
      [RecipeElement.GOLD, 3],
      [RecipeElement.PRIMORDY, 10],
      [RecipeElement.DIAMOND, 1],
    ]),
    DecorationTheme.GOLDEN,
  ],
  goldenbattystatue: [
    "Golden Batty Statue",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 15000],
      [RecipeElement.BATTY, 50],
      [RecipeElement.GOLD, 3],
      [RecipeElement.JELLY, 10],
      [RecipeElement.DIAMOND, 1],
    ]),
    DecorationTheme.GOLDEN,
  ],
  goldenchickenstatue: [
    "Golden Chicken Statue",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 15000],
      [RecipeElement.YOLKY, 20],
      [RecipeElement.GOLD, 3],
      [RecipeElement.FOSSIL, 10],
      [RecipeElement.DIAMOND, 1],
    ]),
    DecorationTheme.GOLDEN,
  ],
  goldencottonstatue: [
    "Golden Cotton Statue",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 15000],
      [RecipeElement.COTTON, 50],
      [RecipeElement.GOLD, 3],
      [RecipeElement.BRINE, 10],
      [RecipeElement.DIAMOND, 1],
    ]),
    DecorationTheme.GOLDEN,
  ],
  goldendervishstatue: [
    "Golden Dervish Statue",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 15000],
      [RecipeElement.DERVISH, 50],
      [RecipeElement.GOLD, 3],
      [RecipeElement.PRIMORDY, 10],
      [RecipeElement.DIAMOND, 1],
    ]),
    DecorationTheme.GOLDEN,
  ],
  goldenflutterstatue: [
    "Golden Flutter Statue",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 15000],
      [RecipeElement.FLUTTER, 50],
      [RecipeElement.GOLD, 3],
      [RecipeElement.WAX, 10],
      [RecipeElement.DIAMOND, 1],
    ]),
    DecorationTheme.GOLDEN,
  ],
  goldentabbystatue: [
    "Golden Tabby Statue",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 10000],
      [RecipeElement.TABBY, 50],
      [RecipeElement.GOLD, 3],
      [RecipeElement.WAX, 10],
      [RecipeElement.DIAMOND, 1],
    ]),
    DecorationTheme.GOLDEN,
  ],
  goldentanglestatue: [
    "Golden Tangle Statue",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 15000],
      [RecipeElement.TANGLE, 50],
      [RecipeElement.GOLD, 3],
      [RecipeElement.JELLY, 10],
      [RecipeElement.DIAMOND, 1],
    ]),
    DecorationTheme.GOLDEN,
  ],
  goldentwinstatue: [
    "Golden Twin Statue",
    UnlockRequirementNames.NIGHT,
    new Map([
      [RecipeElement.NEWBUCKS, 15000],
      [RecipeElement.TWIN, 50],
      [RecipeElement.GOLD, 3],
      [RecipeElement.PETAL, 25],
      [RecipeElement.DIAMOND, 1],
    ]),
    DecorationTheme.GOLDEN,
  ],
  goldensloomberstatue: [
    "Golden Sloomber Statue",
    UnlockRequirementNames.NIGHT,
    new Map([
      [RecipeElement.NEWBUCKS, 15000],
      [RecipeElement.SLOOMBER, 50],
      [RecipeElement.GOLD, 3],
      [RecipeElement.PETAL, 25],
      [RecipeElement.DIAMOND, 1],
    ]),
    DecorationTheme.GOLDEN,
  ],
  goldenhyperstatue: [
    "Golden Hyper Statue",
    UnlockRequirementNames.NIGHT,
    new Map([
      [RecipeElement.NEWBUCKS, 15000],
      [RecipeElement.HYPER, 50],
      [RecipeElement.GOLD, 3],
      [RecipeElement.PETAL, 25],
      [RecipeElement.DIAMOND, 1],
    ]),
    DecorationTheme.GOLDEN,
  ],
  goldenyolkystatue: [
    "Golden Yolky Statue",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 15000],
      [RecipeElement.YOLKY, 50],
      [RecipeElement.GOLD, 3],
      [RecipeElement.WILDHONEY, 10],
      [RecipeElement.DIAMOND, 1],
    ]),
    DecorationTheme.GOLDEN,
  ],
  woodenfence: [
    "Wooden Fence",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.TWIN, 10],
      [RecipeElement.PETAL, 5],
      [RecipeElement.BLACKINDIGO, 5],
      [RecipeElement.NEWBUCKS, 150],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  straightstonefence: [
    "Straight Stone Fence",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.SLOOMBER, 10],
      [RecipeElement.ROCK, 10],
      [RecipeElement.BLACKINDIGO, 5],
      [RecipeElement.JELLY, 5],
      [RecipeElement.NEWBUCKS, 200],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  curvedstonefence: [
    "Curved Stone Fence",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.SLOOMBER, 10],
      [RecipeElement.ROCK, 10],
      [RecipeElement.BLACKINDIGO, 5],
      [RecipeElement.JELLY, 5],
      [RecipeElement.NEWBUCKS, 200],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  electricpillarlamp: [
    "Electric Pillar Lamp",
    UnlockRequirementNames.NIGHT,
    new Map([
      [RecipeElement.HYPER, 20],
      [RecipeElement.PHOSPHOR, 20],
      [RecipeElement.PETAL, 10],
      [RecipeElement.BLACKINDIGO, 10],
      [RecipeElement.NEWBUCKS, 1500],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  smallflowerpillow: [
    "Small Flower Pillow",
    UnlockRequirementNames.NIGHT,
    new Map([
      [RecipeElement.HONEY, 10],
      [RecipeElement.COTTON, 10],
      [RecipeElement.SAND, 5],
      [RecipeElement.NEWBUCKS, 200],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  largeflowerpillow: [
    "Large Flower Pillow",
    UnlockRequirementNames.NIGHT,
    new Map([
      [RecipeElement.FLUTTER, 10],
      [RecipeElement.BATTY, 10],
      [RecipeElement.WILDHONEY, 5],
      [RecipeElement.NEWBUCKS, 250],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  azurewaterflower: [
    "Azure Water Flower",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.HYPER, 10],
      [RecipeElement.PUDDLE, 10],
      [RecipeElement.AQUA, 5],
      [RecipeElement.NEWBUCKS, 200],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  overgrownlilypad: [
    "Overgrown Lilypad",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.TWIN, 10],
      [RecipeElement.HYPER, 10],
      [RecipeElement.AQUA, 5],
      [RecipeElement.NEWBUCKS, 200],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  giantstalks: [
    "Giant Stalks",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.TANGLE, 10],
      [RecipeElement.TABBY, 10],
      [RecipeElement.WAX, 5],
      [RecipeElement.NEWBUCKS, 200],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  floralslimetree: [
    "Floral Slime Tree",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.TANGLE, 10],
      [RecipeElement.TABBY, 10],
      [RecipeElement.WAX, 5],
      [RecipeElement.NEWBUCKS, 200],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  flowerlamp: [
    "Flower Lamp",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.HYPER, 20],
      [RecipeElement.HUNTER, 10],
      [RecipeElement.PETAL, 10],
      [RecipeElement.BLACKINDIGO, 10],
      [RecipeElement.NEWBUCKS, 1500],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  hightechwall: [
    "High-Tech Wall",
    UnlockRequirementNames.NIGHT,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.HYPER, 10],
      [RecipeElement.ROCK, 10],
      [RecipeElement.PETAL, 10],
      [RecipeElement.BLACKINDIGO, 5],
    ]),
    DecorationTheme.CONSERVATORY,
  ],
  hightechbattery: [
    "High-Tech Battery",
    UnlockRequirementNames.NIGHT,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.HYPER, 10],
      [RecipeElement.PHOSPHOR, 10],
      [RecipeElement.PETAL, 10],
      [RecipeElement.MAGMA, 5],
    ]),
    DecorationTheme.CONSERVATORY,
  ],
  miniaturesdome: [
    "Miniatures Dome",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.TWIN, 25],
      [RecipeElement.BATTY, 25],
      [RecipeElement.PETAL, 20],
      [RecipeElement.DREAM, 20],
      [RecipeElement.NEWBUCKS, 20000],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  miniaturewindmill: [
    "Miniature Windmill",
    UnlockRequirementNames.NIGHT,
    new Map([
      [RecipeElement.NEWBUCKS, 10000],
      [RecipeElement.SLOOMBER, 20],
      [RecipeElement.DERVISH, 20],
      [RecipeElement.DREAM, 20],
      [RecipeElement.WILDHONEY, 10],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  yellowreefbush: [
    "Yellow Reef Bush",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.COTTON, 5],
      [RecipeElement.BRINE, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  sunflowerumbrella: [
    "Sunflower Umbrella",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 200],
      [RecipeElement.COTTON, 5],
      [RecipeElement.HONEY, 5],
      [RecipeElement.WILDHONEY, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  sakuraumbrella: [
    "Sakura Umbrella",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 200],
      [RecipeElement.COTTON, 5],
      [RecipeElement.PINK, 5],
      [RecipeElement.WAX, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  beachumbrella: [
    "Beach Umbrella",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 200],
      [RecipeElement.COTTON, 20],
      [RecipeElement.PINK, 5],
      [RecipeElement.SAND, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  stripedbeachblanket: [
    "Striped Beach Blanket",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 150],
      [RecipeElement.COTTON, 10],
      [RecipeElement.JELLY, 3],
    ]),
    DecorationTheme.BEACH,
  ],
  beachlantern: [
    "Beach Lantern",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 200],
      [RecipeElement.ANGLER, 5],
      [RecipeElement.LAVA, 3],
    ]),
    DecorationTheme.BEACH,
  ],
  seashells: [
    "Seashells",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.TABBY, 5],
      [RecipeElement.PRIMORDY, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  seashellcollection: [
    "Seashell Collection",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.COTTON, 5],
      [RecipeElement.RADIANT, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  seagrass: [
    "Seagrass",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.TABBY, 5],
      [RecipeElement.BRINE, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  seaweed: [
    "Seaweed",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.PINK, 5],
      [RecipeElement.JELLY, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  curlyseaweed: [
    "Curly Seaweed",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.PHOSPHOR, 5],
      [RecipeElement.FOSSIL, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  blueswirltree: [
    "Blue Swirl Tree",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.BOOM, 10],
      [RecipeElement.RADIANT, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  pinkreefbush: [
    "Pink Reef Bush",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.FIRE, 5],
      [RecipeElement.FOSSIL, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  pinkreeftree: [
    "Pink Reef Tree",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.ANGLER, 10],
      [RecipeElement.PRIMORDY, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  pinkreeftreecluster: [
    "Pink Reef Tree Cluster",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.COTTON, 10],
      [RecipeElement.FOSSIL, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  tallpinkreeftree: [
    "Tall Pink Reef Tree",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.TABBY, 10],
      [RecipeElement.GLASS, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  bluereefbush: [
    "Blue Reef Bush",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.SABER, 10],
      [RecipeElement.JELLY, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  blueanemone: [
    "Blue Anemone",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.PHOSPHOR, 5],
      [RecipeElement.WAX, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  pinkanemone: [
    "Pink Anemone",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.PINK, 5],
      [RecipeElement.JELLY, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  pinkanemonecluster: [
    "Pink Anemone Cluster",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.TABBY, 5],
      [RecipeElement.RADIANT, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  shortpinkflowerreef: [
    "Short Pink Flower Reef",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.DERVISH, 10],
      [RecipeElement.JELLY, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  pinkflowerreef: [
    "Pink Flower Reef",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.HONEY, 10],
      [RecipeElement.WAX, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  tallpinkflowerreef: [
    "Tall Pink Flower Reef",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.TANGLE, 10],
      [RecipeElement.SNOWFLAKE, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  clamthrone: [
    "Clam Throne",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.ANGLER, 10],
      [RecipeElement.HONEY, 10],
      [RecipeElement.BRINE, 3],
    ]),
    DecorationTheme.BEACH,
  ],
  smallsandcastle: [
    "Small Sand Castle",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.FIRE, 10],
      [RecipeElement.FLUTTER, 10],
      [RecipeElement.WILDHONEY, 3],
    ]),
    DecorationTheme.BEACH,
  ],
  largesandcastle: [
    "Large Sand Castle",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.PUDDLE, 10],
      [RecipeElement.HONEY, 10],
      [RecipeElement.SAND, 3],
    ]),
    DecorationTheme.BEACH,
  ],
  reefchair: [
    "Reef Chair",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 200],
      [RecipeElement.PUDDLE, 5],
      [RecipeElement.FOSSIL, 5],
    ]),
    DecorationTheme.BEACH,
  ],
  reeftable: [
    "Reef Table",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 200],
      [RecipeElement.ANGLER, 10],
      [RecipeElement.BRINE, 5],
    ]),
    DecorationTheme.BEACH,
  ],
  smallnet: [
    "Small Net",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 400],
      [RecipeElement.COTTON, 10],
      [RecipeElement.WILDHONEY, 3],
    ]),
    DecorationTheme.BEACH,
  ],
  mediumnet: [
    "Medium Net",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.PUDDLE, 10],
      [RecipeElement.SAND, 3],
    ]),
    DecorationTheme.BEACH,
  ],
  largenet: [
    "Large Net",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 1000],
      [RecipeElement.DERVISH, 20],
      [RecipeElement.GLASS, 5],
    ]),
    DecorationTheme.BEACH,
  ],
  shipinabottle: [
    "Ship in a Bottle",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 9000],
      [RecipeElement.FLUTTER, 50],
      [RecipeElement.TABBY, 50],
      [RecipeElement.RADIANT, 10],
      [RecipeElement.SUNSAP, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  sandyyellowcoral: [
    "Sandy Yellow Coral",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.ANGLER, 10],
      [RecipeElement.BRINE, 1],
    ]),
    DecorationTheme.BEACH,
  ],
  pennant: [
    "Pennant",
    UnlockRequirementNames.VIKTOR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PINK, 5],
    ]),
    DecorationTheme.FUN,
  ],
  ribbonstreamers: [
    "Ribbon Streamers",
    UnlockRequirementNames.VIKTOR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PINK, 5],
    ]),
    DecorationTheme.FUN,
  ],
  scarfstreamers: [
    "Scarf Streamers",
    UnlockRequirementNames.VIKTOR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PINK, 5],
    ]),
    DecorationTheme.FUN,
  ],
  windsocks: [
    "Windsocks",
    UnlockRequirementNames.VIKTOR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.DERVISH, 5],
    ]),
    DecorationTheme.FUN,
  ],
  smallpinwheel: [
    "Small Pinwheel",
    UnlockRequirementNames.VIKTOR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.DERVISH, 5],
      [RecipeElement.WAX, 1],
    ]),
    DecorationTheme.FUN,
  ],
  largepinwheel: [
    "Large Pinwheel",
    UnlockRequirementNames.VIKTOR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.TANGLE, 5],
      [RecipeElement.JELLY, 1],
    ]),
    DecorationTheme.FUN,
  ],
  windchimes: [
    "Windchimes",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 250],
      [RecipeElement.HONEY, 10],
      [RecipeElement.DRIFT, 5],
    ]),
    DecorationTheme.FUN,
  ],
  boombox: [
    "Boombox",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 1000],
      [RecipeElement.BOOM, 25],
      [RecipeElement.ANGLER, 25],
      [RecipeElement.FOSSIL, 5],
      [RecipeElement.GLASS, 3],
    ]),
    DecorationTheme.FUN,
  ],
  daintyteacup: [
    "Dainty Teacup",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.ANGLER, 10],
      [RecipeElement.PRIMORDY, 5],
    ]),
    DecorationTheme.FUN,
  ],
  bountifulteacup: [
    "Bountiful Teacup",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.FIRE, 10],
      [RecipeElement.GLASS, 5],
    ]),
    DecorationTheme.FUN,
  ],
  pinkstripedlamp: [
    "Pink Striped Lamp",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 200],
      [RecipeElement.PINK, 20],
      [RecipeElement.MOTE, 3],
    ]),
    DecorationTheme.FUN,
  ],
  swing: [
    "Swing",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 1500],
      [RecipeElement.BATTY, 25],
      [RecipeElement.WILDHONEY, 4],
      [RecipeElement.DRIFT, 6],
    ]),
    DecorationTheme.FUN,
  ],
  prideflag: [
    "Pride Flag",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PINK, 5],
    ]),
    DecorationTheme.FUN,
  ],
  seesaw: [
    "Seesaw",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 1000],
      [RecipeElement.HUNTER, 25],
      [RecipeElement.TABBY, 25],
      [RecipeElement.BRINE, 3],
    ]),
    DecorationTheme.FUN,
  ],
  carousel: [
    "Carousel",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 10000],
      [RecipeElement.PHOSPHOR, 50],
      [RecipeElement.CRYSTAL, 50],
      [RecipeElement.RADIANT, 10],
      [RecipeElement.MOTE, 5],
      [RecipeElement.DIAMOND, 1],
    ]),
    DecorationTheme.FUN,
  ],
  ferriswheel: [
    "Ferris Wheel",
    UnlockRequirementNames.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 10000],
      [RecipeElement.RINGTAIL, 50],
      [RecipeElement.ROCK, 50],
      [RecipeElement.BRINE, 10],
      [RecipeElement.DRIFT, 3],
      [RecipeElement.SUNSAP, 1],
    ]),
    DecorationTheme.FUN,
  ],
  slimejailstandee: [
    "Slime Jail Standee",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.RINGTAIL, 10],
      [RecipeElement.TABBY, 5],
      [RecipeElement.LAVA, 3],
    ]),
    DecorationTheme.FUN,
  ],
  sunflowerstandee: [
    "Sunflower Standee",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.TANGLE, 10],
      [RecipeElement.PUDDLE, 5],
      [RecipeElement.RADIANT, 3],
    ]),
    DecorationTheme.FUN,
  ],
  snowmanstandee: [
    "Snowman Standee",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.SABER, 10],
      [RecipeElement.COTTON, 5],
      [RecipeElement.SNOWFLAKE, 3],
    ]),
    DecorationTheme.FUN,
  ],
  tarrstandee: [
    "Tarr Standee",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 500],
      [RecipeElement.HUNTER, 10],
      [RecipeElement.BOOM, 5],
      [RecipeElement.GLASS, 3],
    ]),
    DecorationTheme.FUN,
  ],
  musictile: [
    "Music Tile",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.SABER, 3],
      [RecipeElement.TABBY, 3],
      [RecipeElement.RADIANT, 1],
    ]),
    DecorationTheme.FUN,
  ],
  musicpillar: [
    "Music Pilar",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.HUNTER, 3],
      [RecipeElement.COTTON, 3],
      [RecipeElement.RADIANT, 1],
    ]),
    DecorationTheme.FUN,
  ],
  anglerfountain: [
    "Angler Fountain",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 9000],
      [RecipeElement.SLOOMBER, 25],
      [RecipeElement.PRISMA, 20],
      [RecipeElement.BRINE, 10],
      [RecipeElement.AQUA, 10],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  magmafountain: [
    "Magma Fountain",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 7000],
      [RecipeElement.TWIN, 25],
      [RecipeElement.FIRE, 25],
      [RecipeElement.PRIMORDY, 10],
      [RecipeElement.MAGMA, 10],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  ancientroundpillar: [
    "Ancient Round Pillar",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 100],
      [RecipeElement.TWIN, 10],
      [RecipeElement.BLACKINDIGO, 3],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  ancientarchedwall: [
    "Ancient Arched Wall",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 200],
      [RecipeElement.ROCK, 10],
      [RecipeElement.PETAL, 5],
      [RecipeElement.BLACKINDIGO, 5],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  excavationlights: [
    "Excavation Lights",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 150],
      [RecipeElement.DERVISH, 10],
      [RecipeElement.AQUA, 5],
      [RecipeElement.DREAM, 5],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  goldslimefloorpanel: [
    "Gold Slime Floor Panel",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 1000],
      [RecipeElement.SLOOMBER, 25],
      [RecipeElement.FLUTTER, 25],
      [RecipeElement.AQUA, 10],
      [RecipeElement.DREAM, 10],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  goldtwistedtree: [
    "Gold Twisted Tree",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 1000],
      [RecipeElement.SLOOMBER, 20],
      [RecipeElement.PETAL, 15],
      [RecipeElement.AQUA, 5],
      [RecipeElement.DREAM, 5],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  ancientpurpleoak: [
    "Ancient Purple Oak",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 200],
      [RecipeElement.SLOOMBER, 10],
      [RecipeElement.PETAL, 5],
      [RecipeElement.WAX, 5],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  youngcedaroak: [
    "Young Cedaroak",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 200],
      [RecipeElement.TWIN, 10],
      [RecipeElement.PETAL, 5],
      [RecipeElement.WILDHONEY, 5],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  pottedlavaplants: [
    "Potted Lava Plants",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 150],
      [RecipeElement.TANGLE, 10],
      [RecipeElement.PETAL, 5],
      [RecipeElement.BLACKINDIGO, 5],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  walllighting: [
    "Ancient Wall Lighting",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.ROCK, 3],
      [RecipeElement.PRIMORDY, 3],
      [RecipeElement.DIAMOND, 1],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  aquarium: [
    "Aquarium",
    UnlockRequirementNames.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 6000],
      [RecipeElement.TWIN, 25],
      [RecipeElement.HUNTER, 25],
      [RecipeElement.PUDDLE, 5],
      [RecipeElement.AQUA, 10],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  indigograss: [
    "Indigo Grass",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.PUDDLE, 10],
      [RecipeElement.DREAM, 5],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  indigoflowers: [
    "Indigo Flowers",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 25],
      [RecipeElement.PUDDLE, 10],
      [RecipeElement.BLACKINDIGO, 5],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  indigocypress: [
    "Indigo Cypress",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PUDDLE, 10],
      [RecipeElement.PETAL, 5],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  indigocypresscluster: [
    "Indigo Cypress Cluster",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 75],
      [RecipeElement.PUDDLE, 10],
      [RecipeElement.AQUA, 5],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  tallindigocypress: [
    "Tall Indigo Cypress",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PUDDLE, 10],
      [RecipeElement.PETAL, 5],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  indigoshrubs: [
    "Indigo Shrubs",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 50],
      [RecipeElement.PUDDLE, 10],
      [RecipeElement.MAGMA, 5],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  labyrinthwalllamp: [
    "Labyrinth Wall Lamp",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 300],
      [RecipeElement.FIRE, 20],
      [RecipeElement.GLASS, 5],
      [RecipeElement.PETAL, 5],
    ]),
    DecorationTheme.LABYRINTH,
  ],
  labyrinthstandinglamp: [
    "Labyrinth Standing Lamp",
    UnlockRequirementNames.POLESTAR,
    new Map([
      [RecipeElement.NEWBUCKS, 300],
      [RecipeElement.FIRE, 20],
      [RecipeElement.MOTE, 5],
      [RecipeElement.PETAL, 5],
    ]),
    DecorationTheme.LABYRINTH,
  ],
};

export const decorationDescription: { [key in Decoration]: string } = {
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
  woodenfence: "No need to be on the fence about this fence — it's great!",
  straightstonefence: "A beautifully, ancient stone fence. It's just like a curved fence, only straight!",
  curvedstonefence: "An elegant, archaic stone fence. It's just like a straight fence, only curved!",
  electricpillarlamp: "Adds a truly shocking display of elegance wherever you put it.",
  smallflowerpillow: "A perfect seat for when your busy-bee slimes want to rest.",
  largeflowerpillow: "A flowery throne for your garden-loving slimes.",
  azurewaterflower: "Bluer than the water around them, they give off a strange energy.",
  overgrownlilypad: "Well worth spending some Monet on.",
  giantstalks: "These stalks are big, but there are not giants at the top.",
  floralslimetree: "Not just for Tabby Slimes! Flower-shaped platforms make a great perching spot for any fun-loving slime.",
  flowerlamp: "Bring wonders of your garden to light with this beautiful flower-shaped lamp.",
  hightechwall: "A speculative, futuristic wall made from technology that, by all rights, shouldn't exist in this world.",
  hightechbattery: "A futuristic battery, designed with nano cells that haven't been invented yet.",
  miniaturesdome: "Miniature buildings in a display dome: just one of the many mysteries of Rainbow Island.",
  miniaturewindmill: "Works best in a small breeze.",
  goldentwinstatue: "A golden monument to the slime that'll have you seeing double.",
  goldensloomberstatue: "Make any area seem a bit cozier with this golden monument to Rainbow Island's sleepiest slime.",
  goldenhyperstatue: "This golden monument to Rainbow Island's speediest slime is the only time you'll them standing still.",
  goldenyolkystatue: "The eggiest slime shines in this golden monument. Goes great with a Golden Chicken Statue!",
  indigograss: "This prince of grasses grows best in a purple rain.",
  indigoflowers: "Plant them by in-digging! Go!",
  indigocypress: "The dream-like indigo hues of these cypress trees must come from somewhere with very unusual soil.",
  indigocypresscluster: "One indigo cypress is like a dream. A cluster of them is more like a shared hallucination.",
  tallindigocypress: "Gazing at this tall cypress makes you feel refreshed, as if you just woke from a long sleep.",
  indigoshrubs: "These shrubs are kind like a nap: short but satisfying.",
  labyrinthwalllamp: "This wall lamp would be perfect for illunimating some kind of mysterious labyrinth.",
  labyrinthstandinglamp: "Helps guide your way, even if you don't know what twists and turns are next.",
};

export const decorationNames = Object.values(Decoration);