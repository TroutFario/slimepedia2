import {Decoration} from "./decoration";
import {UpgradeWithTier} from "./upgrades";
import {Utility} from "./utilities";
import {Warp} from "./warp";

export enum BlueprintType {
    UPGRADE = "upgrade",
    UTILITY = "utility",
    WARP = "warp",
    DECORATION = "decoration",
}

export enum RecipeElement {
    NEWBUCKS = "newbucks",
    PINK = "pink",
    COTTON = "cotton",
    TABBY = "tabby",
    ROCK = "rock",
    PHOSPHOR = "phosphor",
    PUDDLE = "puddle",
    BOOM = "boom",
    HUNTER = "hunter",
    CRYSTAL = "crystal",
    FIRE = "fire",
    BATTY = "batty",
    FLUTTER = "flutter",
    YOLKY = "yolky",
    GOLD = "gold",
    SABER = "saber",
    ANGLER = "angler",
    RINGTAIL = "ringtail",
    DERVISH = "dervish",
    TANGLE = "tangle",
    RADIANT = "radiant",
    HONEY = "honey",
    TWIN = "twin",
    SLOOMBER = "sloomber",
    HYPER = "hyper",
    SHADOW = "shadow",
    MAGMA = "magma",
    ROYAL = "royal",
    PRISMA = "prisma",
    BLACKINDIGO = "blackindigo",
    PETAL = "petal",
    AQUA = "aqua",
    DREAM = "dream",
    WAX = "wax",
    WILDHONEY = "wildHoney",
    BRINE = "brine",
    JELLY = "jelly",
    SNOWFLAKE = "snowflake",
    SUNSAP = "sunsap",
    DRIFT = "drift",
    GLASS = "glass",
    MOTE = "mote",
    LAVA = "lava",
    PRIMORDY = "primordy",
    FOSSIL = "fossil",
    SAND = "sand",
    DIAMOND = "diamond",
    TANKLINER = "tankLiner",
    STORAGECELL = "storageCell",
    STORAGEUNIT = "storageUnit",
    POWERCHIP = "powerChip",
    DASHBOOTMODULE = "dashBootModule",
    JETPACKDRIVE = "jetpackDrive",
    HEARTMODULE = "heartModule",
    GOLDENSURESHOTMODULE = "goldenSureshotModule",
    SHADOWSURESHOTMODULE = "shadowSureshotModule",
    DRONEKEY = "droneKey",
    REGENMODULE = "regenModule",
    INJECTORMODULE = "injectorModule",
    DRONEMODULE = "droneModule",
}

export const recipeElements: {
    [key in RecipeElement]: [string, string, string | null];
} = {
    newbucks: ["Newbucks", "misc/buck", null],
    pink: ["Pink Plort", "plorts/pink", "slimes/pink"],
    cotton: ["Cotton Plort", "plorts/cotton", "slimes/cotton"],
    tabby: ["Tabby Plort", "plorts/tabby", "slimes/tabby"],
    rock: ["Rock Plort", "plorts/rock", "slimes/rock"],
    phosphor: ["Phosphor Plort", "plorts/phosphor", "slimes/phosphor"],
    puddle: ["Puddle Plort", "plorts/puddle", "slimes/puddle"],
    boom: ["Boom Plort", "plorts/boom", "slimes/boom"],
    hunter: ["Hunter Plort", "plorts/hunter", "slimes/hunter"],
    crystal: ["Crystal Plort", "plorts/crystal", "slimes/crystal"],
    fire: ["Fire Plort", "plorts/fire", "slimes/fire"],
    batty: ["Batty Plort", "plorts/batty", "slimes/batty"],
    flutter: ["Flutter Plort", "plorts/flutter", "slimes/flutter"],
    yolky: ["Yolky Plort", "plorts/yolky", "slimes/yolky"],
    gold: ["Gold Plort", "plorts/gold", "slimes/gold"],
    saber: ["Saber Plort", "plorts/saber", "slimes/saber"],
    angler: ["Angler Plort", "plorts/angler", "slimes/angler"],
    ringtail: ["Ringtail Plort", "plorts/ringtail", "slimes/ringtail"],
    dervish: ["Dervish Plort", "plorts/dervish", "slimes/dervish"],
    tangle: ["Tangle Plort", "plorts/tangle", "slimes/tangle"],
    radiant: ["Radiant Ore", "resources/radiant", "items/resources/radiant"],
    honey: ["Honey Plort", "plorts/honey", "slimes/honey"],
    twin: ["Twin Plort", "plorts/twin", "slimes/twin"],
    sloomber: ["Sloomber Plort", "plorts/sloomber", "slimes/sloomber"],
    hyper: ["Hyper Plort", "plorts/hyper", "slimes/hyper"],
    shadow: ["Shadow Plort", "plorts/shadow", "slimes/shadow"],
    magma: ["Magma Honeycomb", "resources/magma", "resources/magma"],
    royal: ["Royal Jelly", "resources/royal", "resources/royal"],
    prisma: ["Prisma Plort", "resources/prisma", "items/resources/prisma"],
    blackindigo: ["Black Indigonium", "resources/blackindigo", "items/resources/blackindigo"],
    petal: ["Tin Petal", "resources/petal", "resources/petal"],
    aqua: ["Aqua Glass", "resources/aqua", "resources/aqua"],
    dream: ["Dream Bubble", "resources/dream", "resources/dream"],
    wax: ["Buzz Wax", "resources/wax", "resources/wax"],
    wildHoney: ["Wild Honey", "resources/wildhoney", "items/resources/wildhoney"],
    brine: ["Deep Brine", "resources/brine", "resources/brine"],
    jelly: ["Jellystone", "resources/jelly", "resources/jelly"],
    snowflake: ["Perfect Snowflake", "resources/snowflake", "items/resources/snowflake"],
    sunsap: ["Sun Sap", "resources/sunsap", "resources/sunsap"],
    drift: ["Drift Crystal", "resources/drift", "resources/drift"],
    glass: ["Storm Glass", "resources/glass", "resources/glass"],
    mote: ["Lightning Mote", "resources/mote", "resources/mote"],
    lava: ["Lava Dust", "resources/lava", "resources/lava"],
    primordy: ["Primordy Oil", "resources/primordy", "resources/primordy"],
    fossil: ["Slime Fossil", "resources/fossil", "resources/fossil"],
    sand: ["Silky Sand", "resources/sand", "resources/sand"],
    diamond: ["Strange Diamond", "resources/diamond", "resources/diamond"],
    tankLiner: ["Tank Liner", "upgrades/tankLiner", "upgrades/tankLiner"],
    storageCell: ["Storage Cell", "upgrades/storageCell", null],
    storageUnit: ["Storage Unit", "upgrades/storageUnit", null],
    powerChip: ["Power Chip", "upgrades/powerChip", null],
    dashBootModule: ["Dash Boot Module", "upgrades/dashBootModule", null],
    jetpackDrive: ["Jetpack Drive", "upgrades/jetpackDrive", null],
    heartModule: ["Heart Module", "upgrades/heartModule", null],
    goldenSureshotModule: ["Golden Sureshot Module", "upgrades/goldenSureshotModule", null],
    shadowSureshotModule: ["Shadow Sureshot Module", "upgrades/shadowSureshotModule", null],
    droneKey: ["Drone Key", "upgrades/droneKey", null],
    regenModule: ["Regenerator Module", "upgrades/regenModule", null],
    injectorModule: ["Injector Module", "upgrades/injectorModule", null],
    droneModule: ["Drone Station Module", "gadgets/droneModule", null],
};

