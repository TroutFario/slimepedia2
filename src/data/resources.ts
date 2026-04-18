import { MixedRegion } from "../components/Biomes";
import { Ranch, Region, Resource, Weather } from "./enums";

export { Ranch, Region, Resource, Weather } from "./enums";

export const resourceList: { [key in Resource]: [string, string, MixedRegion[]] } = {
  [Resource.Primordy]: ["Primordy Oil", "This stuff is pre-pre-prehistoric.", [Region.Valley]],
  [Resource.Brine]: ["Deep Brine", "Salt of the earth kind of stuff.", [Ranch.Conservatory, Region.Fields]],
  [Resource.Sand]: [
    "Silky Sand",
    "The finest, smoothest sand you'll ever see. Rubbish for sand castles.",
    [Region.Strand, Region.Valley],
  ],
  [Resource.Lava]: ["Lava Dust", "A survey on the state of this matter answered 'undecided'.", [Region.Valley]],
  [Resource.Wax]: [
    "Buzz Wax",
    "Can be used to make a great candle if you enjoy the smell of bee abdominal glands.",
    [Region.Strand, Region.Valley],
  ],
  [Resource.Honey]: [
    "Wild Honey",
    "Tastes great in tea or in shameful handfuls when no one is looking.",
    [Region.Strand],
  ],
  [Resource.Jelly]: [
    "Jellystone",
    "It's both solid and squishy at the same time.",
    [Ranch.Conservatory, Region.Fields],
  ],
  [Resource.Radiant]: [
    "Radiant Ore",
    "The awesome power of a rainbow and the sleek aesthetic of a lump of mineral.",
    [Region.Strand, Region.Valley],
  ],
  [Resource.Diamond]: [
    "Strange Diamond",
    "Very strange, but even more valuable.",
    [Region.Fields, Region.Strand, Region.Valley, Region.Bluffs, Region.Labyrinth],
  ],
  [Resource.Fossil]: ["Slime Fossil", "If history could smile, it would look like this.", [Region.Bluffs]],
  [Resource.Snowflake]: ["Perfect Snowflake", "They made all other snowflakes feel jealous.", [Region.Bluffs]],
  [Resource.Sunsap]: ["Sun Sap", "So beautiful that staring at it too long will hurt your eyes.", [Region.Bluffs]],
  [Resource.Mote]: ["Lightning Mote", "A scintillating speck of storm.", [Weather.Lightning]],
  [Resource.Glass]: ["Storm Glass", "When the sky welds the earth.", [Weather.Lightning]],
  [Resource.Drift]: ["Drift Crystal", "Drifting away on the wind.", [Weather.Wind]],
  [Resource.Magma]: ["Magma Comb", "A new level of spicy honey.", [Region.Labyrinth]],
  [Resource.Aqua]: ["Aqua Glass", "A different kind of hard water.", [Region.Labyrinth]],
  [Resource.Dream]: ["Dream Bubble", "Dream a little dream.", [Region.Labyrinth]],
  [Resource.Petal]: ["Tin Petal", "Nature is metal.", [Region.Labyrinth]],
  [Resource.Indigo]: ["Black Indigonium", "Dark as midnight.", [Region.Labyrinth]],
  [Resource.Royal]: [
    "Royal Jelly",
    "The king of all jellies... that is, until you meet the queen.",
    [Region.Labyrinth],
  ],
  [Resource.Snowball]: ["Snowball", "Slime-approved way to have fun and chill out.", [Region.Bluffs]],
  [Resource.UnstableResources]: [
    "Unstable Resources",
    "Unnatural objects with a slippery grasp on reality.",
    [Region.Labyrinth],
  ],
  [Resource.Prisma]: ["Radiant Plort", "Prismatic plorts of possibilities with a purpose.", [Region.Labyrinth]],
  [Resource.Sprinkles]: ["Sprinkles", "Sweet to have, but not for eating!", [Ranch.Sanctuary]]
};

