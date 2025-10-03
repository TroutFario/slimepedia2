import { UnlockRequirementNames, Recipe } from "./blueprints";

export enum Warp {
  TELEPORT_HOME_GREEN = "teleporthomegreen",
  TELEPORT_HOME_BLUE = "teleporthomeblue",
  TELEPORT_HOME_RED = "teleporthomered",
  TELEPORT_HOME_YELLOW = "teleporthomeyellow",
  TELEPORT_EV = "teleportev",
  TELEPORT_SS = "teleportss",
  TELEPORT_PB = "teleportpb",
  TELEPORT_GL = "teleportgl",
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

export const warpGadgets: {
  [key in Warp]: [string, UnlockRequirementNames, Recipe];
} = {
  teleporthomegreen: [
    "Green Home Portal",
    UnlockRequirementNames.VIKTOR,
    { newbucks: 800, angler: 20, radiant: 10, wax: 10, wildHoney: 5 },
  ],
  teleporthomeblue: [
    "Blue Home Portal",
    UnlockRequirementNames.VIKTOR,
    { newbucks: 250, rock: 10, radiant: 10, primordy: 5 },
  ],
  teleporthomered: [
    "Red Home Portal",
    UnlockRequirementNames.VIKTOR,
    { newbucks: 800, boom: 20, jelly: 10, primordy: 10, lava: 5 },
  ],
  teleporthomeyellow: [
    "Yellow Home Portal",
    UnlockRequirementNames.VIKTOR,
    { newbucks: 250, cotton: 10, jelly: 10, brine: 10 },
  ],
  teleportev: [
    "Ember Valley Portal",
    UnlockRequirementNames.POD,
    { newbucks: 1000, fire: 20, crystal: 10, radiant: 10, primordy: 10, diamond: 1 },
  ],
  teleportss: [
    "Starlight Strand Portal",
    UnlockRequirementNames.POD,
    { newbucks: 1000, hunter: 20, honey: 10, radiant: 10, wax: 10, diamond: 1 },
  ],
  teleportpb: [
    "Powderfall Bluffs Portal",
    UnlockRequirementNames.POD,
    { newbucks: 1000, saber: 20, puddle: 5, radiant: 10, fossil: 10, diamond: 1 },
  ],
  teleportgl: [
    "Grey Labyrinth Portal",
    UnlockRequirementNames.DOOR,
    { newbucks: 1000, sloomber: 20, tangle: 10, magma: 10, blackindigo: 10, diamond: 1 },
  ],
  marketlink: [
    "Market Link",
    UnlockRequirementNames.MOCHI,
    { newbucks: 250, pink: 20, wax: 10, primordy: 10, sand: 5 },
  ],
  refinerylink: [
    "Refinery Link",
    UnlockRequirementNames.MOCHI,
    { newbucks: 250, phosphor: 10, jelly: 10, brine: 5 },
  ],
  teleportamber: [
    "Amber Teleporter",
    UnlockRequirementNames.IDK,
    { newbucks: 4000, dervish: 30, petal: 20, dream: 20, aqua: 10, jelly: 2 },
  ],
  teleportberry: [
    "Berry Teleporter",
    UnlockRequirementNames.IDK,
    { newbucks: 4000, sloomber: 30, petal: 20, blackindigo: 20, magma: 10, royal: 2 },
  ],
  teleportblue: [
    "Blue Teleporter",
    UnlockRequirementNames.VIKTOR,
    { newbucks: 1200, rock: 30, brine: 20, radiant: 20, honey: 10, diamond: 2 },
  ],
  teleportgold: [
    "Golden Teleporter",
    UnlockRequirementNames.DOOR,
    { newbucks: 1200, twin: 30, petal: 20, radiant: 20, wildHoney: 10, royal: 2 },
  ],
  teleportgreen: [
    "Green Teleporter",
    UnlockRequirementNames.IDK,
    { newbucks: 3000, twin: 30, petal: 20, blackindigo: 20, dream: 10, royal: 2 },
  ],
  teleportgrey: [
    "Grey Teleporter",
    UnlockRequirementNames.VIKTOR,
    { newbucks: 1200, tabby: 30, wax: 20, radiant: 20, sand: 10, diamond: 2 },
  ],
  teleportpink: [
    "Pink Teleporter",
    UnlockRequirementNames.VIKTOR,
    { newbucks: 1200, pink: 30, jelly: 20, radiant: 20, lava: 10, diamond: 2 },
  ],
  teleportred: [
    "Red Teleporter",
    UnlockRequirementNames.IDK,
    { newbucks: 3000, hyper: 30, petal: 20, aqua: 20, magma: 10, royal: 2 },
  ],
  teleportsnowy: [
  "Snowy Teleporter",
  UnlockRequirementNames.VIKTOR,
    { newbucks: 1200, saber: 30, fossil: 20, radiant: 20, lava: 10, diamond: 2 },
  ],
  teleportviolet: [
    "Violet Teleporter",
    UnlockRequirementNames.VIKTOR,
    { newbucks: 1200, phosphor: 30, primordy: 20, radiant: 20, sand: 10, diamond: 2 },
  ],
  warpdepotamber: [
    "Amber Warp Depot",
    UnlockRequirementNames.IDK,
    { newbucks: 200, honey: 10, wax: 5, radiant: 3, sand: 1 }
  ],
  warpdepotberry: [
    "Berry Warp Depot",
    UnlockRequirementNames.IDK,
    { newbucks: 250, sloomber: 20, blackindigo: 10, radiant: 3, lava: 3 },
  ],
  warpdepotblue: [
    "Blue Warp Depot",
    UnlockRequirementNames.POD,
    { newbucks: 250, rock: 20, wax: 10, radiant: 3, sand: 3 },
  ],
  warpdepotgold: [
    "Gold Warp Depot",
    UnlockRequirementNames.IDK,
    { newbucks: 300, cotton: 10, jelly: 5, radiant: 3, sand: 1 },
  ],
  warpdepotgreen: [
    "Green Warp Depot",
    UnlockRequirementNames.IDK,
    { newbucks: 200, puddle: 10, jelly: 5, radiant: 3, lava: 1 },
  ],
  warpdepotgrey: [
    "Grey Warp Depot",
    UnlockRequirementNames.POD,
    { newbucks: 250, tabby: 20, brine: 10, radiant: 5, lava: 3 },
  ],
  warpdepotpink: [
    "Pink Warp Depot",
    UnlockRequirementNames.POD,
    { newbucks: 250, pink: 20, primordy: 10, radiant: 5, sand: 3 },
  ],
  warpdepotred: [
    "Red Warp Depot",
    UnlockRequirementNames.IDK,
    { newbucks: 200, fire: 10, primordy: 1, radiant: 3, lava: 1 },
  ],
  warpdepotsnowy: [
    "Snowy Warp Depot",
    UnlockRequirementNames.POD,
    { newbucks: 250, saber: 20, snowflake: 10, radiant: 5, wildHoney: 3 },
  ],
  warpdepotviolet: [
    "Violet Warp Depot",
    UnlockRequirementNames.POD,
    { newbucks: 250, batty: 20, jelly: 10, radiant: 5, wildHoney: 3 },
  ],
  linkedcannonblue: [
    "Blue Linked Cannon",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 800, batty: 10, mote: 3 },
  ],
  linkedcannongreen: [
    "Green Linked Cannon",
    UnlockRequirementNames.IDK,
    { newbucks: 800, twin: 10, blackindigo: 5 },
  ],
  linkedcannongrey: [
    "Grey Linked Cannon",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 800, batty: 10, mote: 3 },
  ],
  linkedcannongold: [
    "Gold Linked Cannon",
    UnlockRequirementNames.IDK,
    { newbucks: 800, sloomber: 10, dream: 5 },
  ],
  linkedcannonpink: [
    "Pink Linked Cannon",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 800, batty: 10, mote: 3 },
  ],
  linkedcannonred: [
    "Red Linked Cannon",
    UnlockRequirementNames.IDK,
    { newbucks: 800, batty: 10, magma: 5 },
  ],
  linkedcannonviolet: [
    "Violet Linked Cannon",
    UnlockRequirementNames.POLESTAR,
    { newbucks: 800, hyper: 10, magma: 5 },
  ],
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
};

export const warpNames = Object.values(Warp);