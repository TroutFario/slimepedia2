import { Recipe, UnlockRequirementNames } from "./blueprints";

export enum Upgrade {
  HARVESTER = "harvester",
  HEALTH = "health",
  POWER = "power",
  DASH = "dash",
  JETPACK = "jetpack",
  TANK_BOOSTER = "tankBooster",
  EXTRA_TANK = "extraTank",
  WATER_TANK = "waterTank",
  PULSE_WAVE = "pulseWave",
  TANK_GUARD = "tankGuard",
  DRONE_KEY = "droneKey",
  GOLDEN_SURESHOT = "goldenSureshot",
  SHADOW_SURESHOT = "shadowSureshot",
  REGENERATOR = "regenerator",
  POWER_INJECTOR = "powerinjector",
}

export const upgradePacks: { [key in Upgrade]: [string, number] } = {
  harvester: ["Resource Harvester", 1],
  health: ["Health Modules", 4],
  power: ["Power Modules", 5],
  dash: ["Dash Boots Speed", 2],
  jetpack: ["Jetpack", 2],
  tankBooster: ["Tank Capacity", 8],
  extraTank: ["Extra Tanks", 2],
  waterTank: ["Dedicated Water Tank", 1],
  pulseWave: ["Pulse Wave", 1],
  tankGuard: ["Tank Loss Prevention", 3],
  droneKey: ["Drone Archive Key", 1],
  goldenSureshot: ["Golden Sureshot", 3],
  shadowSureshot: ["Shadow Sureshot", 1],
  regenerator: ["Regenerator", 2],
  powerinjector: ["Power Injector", 2],
};



// Enum pour toutes les upgrades avec leurs tiers
export enum UpgradeWithTier {
  HARVESTER1 = "harvester1",
  HEALTH1 = "health1",
  HEALTH2 = "health2", 
  HEALTH3 = "health3",
  HEALTH4 = "health4",
  POWER1 = "power1",
  POWER2 = "power2",
  POWER3 = "power3",
  POWER4 = "power4",
  POWER5 = "power5",
  DASH1 = "dash1",
  DASH2 = "dash2",
  JETPACK1 = "jetpack1",
  JETPACK2 = "jetpack2",
  TANK_BOOSTER1 = "tankBooster1",
  TANK_BOOSTER2 = "tankBooster2",
  TANK_BOOSTER3 = "tankBooster3",
  TANK_BOOSTER4 = "tankBooster4",
  TANK_BOOSTER5 = "tankBooster5",
  TANK_BOOSTER6 = "tankBooster6",
  TANK_BOOSTER7 = "tankBooster7",
  TANK_BOOSTER8 = "tankBooster8",
  EXTRA_TANK1 = "extraTank1",
  EXTRA_TANK2 = "extraTank2",
  WATER_TANK1 = "waterTank1",
  PULSE_WAVE1 = "pulseWave1",
  TANK_GUARD1 = "tankGuard1",
  TANK_GUARD2 = "tankGuard2",
  TANK_GUARD3 = "tankGuard3",
  DRONE_KEY1 = "droneKey1",
  GOLDEN_SURESHOT1 = "goldenSureshot1",
  GOLDEN_SURESHOT2 = "goldenSureshot2",
  GOLDEN_SURESHOT3 = "goldenSureshot3",
  SHADOW_SURESHOT1 = "shadowSureshot1",
  REGENERATOR1 = "regenerator1",
  REGENERATOR2 = "regenerator2",
  POWER_INJECTOR1 = "powerinjector1",
  POWER_INJECTOR2 = "powerinjector2",
}