export const resourcePedia: { [key in Resource]: string } = {
  [Resource.Primordy]:
    "Found deep below the surface of the Rainbow Island's quarries and magma fields, primordy oil is an ancient substance containing a wide array of organic compounds, making it perfect as a base for many Slime Science creations.",
  [Resource.Brine]:
    "Not safe for drinking, deep brine is thought to be water from the Slime Sea that has been filtered by the subterranean coral below Rainbow Island. It is significantly denser than fresh water and loaded with salt.",
  [Resource.Sand]:
    "Silky Sand is what happens when the pressure of boring, regular sand, or also boring, regular rocks presses down on sand for centuries, resulting in a sand so smooth and pure it almost feels like water. These qualities make it very useful in gadget fabrication.",
  [Resource.Lava]:
    "Neither a solid or a liquid, lava dust seems to be something in between, having the characteristics of both. It is believed to be a mixture of magma and slime, though this has never been proven. And despite its name, lava dust is only warm to the touch.",
  [Resource.Wax]:
    "Just like bees on Earth, bees on the Far, Far Range produce a waxy substance that they use to form their hives. Buzz wax is still malleable deposits of unused wax found in apiaries. It has many practical uses ranging from building materials to medicines. You can also chew it as the worst gum in the world.",
  [Resource.Honey]:
    "All the rich pollens and sweet nectars found in the diverse biomes of the Far, Far Range combine in a beautiful alchemy to form some of the most delicious honey in the galaxy.\nWild honey is a staple of rancher life; a dollop of it makes just about any food taste better, and it provides a natural boost of energy to get through a tough day of wrangling slimes.",
  [Resource.Jelly]:
    "Jellystone is a semi-hardened mixture of minerals and slime, possibly resulting from plorts sinking back to into the earth below. Because of its solid texture, it's a favorite stone for sculptors.",
  [Resource.Radiant]:
    "Of all of Rainbow Island's many oddities, ore ore may be the most remarkable. Under a laser thermometer, its temperature reads over 100 degrees celsius, but it is cool to the touch and becomes an icy liquid when melted.\nThe mechanics behind its shifting array of pastel colors is easily understood once observed under a microscope: it's made up of infinitesimal deposits of pure rainbow.\nThen there's the way it gently vibrates, humming, as if radiating some strange cosmic energy. Spooky.",
  [Resource.Diamond]:
    "Even in the dark, these diamonds seem to shine as if light is passing through them. Strange diamonds are highly valued for their use in a variety of warp tech processes. Being almost impossibly dense and intricate in their composition, a strange diamond can reflect light within itself so profoundly that it actually bends time.\nStrange diamonds are most often found in caves and other dark places, as if the natural world wants to keep their brilliance all to itself.",
  [Resource.Fossil]:
    "Prized for the ancient minerals they contain, slime fossils are like nature capturing a moment in time. Specifically, that moment seems to be when a great avalanche or mudslide occurred and a slime was totally cool with it.",
  [Resource.Snowflake]:
    "Deep underground pressure sometimes forces droplets from the Slime Sea into freezing climates, turning them into snowflakes with an unusually consistent and beautiful quality to them. Slime scientists theorize that this is a natural side effect of the Slime Sea being made up of a perfect balance of all slimes.",
  [Resource.Sunsap]:
    "Despite its name, Sun sap is actually made of hardened amber whose strikingly golden hue is sure to brighten a rancher's day. Some say if you find one with a bug encased inside, it's even more valuable, but come on, it's a bug. What could you possibly do with that?",
  [Resource.Mote]:
    "Lightning Motes are left behind after especially dazzling lightning strikes. Though crackling with residual energy, they are in fact safe for collection and handling.",
  [Resource.Glass]:
    "Storm Glass is formed when lightning strikes the ground and melts rock in an instant. Not only does storm glass make a surprisingly durable building material, but it adds a heavenly pop of color!",
  [Resource.Drift]:
    "Drift crystals form inside cyclones as earth and debris are whirled together at incredible speeds. Once ejected from the turbulent winds, drift crystals float gently to the ground, and are likely very dizzy.",
  [Resource.Magma]:
    "Although the comb appears quite delicate, the slowly oozing lava suggests otherwise. Or is that honey? Either way it's probably not safe for consumption.",
  [Resource.Aqua]:
    "The swirling colors suggest an orb of water, but it's solid all the way through. What could make water behave like this?",
  [Resource.Dream]:
    "These mysterious little bubbles appear to form directly from the ether of Dream Land. Are they the wandering dreams of slimes, or something else?",
  [Resource.Petal]:
    "The delicate details of these leaves are surely too fine to have been formed from metal, but they are clearly tin. Could it be these were once organic petals?",
  [Resource.Indigo]:
    "Almost no light reflects from this black metal, despite the prismatic environment in which it's found. Another mystery of the Grey Labyrinth, or something darker?",
  [Resource.Royal]:
    "The royal jelly found in the hives of the Grey Labyrinth is as special as it is unnaturally sweet compared to other varieties. It's believed that this is a result of bees collectiong small deposits of slime from honey slimes and working it into their royal jelly mixture. If a rancher is lucky enough to acquire some, they'll find its unique properties are very valuable in certain Slime Science endeavors.",
  [Resource.Snowball]:
    "Curiously, snowballs can be found fully formed in neat piles within frigid regions of the Far, Far Range. While it is unknown how or why these piles were formed, all signed point towards a symbiotic relationship between slimes and things that are a super fun, awesome time in snow. Nature is truly magical.",
  [Resource.UnstableResources]:
    "Caught and stretched across reality, matter, and time, resources affected by the prisma disruptions of the Grey Labyrinth are too volatile to exist for long in the natural world. Eventually, these resources will pop out of existence, or even a rancher's vac tank, to escape the confines of reality and mundane three dimensions.\nBasically, they've got too many reality appointments and they are constantly rushing to get to their next one. ",
  [Resource.Prisma]:
    "Unlike other objects affected by prisma disruptions, these plorts appear to be especially sensitive to the temporal distortions that appear throughout the Grey Labyrinth. The ancient beings that created the Grey Labyrinth seem to have had a special use in mind for these plorts when they designed the megastructure. Perhaps the plorts themselves are the key to delving further into the structure's mysteries?",
  [Resource.Sprinkles]:
    "Sprinkles are made when Rainbow Island's slimes; especially the Radiant Slimes who have been most affected by the Prismacore, shed their radiance while hanging out in the Sanctuary. Think of it like a detox spa treatment for slimes!\nWhile there sprinkes look good enough to eat, side effects of ingestion may include dizziness, hallucinations, and unstable emotions. Also, an unstable physical composition. So maybe save them for the shop."
};