export type Recipe = Map<RecipeElement, number>;

export enum Unlock {
    START = "start",
    POD = "pod",
    POLESTAR = "polestar",
    MOCHI = "mochi",
    VIKTOR = "viktor",
    OGDEN = "ogden",
    BOB = "bob",
    THORA = "thora",
    GIGI = "gigi",
    DOOR = "door",
    NIGHT = "night",
    GHOST = "ghost",
    CARETAKER = "caretaker",
}

export enum Currency {
    NEWBUCKS = "newbucks",
    RAINBOW = "rainbow",
    SPRINKLES = "sprinkles",
    SHADOW = "shadow",
}

export const currencies: { [key in Currency]: { name: string; icon: string } } = {
    newbucks: {
        name: "Newbucks",
        icon: "misc/buck",
    },
    rainbow: {
        name: "Rainbow Bucks",
        icon: "misc/rainbowbuck",
    },
    sprinkles: {
        name: "Sprinkles",
        icon: "misc/sprinkles",
    },
    shadow: {
        name: "Shadow Orbs",
        icon: "misc/shadoworb",
    },
} as const;

type UnlockRequirementProps = {
    name: string,
    icon: string,
    currency: Currency | null
}

const cRP = (name: string, icon: string, currency: Currency | null): UnlockRequirementProps => ({name, icon, currency});

export const unlockRequirements: { [key in Unlock]: UnlockRequirementProps } = {
    start: cRP("Available at the start", "misc/check", null),
    pod: cRP("Unlocked via a Pod", "misc/pod", null),
    polestar: cRP("Unlocked via Polestar Provisions", "misc/polestar", Currency.NEWBUCKS),
    mochi: cRP("Given by Mochi Miles", "ranchers/mochi", null),
    viktor: cRP("Given by Viktor Humphries", "ranchers/viktor", null),
    ogden: cRP("Given by Ogden Ortiz", "ranchers/ogden", null),
    bob: cRP("Given by BOb", "ranchers/bob", null),
    thora: cRP("Given by Thora West", "ranchers/thora", null),
    gigi: cRP("Given by Gigi", "ranchers/gigi", null),
    door: cRP("Found inside Shadow Vaults", "misc/door", Currency.SHADOW),
    night: cRP("Unlocked via Night Market", "misc/nightmarket", Currency.RAINBOW),
    ghost: cRP("Found with roaming Ghost Drones", "misc/ghostdroneface", null),
    caretaker: cRP("Unlocked at the Caretaker's Shop", "ranchers/caretaker", Currency.SPRINKLES),
} as const;

export type RequirementProps = {
    unlock: Unlock,
    price: number | null
}

export const Requirement = (unlock: Unlock, price: number | null): RequirementProps => ({unlock, price});

export const prettyRequirement = (r: RequirementProps): string => {
    const req = unlockRequirements[r.unlock];
    const currency = req.currency;

    return req.name + (
        currency === null
            ? ""
            : ` for ${r.price} ${currencies[currency].name}`
    );
};

export enum DecorationTheme {
    ANY = "any",
    FIELDS = "fields",
    VALLEY = "valley",
    STRAND = "strand",
    BLUFFS = "bluffs",
    LABYRINTH = "labyrinth",
    CONSERVATORY = "conservatory",
    GOLDEN = "golden",
    BEACH = "beach",
    FUN = "fun",
}

export type BlueprintItem = UpgradeWithTier | Utility | Warp | Decoration;
