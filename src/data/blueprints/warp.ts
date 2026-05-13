import {Unlock, Recipe, RecipeElement, Requirement, RequirementProps} from "./blueprints";

export enum Warp {
    TELEPORT_HOME_GREEN = "teleporthomegreen",
    TELEPORT_HOME_BLUE = "teleporthomeblue",
    TELEPORT_HOME_RED = "teleporthomered",
    TELEPORT_HOME_YELLOW = "teleporthomeyellow",
    TELEPORT_EV = "teleportev",
    TELEPORT_SS = "teleportss",
    TELEPORT_PB = "teleportpb",
    TELEPORT_GL = "teleportgl",
    TELEPORT_SANCTUARY_BLUE = "teleportsanctuaryblue",
    TELEPORT_SANCTUARY_GREEN = "teleportsanctuarygreen",
    TELEPORT_SANCTUARY_VIOLET = "teleportsanctuaryviolet",
    TELEPORT_SANCTUARY_TEAL = "teleportsanctuaryteal",
    MARKET_LINK = "marketlink",
    REFINERY_LINK = "refinerylink",
    TELEPORT_AMBER = "teleportamber",
    TELEPORT_BERRY = "teleportberry",
    TELEPORT_BLUE = "teleportblue",
    TELEPORT_GOLD = "teleportgold",
    TELEPORT_GREEN = "teleportgreen",
    TELEPORT_GREY = "teleportgrey",
    TELEPORT_PINK = "teleportpink",
    TELEPORT_RED = "teleportred",
    TELEPORT_SNOWY = "teleportsnowy",
    TELEPORT_VIOLET = "teleportviolet",
    WARP_DEPOT_AMBER = "warpdepotamber",
    WARP_DEPOT_BERRY = "warpdepotberry",
    WARP_DEPOT_BLUE = "warpdepotblue",
    WARP_DEPOT_GOLD = "warpdepotgold",
    WARP_DEPOT_GREEN = "warpdepotgreen",
    WARP_DEPOT_GREY = "warpdepotgrey",
    WARP_DEPOT_PINK = "warpdepotpink",
    WARP_DEPOT_RED = "warpdepotred",
    WARP_DEPOT_SNOWY = "warpdepotsnowy",
    WARP_DEPOT_VIOLET = "warpdepotviolet",
    LINKED_CANNON_BLUE = "linkedcannonblue",
    LINKED_CANNON_GREEN = "linkedcannongreen",
    LINKED_CANNON_GREY = "linkedcannongrey",
    LINKED_CANNON_GOLD = "linkedcannongold",
    LINKED_CANNON_PINK = "linkedcannonpink",
    LINKED_CANNON_RED = "linkedcannonred",
    LINKED_CANNON_VIOLET = "linkedcannonviolet",
}

type WarpProps = {
    name: string;
    unlock: RequirementProps;
    recipe: Recipe;
};

const cWrp = (name: string, unlock: RequirementProps, recipe: Recipe): WarpProps => ({name, unlock, recipe});