export const upgradesList: {
  [key in UpgradeWithTier]: [string, UnlockRequirementNames, Recipe];
} = {
  harvester1: ["Resource Harvester", UnlockRequirementNames.START, { newbucks: 450, cotton: 10 }],
  health1: ["Heart Module I", UnlockRequirementNames.START, { newbucks: 450, pink: 10 }],
  health2: [
    "Heart Module II",
    UnlockRequirementNames.POD,
    {
      newbucks: 900,
      pink: 20,
      honey: 10,
      brine: 10,
      jelly: 10,
      heartModule: 1,
    },
  ],
  health3: [
    "Heart Module III",
    UnlockRequirementNames.POD,
    {
      newbucks: 3000,
      pink: 30,
      honey: 20,
      brine: 30,
      sand: 10,
      heartModule: 1,
    },
  ],
  health4: [
    "Heart Module IV",
    UnlockRequirementNames.DOOR,
    { newbucks: 10000, prisma: 50, magma: 25, royal: 1, heartModule: 1 },
  ],
  regenerator1: [
    "Regenerator",
    UnlockRequirementNames.DOOR,
    {
      newbucks: 5000,
      twin: 25,
      prisma: 10,
      magma: 10,
      aqua: 10,
      regenModule: 1,
    },
  ],
  regenerator2: [
    "Regenerator",
    UnlockRequirementNames.NIGHT,
    {
      newbucks: 10000,
      sloomber: 50,
      hyper: 50,
      blackindigo: 10,
      royal: 1,
      regenModule: 1,
    },
  ],
  powerinjector1: [
    "Power Injector",
    UnlockRequirementNames.DOOR,
    {
      newbucks: 5000,
      sloomber: 25,
      prisma: 10,
      dream: 10,
      blackindigo: 10,
      injectorModule: 1,
    },
  ],
  powerinjector2: [
    "Power Injector",
    UnlockRequirementNames.NIGHT,
    {
      newbucks: 10000,
      hyper: 50,
      twin: 50,
      aqua: 10,
      royal: 1,
      injectorModule: 1,
    },
  ],
  power1: ["Power Module I", UnlockRequirementNames.START, { newbucks: 450, cotton: 10 }],
  power2: [
    "Power Module II",
    UnlockRequirementNames.POD,
    {
      newbucks: 900,
      cotton: 20,
      batty: 10,
      primordy: 10,
      jelly: 10,
      powerChip: 1,
    },
  ],
  power3: [
    "Power Module III",
    UnlockRequirementNames.POD,
    {
      newbucks: 3000,
      cotton: 30,
      batty: 20,
      wildHoney: 10,
      primordy: 30,
      powerChip: 1,
    },
  ],
  power4: [
    "Power Module IV",
    UnlockRequirementNames.POD,
    {
      newbucks: 10000,
      cotton: 50,
      saber: 30,
      fossil: 30,
      sunsap: 1,
      powerChip: 1,
    },
  ],
  power5: [
    "Power Module V",
    UnlockRequirementNames.DOOR,
    {
      newbucks: 15000,
      prisma: 50,
      twin: 40,
      petal: 25,
      royal: 1,
      powerChip: 1,
    },
  ],
  dash1: ["Dash Module I", UnlockRequirementNames.START, { newbucks: 450, boom: 10 }],
  dash2: [
    "Dash Module II",
    UnlockRequirementNames.POD,
    {
      newbucks: 1500,
      boom: 20,
      flutter: 10,
      wildHoney: 10,
      lava: 10,
      dashBootModule: 1,
    },
  ],
  jetpack1: [
    "Jetpack I",
    UnlockRequirementNames.START,
    { newbucks: 450, phosphor: 10, radiant: 10 },
  ],
  jetpack2: [
    "Jetpack II",
    UnlockRequirementNames.POD,
    {
      newbucks: 1500,
      phosphor: 20,
      batty: 10,
      radiant: 20,
      wildHoney: 10,
      jetpackDrive: 1,
    },
  ],
  tankBooster1: ["Tank Booster I", UnlockRequirementNames.START, { newbucks: 450, tabby: 10 }],
  tankBooster2: [
    "Tank Booster II",
    UnlockRequirementNames.POD,
    {
      newbucks: 900,
      tabby: 20,
      angler: 10,
      radiant: 10,
      jelly: 10,
      storageCell: 1,
    },
  ],
  tankBooster3: [
    "Tank Booster III",
    UnlockRequirementNames.POD,
    {
      newbucks: 3000,
      tabby: 30,
      angler: 20,
      radiant: 30,
      lava: 10,
      storageCell: 1,
    },
  ],
  tankBooster4: [
    "Tank Booster IV",
    UnlockRequirementNames.POD,
    {
      newbucks: 10000,
      tabby: 40,
      saber: 30,
      snowflake: 30,
      sunsap: 1,
      storageCell: 1,
    },
  ],
  tankBooster5: [
    "Tank Booster V",
    UnlockRequirementNames.DOOR,
    {
      newbucks: 15000,
      sloomber: 50,
      prisma: 20,
      blackindigo: 20,
      royal: 1,
      storageCell: 1,
    },
  ],
  tankBooster6: [
    "Tank Booster VI",
    UnlockRequirementNames.DOOR,
    {
      newbucks: 20000,
      twin: 60,
      prisma: 25,
      dream: 20,
      sunsap: 3,
      storageCell: 1,
    },
  ],
  tankBooster7: [
    "Tank Booster VII",
    UnlockRequirementNames.NIGHT,
    {
      newbucks: 30000,
      hyper: 70,
      sloomber: 50,
      magma: 20,
      royal: 3,
      storageCell: 1,
    },
  ],
  tankBooster8: [
    "Tank Booster VIII",
    UnlockRequirementNames.NIGHT,
    {
      newbucks: 50000,
      ringtail: 80,
      twin: 50,
      aqua: 30,
      royal: 3,
      storageCell: 1,
    },
  ],
  extraTank1: ["Extra Tank I", UnlockRequirementNames.START, { newbucks: 1500, rock: 10, sand: 10 }],
  extraTank2: [
    "Extra Tank II",
    UnlockRequirementNames.POD,
    {
      newbucks: 3000,
      rock: 40,
      ringtail: 20,
      sand: 20,
      diamond: 2,
      storageUnit: 1,
    },
  ],
  waterTank1: ["Water Tank", UnlockRequirementNames.START, { newbucks: 450, brine: 10 }],
  pulseWave1: [
    "Pulse Wave",
    UnlockRequirementNames.START,
    { newbucks: 450, flutter: 10, jelly: 10, wildHoney: 5 },
  ],
  tankGuard1: [
    "Tank Guard I",
    UnlockRequirementNames.POD,
    {
      newbucks: 3000,
      crystal: 20,
      hunter: 10,
      wax: 10,
      lava: 10,
      tankLiner: 1,
    },
  ],
  tankGuard2: [
    "Tank Guard II",
    UnlockRequirementNames.POD,
    {
      newbucks: 6000,
      crystal: 30,
      hunter: 20,
      wax: 10,
      diamond: 1,
      tankLiner: 1,
    },
  ],
  tankGuard3: [
    "Tank Guard III",
    UnlockRequirementNames.POD,
    {
      newbucks: 12000,
      crystal: 40,
      hunter: 30,
      wax: 20,
      diamond: 2,
      tankLiner: 1,
    },
  ],
  droneKey1: [
    "Drone Archive Key",
    UnlockRequirementNames.MOCHI,
    { newbucks: 450, hunter: 20, fire: 20, jelly: 20, lava: 10, droneKey: 1 },
  ],
  goldenSureshot1: [
    "Golden Sureshot I",
    UnlockRequirementNames.POD,
    {
      newbucks: 1500,
      fire: 20,
      gold: 1,
      snowflake: 10,
      sunsap: 1,
      goldenSureshotModule: 1,
    },
  ],
  goldenSureshot2: [
    "Golden Sureshot II",
    UnlockRequirementNames.POD,
    {
      newbucks: 3000,
      saber: 30,
      gold: 2,
      snowflake: 20,
      sunsap: 2,
      goldenSureshotModule: 1,
    },
  ],
  goldenSureshot3: [
    "Golden Sureshot III",
    UnlockRequirementNames.POD,
    {
      newbucks: 6000,
      saber: 40,
      gold: 3,
      snowflake: 30,
      sunsap: 3,
      goldenSureshotModule: 1,
    },
  ],
  shadowSureshot1: [
    "Shadow Sureshot",
    UnlockRequirementNames.NIGHT,
    {
      sloomber: 20,
      twin: 20,
      hyper: 20,
      diamond: 1,
      shadowSureshotModule: 1,
    },
  ]
};

