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
  CrystalBall = "crystal ball",
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

type ToyProps = {
  name: string;
  description: string;
  price: number;
};

const cTP = (name: string, description: string, price: number) => ({name, description, price});


export const toyList: { [key in Toy]: ToyProps } = {
  [Toy.Ball]: cTP(
    "Beach Ball",
    "Reduces agitation of nearby slimes, especially Pink Slimes who enjoy fun in the sun.",
    750,
  ),
  [Toy.Bomb]: cTP(
    "Bomb Ball",
    "Reduces agitation of nearby slimes, especially Boom Slimes who probably think this sort of thing is funny.",
    750,
  ),
  [Toy.Bouncy]: cTP(
    "Bouncy Ball",
    "Reduces agitation of nearby slimes, especially Cotton Slimes who see it as serious competition.",
    750,
  ),
  [Toy.Bread]: cTP(
    "Happy Plush Bread Loaf",
    "Reduces agitation of nearby slimes, especially Yolky Slimes who get so passionate about the perfect sandwich that giant aggs stay fresh longer!",
    1000,
  ),
  [Toy.Bee]: cTP(
    "Buzzy Bee",
    "Reduces agitation of nearby slimes, especially Honey Slimes who are sweet on the honeybees.",
    750,
  ),
  [Toy.Charcoal]: cTP(
    "Charcoal Brick",
    "Reduces agitation of nearby slimes, especially Fire Slimes who chill out so much that they sometimes produce an extra plort!",
    750,
  ),
  [Toy.CrystalBall]: cTP(
    "Crystal Ball",
    "Reduces agitation of nearby slimes, especially Crystal Slimes who can use it to see the future but will never tell.",
    750,
  ),
  [Toy.Gyro]: cTP(
    "Gyro Top",
    "Reduces agitation of nearby slimes, especially Dervish Slimes who didn't think spinning could be topped.",
    750,
  ),
  [Toy.Light]: cTP(
    "Night Light",
    "Reduces agitation of nearby slimes, especially Phosphor Slimes who are just as spooked by the dark as the rest of us.",
    750,
  ),
  [Toy.Rock]: cTP(
    "Big Rock",
    "Reduces agitation of nearby slimes, especially Rock Slimes who obviously don't understand toys.",
    750,
  ),
  [Toy.Rocket]: cTP(
    "Rocket Ship",
    "Reduces agitation of nearby slimes, especially Hyper Slimes who are already going so fast they might vibrate into space!",
    750,
  ),
  [Toy.Sheep]: cTP(
    "Stuffed Sheep",
    "Reduces agitation of nearby slimes, especially Hunter Slimes who enjoy practicing for the real thing.",
    2000,
  ),
  [Toy.Sol]: cTP(
    "Sol Mate",
    "Reduces agitation of nearby slimes, especially Tangle Slimes who love a good reference to photosynthesis.",
    750,
  ),
  [Toy.Spinner]: cTP(
    "Spinner Toy",
    "Reduces agitation of nearby slimes, especially Twin Slimes who also don't know which side is which!",
    750,
  ),
  [Toy.Stego]: cTP(
    "Stego Buddy",
    "Reduces agitation of nearby slimes, especially Saber Slimes who are the only slimes to have known stegos in-person.",
    750,
  ),
  [Toy.Chicken]: cTP(
    "Stuffed Chicken",
    "Reduces agitation of nearby slimes, especially Hunter Slimes who enjoy practicing for the real thing.",
    2000,
  ),
  [Toy.Moon]: cTP(
    "Full Moon Ball",
    "Reduces agitation of nearby slimes, especially Batty Slimes who see the night as their only true friend.",
    750,
  ),
  [Toy.Yarn]: cTP(
    "Yarn Ball",
    "Reduces agitation of nearby slimes, especially Tabby Slimes. Though, they still don't know how to knit anymore than other slimes",
    750,
  ),
  [Toy.Worm]: cTP(
    "Glowbug",
    "Reduces agitation of nearby slimes, especially Flutter Slimes who find it even more soothing than themselves.",
    750,
  ),
  [Toy.Puffer]: cTP(
    "Plushie Puffer Fish",
    "Reduces agitation of nearby slimes, especially Angler Slimes who don't mind prickly playmates.",
    750,
  ),
  [Toy.Duck]: cTP(
    "Rubber Ducky",
    "Reduces agitation of nearby slimes, especially Puddle Slimes who are less shy when a rubber ducky buddy is around.",
    750,
  ),
  [Toy.Trash]: cTP(
    "Trashcan",
    "Reduces agitation of nearby slimes, especially Ringtail Slimes who love to eat trash and do crimes.",
    750,
  ),
  [Toy.Fox]: cTP(
    "Glo Glo Foxifur",
    "Greatly reduces agitation of all nearby slimes. Perfect for slimes getting into mischief.\nNote: Steam-exclusive toy.",
    750,
  ),
  [Toy.Detector]: cTP(
    "Resource Detector",
    "Find unharvested resources in your area!\nJust walk around holding the Resource Detector Toy. It will lock onto the nearest resource in it's range and show tou the way to go. You can always reset it by dropping it, then picking it back up!",
    1000,
  )
};