export const warpGadgets: {
    [key in Warp]: WarpProps;
} = {
    teleporthomegreen: cWrp(
        "Green Home Portal",
        Requirement(Unlock.VIKTOR, null),
        new Map([
            [RecipeElement.NEWBUCKS, 800],
            [RecipeElement.ANGLER, 20],
            [RecipeElement.RADIANT, 10],
            [RecipeElement.WAX, 10],
            [RecipeElement.WILDHONEY, 5],
        ]),
    ),
    teleporthomeblue: cWrp(
        "Blue Home Portal",
        Requirement(Unlock.VIKTOR, null),
        new Map([
            [RecipeElement.NEWBUCKS, 250],
            [RecipeElement.ROCK, 10],
            [RecipeElement.RADIANT, 10],
            [RecipeElement.PRIMORDY, 5],
        ]),
    ),
    teleporthomered: cWrp(
        "Red Home Portal",
        Requirement(Unlock.VIKTOR, null),
        new Map([
            [RecipeElement.NEWBUCKS, 800],
            [RecipeElement.BOOM, 20],
            [RecipeElement.JELLY, 10],
            [RecipeElement.PRIMORDY, 10],
            [RecipeElement.LAVA, 5],
        ]),
    ),
    teleporthomeyellow: cWrp(
        "Yellow Home Portal",
        Requirement(Unlock.VIKTOR, null),
        new Map([
            [RecipeElement.NEWBUCKS, 250],
            [RecipeElement.COTTON, 10],
            [RecipeElement.JELLY, 10],
            [RecipeElement.BRINE, 10],
        ]),
    ),
    teleportev: cWrp(
        "Ember Valley Portal",
        Requirement(Unlock.POD, null),
        new Map([
            [RecipeElement.NEWBUCKS, 1000],
            [RecipeElement.FIRE, 20],
            [RecipeElement.CRYSTAL, 10],
            [RecipeElement.RADIANT, 10],
            [RecipeElement.PRIMORDY, 10],
            [RecipeElement.DIAMOND, 1],
        ]),
    ),
    teleportss: cWrp(
        "Starlight Strand Portal",
        Requirement(Unlock.POD, null),
        new Map([
            [RecipeElement.NEWBUCKS, 1000],
            [RecipeElement.HUNTER, 20],
            [RecipeElement.HONEY, 10],
            [RecipeElement.RADIANT, 10],
            [RecipeElement.WAX, 10],
            [RecipeElement.DIAMOND, 1],
        ]),
    ),
    teleportpb: cWrp(
        "Powderfall Bluffs Portal",
        Requirement(Unlock.POD, null),
        new Map([
            [RecipeElement.NEWBUCKS, 1000],
            [RecipeElement.SABER, 20],
            [RecipeElement.PUDDLE, 5],
            [RecipeElement.RADIANT, 10],
            [RecipeElement.FOSSIL, 10],
            [RecipeElement.DIAMOND, 1],
        ]),
    ),
    teleportgl: cWrp(
        "Grey Labyrinth Portal",
        Requirement(Unlock.DOOR, 25),
        new Map([
            [RecipeElement.NEWBUCKS, 1000],
            [RecipeElement.SLOOMBER, 20],
            [RecipeElement.TANGLE, 10],
            [RecipeElement.MAGMA, 10],
            [RecipeElement.BLACKINDIGO, 10],
            [RecipeElement.DIAMOND, 1],
        ]),
    ),
    marketlink: cWrp(
        "Market Link",
        Requirement(Unlock.MOCHI, null),
        new Map([
            [RecipeElement.NEWBUCKS, 250],
            [RecipeElement.PINK, 20],
            [RecipeElement.WAX, 10],
            [RecipeElement.PRIMORDY, 10],
            [RecipeElement.SAND, 5],
        ]),
    ),
    refinerylink: cWrp(
        "Refinery Link",
        Requirement(Unlock.MOCHI, null),
        new Map([
            [RecipeElement.NEWBUCKS, 250],
            [RecipeElement.PHOSPHOR, 10],
            [RecipeElement.JELLY, 10],
            [RecipeElement.BRINE, 5],
        ]),
    ),
    teleportamber: cWrp(
        "Amber Teleporter",
        Requirement(Unlock.POLESTAR, 3000),
        new Map([
            [RecipeElement.NEWBUCKS, 4000],
            [RecipeElement.DERVISH, 30],
            [RecipeElement.PETAL, 20],
            [RecipeElement.DREAM, 20],
            [RecipeElement.AQUA, 10],
            [RecipeElement.JELLY, 2],
        ]),
    ),
    teleportberry: cWrp(
        "Berry Teleporter",
        Requirement(Unlock.POLESTAR, 3000),
        new Map([
            [RecipeElement.NEWBUCKS, 4000],
            [RecipeElement.SLOOMBER, 30],
            [RecipeElement.PETAL, 20],
            [RecipeElement.BLACKINDIGO, 20],
            [RecipeElement.MAGMA, 10],
            [RecipeElement.ROYAL, 2],
        ]),
    ),
    teleportblue: cWrp(
        "Blue Teleporter",
        Requirement(Unlock.VIKTOR, null),
        new Map([
            [RecipeElement.NEWBUCKS, 1200],
            [RecipeElement.ROCK, 30],
            [RecipeElement.BRINE, 20],
            [RecipeElement.RADIANT, 20],
            [RecipeElement.HONEY, 10],
            [RecipeElement.DIAMOND, 2],
        ]),
    ),
    teleportgold: cWrp(
        "Golden Teleporter",
        Requirement(Unlock.DOOR, null),
        new Map([
            [RecipeElement.NEWBUCKS, 1200],
            [RecipeElement.TWIN, 30],
            [RecipeElement.PETAL, 20],
            [RecipeElement.RADIANT, 20],
            [RecipeElement.WILDHONEY, 10],
            [RecipeElement.ROYAL, 2],
        ]),
    ),
    teleportgreen: cWrp(
        "Green Teleporter",
        Requirement(Unlock.POLESTAR, 2500),
        new Map([
            [RecipeElement.NEWBUCKS, 3000],
            [RecipeElement.TWIN, 30],
            [RecipeElement.PETAL, 20],
            [RecipeElement.BLACKINDIGO, 20],
            [RecipeElement.DREAM, 10],
            [RecipeElement.ROYAL, 2],
        ]),
    ),
    teleportgrey: cWrp(
        "Grey Teleporter",
        Requirement(Unlock.VIKTOR, null),
        new Map([
            [RecipeElement.NEWBUCKS, 1200],
            [RecipeElement.TABBY, 30],
            [RecipeElement.WAX, 20],
            [RecipeElement.RADIANT, 20],
            [RecipeElement.SAND, 10],
            [RecipeElement.DIAMOND, 2],
        ]),
    ),
    teleportpink: cWrp(
        "Pink Teleporter",
        Requirement(Unlock.VIKTOR, null),
        new Map([
            [RecipeElement.NEWBUCKS, 1200],
            [RecipeElement.PINK, 30],
            [RecipeElement.JELLY, 20],
            [RecipeElement.RADIANT, 20],
            [RecipeElement.LAVA, 10],
            [RecipeElement.DIAMOND, 2],
        ]),
    ),
    teleportred: cWrp(
        "Red Teleporter",
        Requirement(Unlock.POLESTAR, 2500),
        new Map([
            [RecipeElement.NEWBUCKS, 3000],
            [RecipeElement.HYPER, 30],
            [RecipeElement.PETAL, 20],
            [RecipeElement.AQUA, 20],
            [RecipeElement.MAGMA, 10],
            [RecipeElement.ROYAL, 2],
        ]),
    ),
    teleportsnowy: cWrp(
        "Snowy Teleporter",
        Requirement(Unlock.VIKTOR, null),
        new Map([
            [RecipeElement.NEWBUCKS, 1200],
            [RecipeElement.SABER, 30],
            [RecipeElement.FOSSIL, 20],
            [RecipeElement.RADIANT, 20],
            [RecipeElement.LAVA, 10],
            [RecipeElement.DIAMOND, 2],
        ]),
    ),
    teleportviolet: cWrp(
        "Violet Teleporter",
        Requirement(Unlock.VIKTOR, null),
        new Map([
            [RecipeElement.NEWBUCKS, 1200],
            [RecipeElement.PHOSPHOR, 30],
            [RecipeElement.PRIMORDY, 20],
            [RecipeElement.RADIANT, 20],
            [RecipeElement.SAND, 10],
            [RecipeElement.DIAMOND, 2],
        ]),
    ),
    warpdepotamber: cWrp(
        "Amber Warp Depot",
        Requirement(Unlock.POLESTAR, 150),
        new Map([
            [RecipeElement.NEWBUCKS, 200],
            [RecipeElement.HONEY, 10],
            [RecipeElement.WAX, 5],
            [RecipeElement.RADIANT, 3],
            [RecipeElement.SAND, 1],
        ]),
    ),
    warpdepotberry: cWrp(
        "Berry Warp Depot",
        Requirement(Unlock.POLESTAR, 150),
        new Map([
            [RecipeElement.NEWBUCKS, 250],
            [RecipeElement.SLOOMBER, 20],
            [RecipeElement.BLACKINDIGO, 10],
            [RecipeElement.RADIANT, 3],
            [RecipeElement.LAVA, 3],
        ]),
    ),
    warpdepotblue: cWrp(
        "Blue Warp Depot",
        Requirement(Unlock.POD, 150),
        new Map([
            [RecipeElement.NEWBUCKS, 250],
            [RecipeElement.ROCK, 20],
            [RecipeElement.WAX, 10],
            [RecipeElement.RADIANT, 3],
            [RecipeElement.SAND, 3],
        ]),
    ),
    warpdepotgold: cWrp(
        "Gold Warp Depot",
        Requirement(Unlock.POLESTAR, 150),
        new Map([
            [RecipeElement.NEWBUCKS, 300],
            [RecipeElement.COTTON, 10],
            [RecipeElement.JELLY, 5],
            [RecipeElement.RADIANT, 3],
            [RecipeElement.SAND, 1],
        ]),
    ),
    warpdepotgreen: cWrp(
        "Green Warp Depot",
        Requirement(Unlock.POLESTAR, 150),
        new Map([
            [RecipeElement.NEWBUCKS, 200],
            [RecipeElement.PUDDLE, 10],
            [RecipeElement.JELLY, 5],
            [RecipeElement.RADIANT, 3],
            [RecipeElement.LAVA, 1],
        ]),
    ),
    warpdepotgrey: cWrp(
        "Grey Warp Depot",
        Requirement(Unlock.POD, null),
        new Map([
            [RecipeElement.NEWBUCKS, 250],
            [RecipeElement.TABBY, 20],
            [RecipeElement.BRINE, 10],
            [RecipeElement.RADIANT, 5],
            [RecipeElement.LAVA, 3],
        ]),
    ),
    warpdepotpink: cWrp(
        "Pink Warp Depot",
        Requirement(Unlock.POD, null),
        new Map([
            [RecipeElement.NEWBUCKS, 250],
            [RecipeElement.PINK, 20],
            [RecipeElement.PRIMORDY, 10],
            [RecipeElement.RADIANT, 5],
            [RecipeElement.SAND, 3],
        ]),
    ),
    warpdepotred: cWrp(
        "Red Warp Depot",
        Requirement(Unlock.POLESTAR, 150),
        new Map([
            [RecipeElement.NEWBUCKS, 200],
            [RecipeElement.FIRE, 10],
            [RecipeElement.PRIMORDY, 1],
            [RecipeElement.RADIANT, 3],
            [RecipeElement.LAVA, 1],
        ]),
    ),
    warpdepotsnowy: cWrp(
        "Snowy Warp Depot",
        Requirement(Unlock.POD, null),
        new Map([
            [RecipeElement.NEWBUCKS, 250],
            [RecipeElement.SABER, 20],
            [RecipeElement.SNOWFLAKE, 10],
            [RecipeElement.RADIANT, 5],
            [RecipeElement.WILDHONEY, 3],
        ]),
    ),
    warpdepotviolet: cWrp(
        "Violet Warp Depot",
        Requirement(Unlock.POD, null),
        new Map([
            [RecipeElement.NEWBUCKS, 250],
            [RecipeElement.BATTY, 20],
            [RecipeElement.JELLY, 10],
            [RecipeElement.RADIANT, 5],
            [RecipeElement.WILDHONEY, 3],
        ]),
    ),
    linkedcannonblue: cWrp(
        "Blue Linked Cannon",
        Requirement(Unlock.POLESTAR, 500),
        new Map([
            [RecipeElement.NEWBUCKS, 800],
            [RecipeElement.BATTY, 10],
            [RecipeElement.MOTE, 3],
        ]),
    ),
    linkedcannongreen: cWrp(
        "Green Linked Cannon",
        Requirement(Unlock.POLESTAR, 500),
        new Map([
            [RecipeElement.NEWBUCKS, 800],
            [RecipeElement.TWIN, 10],
            [RecipeElement.BLACKINDIGO, 5],
        ]),
    ),
    linkedcannongrey: cWrp(
        "Grey Linked Cannon",
        Requirement(Unlock.POLESTAR, 500),
        new Map([
            [RecipeElement.NEWBUCKS, 800],
            [RecipeElement.BATTY, 10],
            [RecipeElement.MOTE, 3],
        ]),
    ),
    linkedcannongold: cWrp(
        "Gold Linked Cannon",
        Requirement(Unlock.POLESTAR, 500),
        new Map([
            [RecipeElement.NEWBUCKS, 800],
            [RecipeElement.SLOOMBER, 10],
            [RecipeElement.DREAM, 5],
        ]),
    ),
    linkedcannonpink: cWrp(
        "Pink Linked Cannon",
        Requirement(Unlock.POLESTAR, 500),
        new Map([
            [RecipeElement.NEWBUCKS, 800],
            [RecipeElement.BATTY, 10],
            [RecipeElement.MOTE, 3],
        ]),
    ),
    linkedcannonred: cWrp(
        "Red Linked Cannon",
        Requirement(Unlock.POLESTAR, 500),
        new Map([
            [RecipeElement.NEWBUCKS, 800],
            [RecipeElement.BATTY, 10],
            [RecipeElement.MAGMA, 5],
        ]),
    ),
    linkedcannonviolet: cWrp(
        "Violet Linked Cannon",
        Requirement(Unlock.POLESTAR, 500),
        new Map([
            [RecipeElement.NEWBUCKS, 800],
            [RecipeElement.HYPER, 10],
            [RecipeElement.MAGMA, 5],
        ]),
    ),
    teleportsanctuaryblue: cWrp(
        "Blue Sanctuary Portal",
        Requirement(Unlock.CARETAKER, null),
        new Map([]),
    ),
    teleportsanctuarygreen: cWrp(
        "Green Sanctuary Portal",
        Requirement(Unlock.CARETAKER, 50),
        new Map([
            [RecipeElement.NEWBUCKS, 1000],
            [RecipeElement.HYPER, 25],
            [RecipeElement.MAGMA, 20],
            [RecipeElement.PETAL, 10],
        ]),
    ),
    teleportsanctuaryviolet: cWrp(
        "Violet Sanctuary Portal",
        Requirement(Unlock.CARETAKER, 50),
        new Map([
            [RecipeElement.NEWBUCKS, 1000],
            [RecipeElement.SLOOMBER, 25],
            [RecipeElement.DREAM, 20],
            [RecipeElement.PETAL, 10],
        ]),
    ),
    teleportsanctuaryteal: cWrp(
        "Teal Sanctuary Portal",
        Requirement(Unlock.CARETAKER, 50),
        new Map([
                [RecipeElement.NEWBUCKS, 1000],
                [RecipeElement.TWIN, 25],
                [RecipeElement.AQUA, 20],
                [RecipeElement.PETAL, 10],
        ]),
    ),
};

