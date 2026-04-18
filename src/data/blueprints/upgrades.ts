import { Recipe, RecipeElement, Unlock } from "./blueprints";

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
  [key in UpgradeWithTier]: [string, Unlock, Recipe];
} = {
  harvester1: [
    "Resource Harvester",
    Unlock.START,
    new Map([
      [RecipeElement.NEWBUCKS, 450],
      [RecipeElement.COTTON, 10],
    ]),
  ],

  health1: [
    "Heart Module I",
    Unlock.START,
    new Map([
      [RecipeElement.NEWBUCKS, 450],
      [RecipeElement.PINK, 10],
    ]),
  ],
  health2: [
    "Heart Module II",
    Unlock.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 900],
      [RecipeElement.PINK, 20],
      [RecipeElement.HONEY, 10],
      [RecipeElement.BRINE, 10],
      [RecipeElement.JELLY, 10],
      [RecipeElement.HEARTMODULE, 1],
    ]),
  ],
  health3: [
    "Heart Module III",
    Unlock.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 3000],
      [RecipeElement.PINK, 30],
      [RecipeElement.HONEY, 20],
      [RecipeElement.BRINE, 30],
      [RecipeElement.SAND, 10],
      [RecipeElement.HEARTMODULE, 1],
    ]),
  ],
  health4: [
    "Heart Module IV",
    Unlock.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 10000],
      [RecipeElement.PRISMA, 50],
      [RecipeElement.MAGMA, 25],
      [RecipeElement.ROYAL, 1],
      [RecipeElement.HEARTMODULE, 1],
    ]),
  ],
  regenerator1: [
    "Regenerator",
    Unlock.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 5000],
      [RecipeElement.TWIN, 25],
      [RecipeElement.PRISMA, 10],
      [RecipeElement.MAGMA, 10],
      [RecipeElement.AQUA, 10],
      [RecipeElement.REGENMODULE, 1],
    ]),
  ],
  regenerator2: [
    "Regenerator",
    Unlock.NIGHT,
    new Map([
      [RecipeElement.NEWBUCKS, 10000],
      [RecipeElement.SLOOMBER, 50],
      [RecipeElement.HYPER, 50],
      [RecipeElement.BLACKINDIGO, 10],
      [RecipeElement.ROYAL, 1],
      [RecipeElement.REGENMODULE, 1],
    ]),
  ],
  powerinjector1: [
    "Power Injector",
    Unlock.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 5000],
      [RecipeElement.SLOOMBER, 25],
      [RecipeElement.PRISMA, 10],
      [RecipeElement.DREAM, 10],
      [RecipeElement.BLACKINDIGO, 10],
      [RecipeElement.INJECTORMODULE, 1],
    ]),
  ],
  powerinjector2: [
    "Power Injector",
    Unlock.NIGHT,
    new Map([
      [RecipeElement.NEWBUCKS, 10000],
      [RecipeElement.HYPER, 50],
      [RecipeElement.TWIN, 50],
      [RecipeElement.AQUA, 10],
      [RecipeElement.ROYAL, 1],
      [RecipeElement.INJECTORMODULE, 1],
    ]),
  ],
  power1: [
    "Power Module I",
    Unlock.START,
    new Map([
      [RecipeElement.NEWBUCKS, 450],
      [RecipeElement.COTTON, 10],
    ]),
  ],
  power2: [
    "Power Module II",
    Unlock.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 900],
      [RecipeElement.COTTON, 20],
      [RecipeElement.BATTY, 10],
      [RecipeElement.PRIMORDY, 10],
      [RecipeElement.JELLY, 10],
      [RecipeElement.POWERCHIP, 1],
    ]),
  ],
  power3: [
    "Power Module III",
    Unlock.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 3000],
      [RecipeElement.COTTON, 30],
      [RecipeElement.BATTY, 20],
      [RecipeElement.WILDHONEY, 10],
      [RecipeElement.PRIMORDY, 30],
      [RecipeElement.POWERCHIP, 1],
    ]),
  ],
  power4: [
    "Power Module IV",
    Unlock.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 10000],
      [RecipeElement.COTTON, 50],
      [RecipeElement.SABER, 30],
      [RecipeElement.FOSSIL, 30],
      [RecipeElement.SUNSAP, 1],
      [RecipeElement.POWERCHIP, 1],
    ]),
  ],
  power5: [
    "Power Module V",
    Unlock.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 15000],
      [RecipeElement.PRISMA, 50],
      [RecipeElement.TWIN, 40],
      [RecipeElement.PETAL, 25],
      [RecipeElement.ROYAL, 1],
      [RecipeElement.POWERCHIP, 1],
    ]),
  ],
  dash1: [
    "Dash Module I",
    Unlock.START,
    new Map([
      [RecipeElement.NEWBUCKS, 450],
      [RecipeElement.BOOM, 10],
    ]),
  ],
  dash2: [
    "Dash Module II",
    Unlock.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 1500],
      [RecipeElement.BOOM, 20],
      [RecipeElement.FLUTTER, 10],
      [RecipeElement.WILDHONEY, 10],
      [RecipeElement.LAVA, 10],
      [RecipeElement.DASHBOOTMODULE, 1],
    ]),
  ],
  jetpack1: [
    "Jetpack I",
    Unlock.START,
    new Map([
      [RecipeElement.NEWBUCKS, 450],
      [RecipeElement.PHOSPHOR, 10],
      [RecipeElement.RADIANT, 10],
    ]),
  ],
  jetpack2: [
    "Jetpack II",
    Unlock.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 1500],
      [RecipeElement.PHOSPHOR, 20],
      [RecipeElement.BATTY, 10],
      [RecipeElement.RADIANT, 20],
      [RecipeElement.WILDHONEY, 10],
      [RecipeElement.JETPACKDRIVE, 1],
    ]),
  ],
  tankBooster1: [
    "Tank Booster I",
    Unlock.START,
    new Map([
      [RecipeElement.NEWBUCKS, 450],
      [RecipeElement.TABBY, 10],
    ]),
  ],
  tankBooster2: [
    "Tank Booster II",
    Unlock.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 900],
      [RecipeElement.TABBY, 20],
      [RecipeElement.ANGLER, 10],
      [RecipeElement.RADIANT, 10],
      [RecipeElement.JELLY, 10],
      [RecipeElement.STORAGECELL, 1],
    ]),
  ],
  tankBooster3: [
    "Tank Booster III",
    Unlock.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 3000],
      [RecipeElement.TABBY, 30],
      [RecipeElement.ANGLER, 20],
      [RecipeElement.RADIANT, 30],
      [RecipeElement.LAVA, 10],
      [RecipeElement.STORAGECELL, 1],
    ]),
  ],
  tankBooster4: [
    "Tank Booster IV",
    Unlock.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 10000],
      [RecipeElement.TABBY, 40],
      [RecipeElement.SABER, 30],
      [RecipeElement.SNOWFLAKE, 30],
      [RecipeElement.SUNSAP, 1],
      [RecipeElement.STORAGECELL, 1],
    ]),
  ],
  tankBooster5: [
    "Tank Booster V",
    Unlock.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 15000],
      [RecipeElement.SLOOMBER, 50],
      [RecipeElement.PRISMA, 20],
      [RecipeElement.BLACKINDIGO, 20],
      [RecipeElement.ROYAL, 1],
      [RecipeElement.STORAGECELL, 1],
    ]),
  ],
  tankBooster6: [
    "Tank Booster VI",
    Unlock.DOOR,
    new Map([
      [RecipeElement.NEWBUCKS, 20000],
      [RecipeElement.TWIN, 60],
      [RecipeElement.PRISMA, 25],
      [RecipeElement.DREAM, 20],
      [RecipeElement.SUNSAP, 3],
      [RecipeElement.STORAGECELL, 1],
    ]),
  ],
  tankBooster7: [
    "Tank Booster VII",
    Unlock.NIGHT,
    new Map([
      [RecipeElement.NEWBUCKS, 30000],
      [RecipeElement.HYPER, 70],
      [RecipeElement.SLOOMBER, 50],
      [RecipeElement.MAGMA, 20],
      [RecipeElement.ROYAL, 3],
      [RecipeElement.STORAGECELL, 1],
    ]),
  ],
  tankBooster8: [
    "Tank Booster VIII",
    Unlock.NIGHT,
    new Map([
      [RecipeElement.NEWBUCKS, 50000],
      [RecipeElement.RINGTAIL, 80],
      [RecipeElement.TWIN, 50],
      [RecipeElement.AQUA, 30],
      [RecipeElement.ROYAL, 3],
      [RecipeElement.STORAGECELL, 1],
    ]),
  ],
  extraTank1: [
    "Extra Tank I",
    Unlock.START,
    new Map([
      [RecipeElement.NEWBUCKS, 1500],
      [RecipeElement.ROCK, 10],
      [RecipeElement.SAND, 10],
    ]),
  ],
  extraTank2: [
    "Extra Tank II",
    Unlock.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 3000],
      [RecipeElement.ROCK, 40],
      [RecipeElement.RINGTAIL, 20],
      [RecipeElement.SAND, 20],
      [RecipeElement.DIAMOND, 2],
      [RecipeElement.STORAGEUNIT, 1],
    ]),
  ],
  waterTank1: [
    "Water Tank",
    Unlock.START,
    new Map([
      [RecipeElement.NEWBUCKS, 450],
      [RecipeElement.BRINE, 10],
    ]),
  ],
  pulseWave1: [
    "Pulse Wave",
    Unlock.START,
    new Map([
      [RecipeElement.NEWBUCKS, 450],
      [RecipeElement.FLUTTER, 10],
      [RecipeElement.JELLY, 10],
      [RecipeElement.WILDHONEY, 5],
    ]),
  ],
  tankGuard1: [
    "Tank Guard I",
    Unlock.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 3000],
      [RecipeElement.CRYSTAL, 20],
      [RecipeElement.HUNTER, 10],
      [RecipeElement.WAX, 10],
      [RecipeElement.LAVA, 10],
      [RecipeElement.TANKLINER, 1],
    ]),
  ],
  tankGuard2: [
    "Tank Guard II",
    Unlock.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 6000],
      [RecipeElement.CRYSTAL, 30],
      [RecipeElement.HUNTER, 20],
      [RecipeElement.WAX, 10],
      [RecipeElement.DIAMOND, 1],
      [RecipeElement.TANKLINER, 1],
    ]),
  ],
  tankGuard3: [
    "Tank Guard III",
    Unlock.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 12000],
      [RecipeElement.CRYSTAL, 40],
      [RecipeElement.HUNTER, 30],
      [RecipeElement.WAX, 20],
      [RecipeElement.DIAMOND, 2],
      [RecipeElement.TANKLINER, 1],
    ]),
  ],
  droneKey1: [
    "Drone Archive Key",
    Unlock.MOCHI,
    new Map([
      [RecipeElement.NEWBUCKS, 450],
      [RecipeElement.HUNTER, 20],
      [RecipeElement.FIRE, 20],
      [RecipeElement.JELLY, 20],
      [RecipeElement.LAVA, 10],
      [RecipeElement.DRONEKEY, 1],
    ]),
  ],
  goldenSureshot1: [
    "Golden Sureshot I",
    Unlock.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 1500],
      [RecipeElement.FIRE, 20],
      [RecipeElement.SNOWFLAKE, 10],
      [RecipeElement.GOLD, 1],
      [RecipeElement.SUNSAP, 1],
      [RecipeElement.GOLDENSURESHOTMODULE, 1],
    ]),
  ],
  goldenSureshot2: [
    "Golden Sureshot II",
    Unlock.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 3000],
      [RecipeElement.SABER, 30],
      [RecipeElement.SNOWFLAKE, 20],
      [RecipeElement.GOLD, 2],
      [RecipeElement.SUNSAP, 2],
      [RecipeElement.GOLDENSURESHOTMODULE, 1],
    ]),
  ],
  goldenSureshot3: [
    "Golden Sureshot III",
    Unlock.POD,
    new Map([
      [RecipeElement.NEWBUCKS, 6000],
      [RecipeElement.SABER, 40],
      [RecipeElement.SNOWFLAKE, 30],
      [RecipeElement.GOLD, 3],
      [RecipeElement.SUNSAP, 3],
      [RecipeElement.GOLDENSURESHOTMODULE, 1],
    ]),
  ],
  shadowSureshot1: [
    "Shadow Sureshot",
    Unlock.NIGHT,
    new Map([
      [RecipeElement.SLOOMBER, 20],
      [RecipeElement.TWIN, 20],
      [RecipeElement.HYPER, 20],
      [RecipeElement.DIAMOND, 1],
      [RecipeElement.SHADOWSURESHOTMODULE, 1],
    ]),
  ],
};