export const upgradeDescriptions: { [key in UpgradeWithTier]: string } = {
  harvester1:
    "Adds a resonator to the vac's suction mechanism that shakes loose science resources from nodes in the environment.",
  health1:
    "Syncs with your body's own vital processes to enhance life systems, boosting health to 150. Plus, it's sparkly.",
  health2:
    "A more advanced and even sparklier heart module that boosts health to 200.",
  health3: "The ultimate in heart module technology, boosting health to 250.",
  health4:
    "An expermiental life systems amplification device that boosts health to 300.",
  power1:
    "Augments your vackpack with an almost-certainly-safe micro fusion generator that boosts energy to 150.",
  power2:
    "This enhanced micro generator boosts energy to 200; but more importantly, is even smaller.",
  power3:
    "The latest micro generator boosts energy to 250; but not high enough to give up coffee entirely.",
  power4:
    "An impossibly advanced micro generator boosts personal energy to 275. There's no way this is still legal.",
  power5:
    "An advanced micro generator that blows past all previously known limits of personal energy, pushing it to 300.",
  regenerator1:
    "A small software update that improves energy routing trough the vac's conduits, increasing the rate of energy regeneration by 15%.",
  regenerator2:
    "Integrates a significantly more advanced routing algorythm to the energy conduit, increasing the rate of energy regeneration by 30%.",
  powerinjector1:
    "Streamlines the vac's power transfer, reducing the delay before energy regenerates by 25%.",
  powerinjector2:
    "Add a self-cleaning function to the power injector that cleans up all the gunk you'd rather not think about, reducting the delay before energy regenerates by 66%.",
  dash1:
    "These highly advanced and, frankly, fashion-forward boots reduce the energy consumption of sprinting.",
  dash2:
    "Experimental footwear capable of reducing the cost of sprinting even further. It makes you think walking is for suckers.",
  jetpack1: "Keep your head in the clouds with this amazing, personal jetpack!",
  jetpack2:
    "Enhanced jetpack thrusters that consume 20% less energy but produce double the fun.",
  tankBooster1:
    "Improved nano-storage cell technology allows your vac tanks to hold 30 units of whatever you can vac up.",
  tankBooster2:
    "These enhanced nano-storage cells throw caution to the wind and allow you to cram 40 units into each vac tank.",
  tankBooster3:
    "More is better, but in this case, it's best. These premium nano-storage cells can hold 50 units in each vac tank.",
  tankBooster4:
    "The secret best vac tank available using experimental nano-storage technology that's absolutely probably maybe legal.",
  tankBooster5:
    "Pushing the limits of slime science, the nano-storage technology increases vac tank capacity to 70.",
  tankBooster6:
    "Thanks to the latest scientific breaktroughs, the nano-storage technology of this booster allows you to hold 80 units per vac tank.",
  tankBooster7:
    "New Scientific developments, which definitely passed peer review, allow for a nano-storage upgrade that lets you hold 90 units per vac tank!",
  tankBooster8:
    "Slime Science does it again! The improved (and totally safe) nano-storage technology in this booster enables you to hold a whopping 100 units per vac tank!",
  extraTank1: "Adds an extra general-purpose vac tank.",
  extraTank2: "Adds yet another extra general-purpose vac tank.",
  waterTank1:
    "Adds a specialized vac tank that allows you to store fresh water.",
  pulseWave1:
    "Adds a pulse wave emitter feature to your vacpack that pushes away slimes whenever you need some personal space.",
  tankGuard1:
    "Salvages 20% of your vac tank's contents upon accidental encounters with the slime sea or following other forms of health loss.",
  tankGuard2:
    "Salvages 40% of your vac tank's contents upon accidental encounters with the slime sea or following other forms of health loss.",
  tankGuard3:
    "Salvages 60% of your vac's tank's contents upon accidental encounters with the slime sea or following other forms of health loss.",
  droneKey1:
    "Utilizes Miles tech decryption algorithms to unlock access to archived logs on Research Drones.",
  goldenSureshot1:
    "A special vacpack upgrade that hones in on gold slime weakpoints (their secret bellybutton?) and doubles the amount of gold plorts they produce when hit.",
  goldenSureshot2:
    "Upgrades the Sureshot's focusing lens, reducing the glare from those shiny, bright gold slimes. This triples the amount of plorts they produce when hit.",
  goldenSureshot3:
    "The ultimate in Sureshot technology, this upgrade quadruples the amount of gold plorts produced when hitting gold slimes.",
  shadowSureshot1:
    "A special vacpack upgrade that hones in on shadow slime weakpoints (their shadiest areas!) and doubles the amount of shadow plorts they produce when hit.",
};