const teleportHomeText = "A teleporter that allows for one-way travel back to the Conservatory.";
const teleportWarpText = "A teleporter that hacks the warp network on Rainbow Island, allowing one-way travel to ";
const teleportCustomText = "A set of two teleporters that can be used to create your own quick travel link.";
const warpDepotText = "A set of two gadgets that allow you to remotely transfer resources between two points.";
const linkedCannonText = "A pair of linked cannons that allow for two-way transport of items between two points.";

export const warpDescriptions: { [key in Warp]: string } = {
    teleporthomegreen: teleportHomeText,
    teleporthomeblue: teleportHomeText,
    teleporthomered: teleportHomeText,
    teleporthomeyellow: teleportHomeText,
    teleportev: teleportWarpText + "Ember Valley.",
    teleportss: teleportWarpText + "Starlight Strand.",
    teleportpb: teleportWarpText + "Powderfall Bluffs.",
    teleportgl: teleportWarpText + "Grey Labyrinth.",
    marketlink: "A compact plort market that allows you to make quick sales. Consult the main plort market for price data.",
    refinerylink: "Allows you to remotely deposit resources into the refinery.",
    teleportamber: teleportCustomText,
    teleportberry: teleportCustomText,
    teleportblue: teleportCustomText,
    teleportgold: teleportCustomText,
    teleportgreen: teleportCustomText,
    teleportgrey: teleportCustomText,
    teleportpink: teleportCustomText,
    teleportred: teleportCustomText,
    teleportsnowy: teleportCustomText,
    teleportviolet: teleportCustomText,
    warpdepotamber: warpDepotText,
    warpdepotberry: warpDepotText,
    warpdepotblue: warpDepotText,
    warpdepotgold: warpDepotText,
    warpdepotgreen: warpDepotText,
    warpdepotgrey: warpDepotText,
    warpdepotpink: warpDepotText,
    warpdepotred: warpDepotText,
    warpdepotsnowy: warpDepotText,
    warpdepotviolet: warpDepotText,
    linkedcannonblue: linkedCannonText,
    linkedcannongreen: linkedCannonText,
    linkedcannongrey: linkedCannonText,
    linkedcannongold: linkedCannonText,
    linkedcannonpink: linkedCannonText,
    linkedcannonred: linkedCannonText,
    linkedcannonviolet: linkedCannonText,
    teleportsanctuaryblue: teleportWarpText + "the Sanctuary.",
    teleportsanctuarygreen: teleportWarpText + "the Sanctuary.",
    teleportsanctuaryviolet: teleportWarpText + "the Sanctuary.",
    teleportsanctuaryteal: teleportWarpText + "the Sanctuary.",
};

export const warpNames = Object.values(Warp);
