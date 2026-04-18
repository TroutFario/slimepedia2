export enum Toy {
  Ball = "ball",
  Bomb = "bomb",
  Bouncy = "bouncy",
  Moon = "moon",
  Worm = "worm",
  Puffer = "puffer",
  Duck = "duck",
  Trash = "trash",
  Yarn = "yarn",
  Rock = "rock",
  Light = "light",
  Bee = "bee",
  Crystalball = "crystalball",
  Gyro = "gyro",
  Sol = "sol",
  Charcoal = "charcoal",
  Stego = "stego",
  Rocket = "rocket",
  Sheep = "sheep",
  Spinner = "spinner",
  Bread = "bread",
  Chicken = "chicken",
  Detector = "detector",
  Fox = "fox",
}

export const toyList: { [key in Toy]: [string, string, number] } = {
  [Toy.Ball]: [
    "Beach Ball",
    "Reduces agitation of nearby slimes, especially Pink Slimes who enjoy fun in the sun.",
    750,
  ],
  [Toy.Bomb]: [
    "Bomb Ball",
    "Reduces agitation of nearby slimes, especially Boom Slimes who probably think this sort of thing is funny.",
    750,
  ],
  [Toy.Bouncy]: [
    "Bouncy Ball",
    "Reduces agitation of nearby slimes, especially Cotton Slimes who see it as serious competition.",
    750,
  ],
  [Toy.Bread]: [
    "Happy Plush Bread Loaf",
    "Reduces agitation of nearby slimes, especially Yolky Slimes who get so passionate about the perfect sandwich that giant aggs stay fresh longer!",
    1000,
  ],
  [Toy.Bee]: [
    "Buzzy Bee",
    "Reduces agitation of nearby slimes, especially Honey Slimes who are sweet on the honeybees.",
    750,
  ],
  [Toy.Charcoal]: [
    "Charcoal Brick",
    "Reduces agitation of nearby slimes, especially Fire Slimes who chill out so much that they sometimes produce an extra plort!",
    750,
  ],
  [Toy.Crystalball]: [
    "Crystal Ball",
    "Reduces agitation of nearby slimes, especially Crystal Slimes who can use it to see the future but will never tell.",
    750,
  ],
  [Toy.Gyro]: [
    "Gyro Top",
    "Reduces agitation of nearby slimes, especially Dervish Slimes who didn't think spinning could be topped.",
    750,
  ],
  [Toy.Light]: [
    "Night Light",
    "Reduces agitation of nearby slimes, especially Phosphor Slimes who are just as spooked by the dark as the rest of us.",
    750,
  ],
  [Toy.Rock]: [
    "Big Rock",
    "Reduces agitation of nearby slimes, especially Rock Slimes who obviously don't understand toys.",
    750,
  ],
  [Toy.Rocket]: [
    "Rocket Ship",
    "Reduces agitation of nearby slimes, especially Hyper Slimes who are already going so fast they might vibrate into space!",
    750,
  ],
  [Toy.Sheep]: [
    "Stuffed Sheep",
    "Reduces agitation of nearby slimes, especially Hunter Slimes who enjoy practicing for the real thing.",
    2000,
  ],
  [Toy.Sol]: [
    "Sol Mate",
    "Reduces agitation of nearby slimes, especially Tangle Slimes who love a good reference to photosynthesis.",
    750,
  ],
  [Toy.Spinner]: [
    "Spinner Toy",
    "Reduces agitation of nearby slimes, especially Twin Slimes who also don't know which side is which!",
    750,
  ],
  [Toy.Stego]: [
    "Stego Buddy",
    "Reduces agitation of nearby slimes, especially Saber Slimes who are the only slimes to have known stegos in-person.",
    750,
  ],
  [Toy.Chicken]: [
    "Stuffed Chicken",
    "Reduces agitation of nearby slimes, especially Hunter Slimes who enjoy practicing for the real thing.",
    2000,
  ],
  [Toy.Moon]: [
    "Full Moon Ball",
    "Reduces agitation of nearby slimes, especially Batty Slimes who see the night as their only true friend.",
    750,
  ],
  [Toy.Yarn]: [
    "Yarn Ball",
    "Reduces agitation of nearby slimes, especially Tabby Slimes. Though, they still don't know how to knit anymore than other slimes",
    750,
  ],
  [Toy.Worm]: [
    "Glowbug",
    "Reduces agitation of nearby slimes, especially Flutter Slimes who find it even more soothing than themselves.",
    750,
  ],
  [Toy.Puffer]: [
    "Plushie Puffer Fish",
    "Reduces agitation of nearby slimes, especially Angler Slimes who don't mind prickly playmates.",
    750,
  ],
  [Toy.Duck]: [
    "Rubber Ducky",
    "Reduces agitation of nearby slimes, especially Puddle Slimes who are less shy when a rubber ducky buddy is around.",
    750,
  ],
  [Toy.Trash]: [
    "Trashcan",
    "Reduces agitation of nearby slimes, especially Ringtail Slimes who love to eat trash and do crimes.",
    750,
  ],
  [Toy.Fox]: [
    "Glo Glo Foxifur",
    "Greatly reduces agitation of all nearby slimes. Perfect for slimes getting into mischief.\nNote: Steam-exclusive toy.",
    750,
  ],
  [Toy.Detector]: [
    "Resource Detector",
    "Find unharvested resources in your area!\nJust walk around holding the Resource Detector Toy. It will lock onto the nearest resource in it's range and show tou the way to go. You can always reset it by dropping it, then picking it back up!",
    1000,
  ]
};