export const upgradeEffects: {
  [key in UpgradeWithTier]: [[string, string], [string, string]];
} = {
  harvester1: [
    ["misc/none", ""],
    ["upgrades/harvester", "+ Resource Harvester"],
  ],
  health1: [
    ["misc/health", "100 Health"],
    ["misc/health", "150 Health (+50)"],
  ],
  health2: [
    ["misc/health", "150 Health"],
    ["misc/health", "200 Health (+50)"],
  ],
  health3: [
    ["misc/health", "200 Health"],
    ["misc/health", "250 Health (+50)"],
  ],
  health4: [
    ["misc/health", "250 Health"],
    ["misc/health", "300 Health (+50)"],
  ],
  power1: [
    ["misc/energy", "100 Energy"],
    ["misc/energy", "150 Energy (+50)"],
  ],
  power2: [
    ["misc/energy", "150 Energy"],
    ["misc/energy", "200 Energy (+50)"],
  ],
  power3: [
    ["misc/energy", "200 Energy"],
    ["misc/energy", "250 Energy (+50)"],
  ],
  power4: [
    ["misc/energy", "250 Energy"],
    ["misc/energy", "275 Energy (+25)"],
  ],
  power5: [
    ["misc/energy", "275 Energy"],
    ["misc/energy", "300 Energy (+25)"],
  ],
  dash1: [
    ["misc/none", ""],
    ["upgrades/dash", "- Sprint Energy Consumption"],
  ],
  dash2: [
    ["misc/none", ""],
    ["upgrades/dash", "- Sprint Energy Consumption"],
  ],
  jetpack1: [
    ["misc/none", ""],
    ["upgrades/jetpack", "Jetpack"],
  ],
  jetpack2: [
    ["upgrades/jetpack", "Jetpack"],
    ["upgrades/jetpack", "- Jetpack Energy Consumption"],
  ],
  tankBooster1: [
    ["upgrades/tankBooster", "20 Units Capacity"],
    ["upgrades/tankBooster", "30 Units Capacity (+10)"],
  ],
  tankBooster2: [
    ["upgrades/tankBooster", "30 Units Capacity"],
    ["upgrades/tankBooster", "40 Units Capacity (+10)"],
  ],
  tankBooster3: [
    ["upgrades/tankBooster", "40 Units Capacity"],
    ["upgrades/tankBooster", "50 Units Capacity (+10)"],
  ],
  tankBooster4: [
    ["upgrades/tankBooster", "50 Units Capacity"],
    ["upgrades/tankBooster", "60 Units Capacity (+10)"],
  ],
  tankBooster5: [
    ["upgrades/tankBooster", "60 Units Capacity"],
    ["upgrades/tankBooster", "70 Units Capacity (+10)"],
  ],
  tankBooster6: [
    ["upgrades/tankBooster", "70 Units Capacity"],
    ["upgrades/tankBooster", "80 Units Capacity (+10)"],
  ],
  tankBooster7: [
    ["upgrades/tankBooster", "80 Units Capacity"],
    ["upgrades/tankBooster", "90 Units Capacity (+10)"],
  ],
  tankBooster8: [
    ["upgrades/tankBooster", "90 Units Capacity"],
    ["upgrades/tankBooster", "100 Units Capacity (+10)"],
  ],
  extraTank1: [
    ["upgrades/extraTank", "4 Tanks"],
    ["upgrades/extraTank", "5 Tanks (+1)"],
  ],
  extraTank2: [
    ["upgrades/extraTank", "5 Tanks"],
    ["upgrades/extraTank", "6 Tanks (+1)"],
  ],
  waterTank1: [
    ["misc/none", ""],
    ["upgrades/waterTank", "+ Water Tank"],
  ],
  pulseWave1: [
    ["misc/none", ""],
    ["upgrades/pulseWave", "+ Pulse Wave"],
  ],
  tankGuard1: [
    ["misc/death", "Full Loss on Death"],
    ["upgrades/tankGuard", "30% Salvage on Death"],
  ],
  tankGuard2: [
    ["upgrades/tankGuard", "30% Salvage on Death"],
    ["upgrades/tankGuard", "40% Salvage on Death"],
  ],
  tankGuard3: [
    ["upgrades/tankGuard", "40% Salvage on Death"],
    ["upgrades/tankGuard", "60% Salvage on Death"],
  ],
  droneKey1: [
    ["misc/none", ""],
    ["upgrades/droneKey", "+ Drone Archive Key"],
  ],
  goldenSureshot1: [
    ["plorts/gold", "1 Plorts per Gold Slime Fed"],
    ["plorts/gold", "2 Plorts per Gold Slime Fed"],
  ],
  goldenSureshot2: [
    ["plorts/gold", "2 Plorts per Gold Slime Fed"],
    ["plorts/gold", "3 Plorts per Gold Slime Fed"],
  ],
  goldenSureshot3: [
    ["plorts/gold", "3 Plorts per Gold Slime Fed"],
    ["plorts/gold", "4 Plorts per Gold Slime Fed"],
  ],
  shadowSureshot1: [
    ["plorts/shadow", "1 Plorts per Shadow Slime Hit"],
    ["plorts/shadow", "2 Plorts per Shadow Slime Hit"],
  ],
  regenerator1: [
    ["misc/none", ""],
    ["upgrades/regenerator", "+15 % Energy Regeneration Rate"],
  ],
  regenerator2: [
    ["upgrades/regenerator", "+15 % Energy Regeneration Rate"],
    ["upgrades/regenerator", "+30 % Energy Regeneration Rate"],
  ],
  powerinjector1: [
    ["misc/none", ""],
    ["upgrades/powerinjector", "-33% Energy Regeneration Delay"],
  ],
  powerinjector2: [
    ["upgrades/powerinjector", "-33% Energy Regeneration Delay"],
    ["upgrades/powerinjector", "-66% Energy Regeneration Delay"],
  ],
};

// Types utilitaires pour les upgrades avec tiers
export type UpgradeBase = keyof typeof upgradePacks;
export type UpgradeTier<T extends UpgradeBase> = T extends keyof typeof upgradePacks 
  ? 1 | 2 | 3 | 4 | 5 | 6  // Maximum de tiers possibles
  : never;

// Fonction utilitaire pour construire une clé d'upgrade
export function getUpgradeKey(base: string | UpgradeBase, tier: number): UpgradeWithTier {
  return `${base}${tier}` as UpgradeWithTier;
}

// Exports de compatibilité
export const upgradeNames = Object.values(Upgrade);
export const upgradeWithTierNames = Object.values(UpgradeWithTier);