export const upgradeDescriptions: { [key in UpgradeWithTier]: string } = {
  harvester1:
    "Adds a resonator to the vac's suction mechanism that shakes loose science resources from nodes in the environment.",
  health1:
    "Syncs with your body's own vital processes to enhance life systems, boosting health to 150. Plus, it's sparkly.",
  health2: "A more advanced and even sparklier heart module that boosts health to 200.",
  health3: "The ultimate in heart module technology, boosting health to 250.",
  health4: "An expermiental life systems amplification device that boosts health to 300.",
  power1: "Augments your vackpack with an almost-certainly-safe micro fusion generator that boosts energy to 150.",
  power2: "This enhanced micro generator boosts energy to 200; but more importantly, is even smaller.",
  power3: "The latest micro generator boosts energy to 250; but not high enough to give up coffee entirely.",
  power4: "An impossibly advanced micro generator boosts personal energy to 275. There's no way this is still legal.",
  power5:
    "An advanced micro generator that blows past all previously known limits of personal energy, pushing it to 300.",
  regenerator1:
    "A small software update that improves energy routing trough the vac's conduits, increasing the rate of energy regeneration by 15%.",
  regenerator2:
    "Integrates a significantly more advanced routing algorythm to the energy conduit, increasing the rate of energy regeneration by 30%.",
  powerinjector1: "Streamlines the vac's power transfer, reducing the delay before energy regenerates by 25%.",
  powerinjector2:
    "Add a self-cleaning function to the power injector that cleans up all the gunk you'd rather not think about, reducting the delay before energy regenerates by 66%.",
  dash1: "These highly advanced and, frankly, fashion-forward boots reduce the energy consumption of sprinting.",
  dash2:
    "Experimental footwear capable of reducing the cost of sprinting even further. It makes you think walking is for suckers.",
  jetpack1: "Keep your head in the clouds with this amazing, personal jetpack!",
  jetpack2: "Enhanced jetpack thrusters that consume 20% less energy but produce double the fun.",
  tankBooster1:
    "Improved nano-storage cell technology allows your vac tanks to hold 30 units of whatever you can vac up.",
  tankBooster2:
    "These enhanced nano-storage cells throw caution to the wind and allow you to cram 40 units into each vac tank.",
  tankBooster3:
    "More is better, but in this case, it's best. These premium nano-storage cells can hold 50 units in each vac tank.",
  tankBooster4:
    "The secret best vac tank available using experimental nano-storage technology that's absolutely probably maybe legal.",
  tankBooster5: "Pushing the limits of slime science, the nano-storage technology increases vac tank capacity to 70.",
  tankBooster6:
    "Thanks to the latest scientific breaktroughs, the nano-storage technology of this booster allows you to hold 80 units per vac tank.",
  tankBooster7:
    "New Scientific developments, which definitely passed peer review, allow for a nano-storage upgrade that lets you hold 90 units per vac tank!",
  tankBooster8:
    "Slime Science does it again! The improved (and totally safe) nano-storage technology in this booster enables you to hold a whopping 100 units per vac tank!",
  extraTank1: "Adds an extra general-purpose vac tank.",
  extraTank2: "Adds yet another extra general-purpose vac tank.",
  waterTank1: "Adds a specialized vac tank that allows you to store fresh water.",
  pulseWave1:
    "Adds a pulse wave emitter feature to your vacpack that pushes away slimes whenever you need some personal space.",
  tankGuard1:
    "Salvages 20% of your vac tank's contents upon accidental encounters with the slime sea or following other forms of health loss.",
  tankGuard2:
    "Salvages 40% of your vac tank's contents upon accidental encounters with the slime sea or following other forms of health loss.",
  tankGuard3:
    "Salvages 60% of your vac's tank's contents upon accidental encounters with the slime sea or following other forms of health loss.",
  droneKey1: "Utilizes Miles tech decryption algorithms to unlock access to archived logs on Research Drones.",
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
  [key in UpgradeWithTier]: [string, string];
} = {
  harvester1: ["upgrades/harvester", "+ Resource Harvester"],

  health1: ["misc/health", "150 Health (+50)"],

  health2: ["misc/health", "200 Health (+50)"],

  health3: ["misc/health", "250 Health (+50)"],

  health4: ["misc/health", "300 Health (+50)"],

  power1: ["misc/energy", "150 Energy (+50)"],

  power2: ["misc/energy", "200 Energy (+50)"],

  power3: ["misc/energy", "250 Energy (+50)"],

  power4: ["misc/energy", "275 Energy (+25)"],

  power5: ["misc/energy", "300 Energy (+25)"],

  dash1: ["upgrades/dash", "- Sprint Energy Consumption"],

  dash2: ["upgrades/dash", "- Sprint Energy Consumption"],

  jetpack1: ["upgrades/jetpack", "Jetpack"],

  jetpack2: ["upgrades/jetpack", "- Jetpack Energy Consumption"],

  tankBooster1: ["upgrades/tankBooster", "30 Units Capacity (+10)"],

  tankBooster2: ["upgrades/tankBooster", "40 Units Capacity (+10)"],

  tankBooster3: ["upgrades/tankBooster", "50 Units Capacity (+10)"],

  tankBooster4: ["upgrades/tankBooster", "60 Units Capacity (+10)"],

  tankBooster5: ["upgrades/tankBooster", "70 Units Capacity (+10)"],

  tankBooster6: ["upgrades/tankBooster", "80 Units Capacity (+10)"],

  tankBooster7: ["upgrades/tankBooster", "90 Units Capacity (+10)"],

  tankBooster8: ["upgrades/tankBooster", "100 Units Capacity (+10)"],

  extraTank1: ["upgrades/extraTank", "5 Tanks (+1)"],

  extraTank2: ["upgrades/extraTank", "6 Tanks (+1)"],

  waterTank1: ["upgrades/waterTank", "+ Water Tank"],

  pulseWave1: ["upgrades/pulseWave", "+ Pulse Wave"],

  tankGuard1: ["upgrades/tankGuard", "30% Salvage on Death"],

  tankGuard2: ["upgrades/tankGuard", "40% Salvage on Death"],

  tankGuard3: ["upgrades/tankGuard", "60% Salvage on Death"],

  droneKey1: ["upgrades/droneKey", "+ Drone Archive Key"],

  goldenSureshot1: ["plorts/gold", "2 Plorts per Gold Slime Fed"],

  goldenSureshot2: ["plorts/gold", "3 Plorts per Gold Slime Fed"],

  goldenSureshot3: ["plorts/gold", "4 Plorts per Gold Slime Fed"],

  shadowSureshot1: ["plorts/shadow", "2 Plorts per Shadow Slime Hit"],

  regenerator1: ["upgrades/regenerator", "+15 % Energy Regeneration Rate"],

  regenerator2: ["upgrades/regenerator", "+30 % Energy Regeneration Rate"],

  powerinjector1: ["upgrades/powerinjector", "-33% Energy Regeneration Delay"],

  powerinjector2: ["upgrades/powerinjector", "-66% Energy Regeneration Delay"],
};

export type UpgradeBase = keyof typeof upgradePacks;

export function getUpgradeKey(base: string | UpgradeBase, tier: number): UpgradeWithTier {
  return `${base}${tier}` as UpgradeWithTier;
}

export const upgradeNames = Object.values(Upgrade);
export const upgradeWithTierNames = Object.values(UpgradeWithTier);
