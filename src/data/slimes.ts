import { Food, Diet } from "./food";
import { Toy } from "./toys";

export enum Slime {
  Pink = "pink",
  Cotton = "cotton",
  Tabby = "tabby",
  Phosphor = "phosphor",
  Angler = "angler",
  Rock = "rock",
  Batty = "batty",
  Flutter = "flutter",
  Ringtail = "ringtail",
  Boom = "boom",
  Honey = "honey",
  Puddle = "puddle",
  Crystal = "crystal",
  Hunter = "hunter",
  Fire = "fire",
  Lucky = "lucky",
  Gold = "gold",
  Saber = "saber",
  Tangle = "tangle",
  Dervish = "dervish",
  Yolky = "yolky",
  Twin = "twin",
  Hyper = "hyper",
  Sloomber = "sloomber",
  Shadow = "shadow",
  Tarr = "tarr",
}

export const specialSlimes = [Slime.Lucky, Slime.Gold, Slime.Tarr];

type SlimeProps = {
  name: string;
  desc: string;
  diet: Diet | null;
  food: Food | null;
  largoable: boolean;
  toy: Toy | null;
  radiantable: boolean;
  pedia: SlimePediaProps;
};

// prettier-ignore
const slimesBase: { [key in Slime]: SlimeBaseProps } = {
  [Slime.Pink]: { name: "Pink Slime", desc: "Their coral hue is scientifically proven to be the color of cheer.", diet: Diet.Any, food: null, largoable: true, toy: Toy.Ball, radiantable: true },
  [Slime.Cotton]: { name: "Cotton Slime", desc: "A hop, a skip, a jump and- oh, it's gone.", diet: Diet.Veggies, food: Food.Lettuce, largoable: true, toy: Toy.Bouncy, radiantable: true },
  [Slime.Tabby]: { name: "Tabby Slime", desc: "Those stripes, that tail, that wiggle, wiggle, wiggle.", diet: Diet.Meat, food: Food.HenStony, largoable: true, toy: Toy.Yarn, radiantable: true },
  [Slime.Phosphor]: { name: "Phosphor Slime", desc: "The softly glowing heralds of starlight.", diet: Diet.Fruits, food: Food.Cuberry, largoable: true, toy: Toy.Light, radiantable: true },
  [Slime.Rock]: { name: "Rock Slime", desc: "These slimes ore totally metal.", diet: Diet.Veggies, food: Food.Beet, largoable: true, toy: Toy.Rock, radiantable: true },
  [Slime.Hunter]: { name: "Hunter Slime", desc: "Nevermind the rabbit, have you seen any chickens?", diet: Diet.Meat, food: Food.Rooster, largoable: true, toy: Toy.Chicken, radiantable: true },
  [Slime.Angler]: { name: "Angler Slime", desc: "So pretty! Let me just get a closer-", diet: Diet.Meat, food: Food.HenSea, largoable: true, toy: Toy.Puffer, radiantable: true },
  [Slime.Puddle]: { name: "Puddle Slime", desc: "Keep one in your boot and you'll always stay cool. But it's weird.", diet: Diet.Water, food: Food.Water, largoable: false, toy: Toy.Duck, radiantable: true },
  [Slime.Ringtail]: { name: "Ringtail Slime", desc: "Where there's a crime, there's a ringtail slime.", diet: Diet.Any, food: null, largoable: true, toy: Toy.Trash, radiantable: true },
  [Slime.Honey]: { name: "Honey Slime", desc: "Nothing is sweeter than (a freshly produced plort of) honey.", diet: Diet.Fruits, food: Food.Mango, largoable: true, toy: Toy.Bee, radiantable: true },
  [Slime.Flutter]: { name: "Flutter Slime", desc: "Like snowflakes, each pair of wings are unique, and just as delicate.", diet: Diet.Nectar, food: Food.Nectar, largoable: true, toy: Toy.Worm, radiantable: true },
  [Slime.Batty]: { name: "Batty Slime", desc: "A fiendish stalker of the night, hungering always... for fruit.", diet: Diet.Fruits, food: Food.Granite, largoable: true, toy: Toy.Moon, radiantable: true },
  [Slime.Boom]: { name: "Boom Slime", desc: "Careful, these slimes have been known to expl-", diet: Diet.Meat, food: Food.HenBriar, largoable: true, toy: Toy.Bomb, radiantable: true },
  [Slime.Crystal]: { name: "Crystal Slime", desc: "It's clear as shiny, transparent rocks that these slimes are dangerous.", diet: Diet.Veggies, food: Food.Onion, largoable: true, toy: Toy.Crystalball, radiantable: true },
  [Slime.Fire]: { name: "Fire Slime", desc: "Like a little campfire, except that it moves and it's a slime.", diet: Diet.Ash, food: Food.Ash, largoable: false, toy: Toy.Charcoal, radiantable: true },
  [Slime.Saber]: { name: "Saber Slime", desc: "A bouncing blast from the past.", diet: Diet.Meat, food: Food.HenCluck, largoable: true, toy: Toy.Stego, radiantable: true },
  [Slime.Shadow]: { name: "Shadow Slime", desc: "Chase your shadow and it will flee.", diet: null, food: null, largoable: false, toy: null, radiantable: false },
  [Slime.Twin]: { name: "Twin Slime", desc: "Know thyself, and thy other self as well.", diet: Diet.Fruits, food: Food.Cherry, largoable: true, toy: Toy.Spinner, radiantable: true },
  [Slime.Hyper]: { name: "Hyper Slime", desc: "Hold on tight—this slime's got places to be.", diet: Diet.Veggies, food: Food.Tater, largoable: true, toy: Toy.Rocket, radiantable: true },
  [Slime.Sloomber]: { name: "Sloomber Slime", desc: "To sleep-perchance to... sleep more, and more, and more.", diet: Diet.Meat, food: Food.HenCandied, largoable: true, toy: Toy.Sheep, radiantable: true },
  [Slime.Dervish]: { name: "Dervish Slime", desc: "Twists and turns all day and spirals all night.", diet: Diet.Fruits, food: Food.Pear, largoable: true, toy: Toy.Gyro, radiantable: true },
  [Slime.Tangle]: { name: "Tangle Slime", desc: "A rose by any other name would still eat a chicken.", diet: Diet.Meat, food: Food.HenPainted, largoable: true, toy: Toy.Sol, radiantable: true },
  [Slime.Yolky]: { name: "Yolky Slime", desc: "This slime always looks at the sunny side... up.", diet: null, food: null, largoable: false, toy: Toy.Bread, radiantable: true },
  [Slime.Lucky]: { name: "Lucky Slime", desc: "Oooh, shiny!", diet: Diet.Meat, food: null, largoable: false, toy: null, radiantable: false },
  [Slime.Gold]: { name: "Gold Slime", desc: "Get rich or die sliming.", diet: Diet.Any, food: null, largoable: false, toy: null, radiantable: false },
  [Slime.Tarr]: { name: "Tarr Slime", desc: "Those awful, ravenous rainbows.", diet: Diet.RanchersnSlimes, food: Food.RanchersnSlimes, largoable: false, toy: null, radiantable: false },
};

export type SlimePediaProps = {
  slimeology: string;
  risks: string;
  plortonomics: string;
};

const slimepedia: { [key in Slime]: SlimePediaProps } = {
  [Slime.Pink]: {
    slimeology:
      "Pink Slimes are the most common slime found on the Far, Far Range. They're cheerful, docile, and the easiest of all slimes to ranch. A pink slime will eat anything you put in front of it, though they have no favorite food, and their plorts are the least valuable of all slimes.",
    risks:
      "Not much to worry about with a pink slime. They're soft, squishy, very happy to be around a rancher, and found all over the Range. But because of this, a rancher won't go far without finding a few pink plorts, which can lead to largos, and then...",
    plortonomics:
      'Pink Plorts are an excellent "multipurpose generic substance" used to manufacture everything from food products to household cleaners. All over earth, people are eating burgers, sweetening their coffees or scrubbing their floors with pink plort products. That\'s some serious versatility!',
  },
  [Slime.Tabby]: {
    slimeology:
      "Tabby slimes share many curious similarities to domesticated house cats of Earth. With their perky ears, striped backs, and swaying tails, you'd almost mistake them for a true feline... if they weren't made entirely of gooey slime, of course.",
    risks:
      "A Tabby slime generally doesn't mean any harm to a rancher, but like their spiritual Earth cat cousins, often causes a great deal of chaos anyway. Tabby slimes love to steal things they don't eat, like fruits and veggies, resulting in lots of unintended largo transformations on the Range.",
    plortonomics:
      "Tabby plorts are a key ingredient in a variety of 'performance enhancing' products that grant the consumer a surge of the tabby slime's signature energy and exuberance. And while athletes the world over take them to gain an edge, prolonged use often results in 'uncontrollable butt wiggles', another (less desirable) signature of the tabby slime.",
  },
  [Slime.Cotton]: {
    slimeology:
      "Cotton slimes seem to have adapted to life among the tall grasses of Rainbow Island by developing a spring in their step that allows them to leap far higher into the air than any other slime. Once airborne, these floofy-tailed slimes are always hoping their hops land them in a patch of delicious water lettuce.",
    risks:
      "Cotton slimes are always looking for an excuse to leap high into the air: be it to escape a corral, because they're agitated, or for secret bunny things. Either way, they ensure that ranchers stay on their toes. (which would still mean you're not tall enough to reach them)",
    plortonomics:
      'Cotton plorts have an inexplicable "fluffy" quality to them, making them a great alternative to cotton, which is not native to the Far, Far Range. If one desired a quiet, isolated life on Rainbow Island, but still have soft pillows, warm sweaters, and lots of dry socks, they would do well to keep cotton slimes happily hopping about their ranch.',
  },
  [Slime.Phosphor]: {
    slimeology:
      "Phosphor slimes come out at night, flying about the moonlit range upon their translucent wings. Phosphor slimes have a luminescent slime core that pulses with a soft glow, making them easy to spot. It's for this reason ranchers sometimes refer to them as 'low stars'.",
    risks:
      "Phosphor slimes have special needs compared to your typical slime. A phosphor slime and its plorts will quickly vanish if exposed to sunlight, meaning a rancher could quickly lose an entire corral's worth of phosphor slimes if not careful. Ranchers must either vac them up before daybreak or keep phosphor slimes in a place that is perpetually dark, like a cave.",
    plortonomics:
      "The luminescent compound found within phosphor plorts can produce light for over 100 years, making it an incredibly eco-friendly form of illumination on Earth. Cities across the globe are slowly switching over to phosphor lights, saving trillions of gigawatts of energy daily. Plus if you rub the stuff in your hair, it glows and looks really cool.",
  },
  [Slime.Rock]: {
    slimeology:
      "Rock slimes earned their name from the rocky crown of sharp spikes atop their slimy bodies. But their affection for minerals doesn't end with their appearance: rock slimes are strict vegetarians, favoring the satisfying crunch of the heart beet most of all.",
    risks:
      "The dangers of a rock slime should be fairly obvious: their rocky crown is sharp enough to pierce straight through a rancher's boots. But it's not all about watching where you're stepping as these rocks are always rolling. When you see a rock slime revving up for a tumble, it's best to get out of the way.",
    plortonomics:
      "Rock plorts are prized for being a key component in the production of 'blue metal,' an amazing alloy that's stronger than titanium and lighter than plastic. Because of its amazing strength, blue metal is often a key component in the hulls of light-speed capable starships, synthetic appendages, and protective holophone cases.",
  },
  [Slime.Honey]: {
    slimeology:
      "Honey slimes are an odd breed of slime composed of a hyper-sweet slime compound. Most slime scientists believe this to be the result of their slime cells replicating the natural sugars found in the fruits and floral nectars of the Far, Far Range. Most ranchers agree their plorts taste great on cereal.",
    risks:
      "The greatest danger a honey slime poses is found in their plorts. Honey plorts are the sweetest, most delicious plorts known on the Far, Far Range. Other slimes can detect them from much further away than a normal plort and will do everything in their means to get them. A rancher with honey slimes needs to be careful about unintended largos, or worse...",
    plortonomics:
      "Honey plorts are highly prized by food manufacturers. Though the plorts are naturally incredibly sweet, the discovery that they could be refined into an even sweeter substance made their demand soar. These refined honey plorts are said to score an unprecedented 867 on the Werner-Thompkins-Hong sacchrino scale, just a few points shy of 'not fit for human consumption.'",
  },
  [Slime.Flutter]: {
    slimeology:
      "Flutter slimes feel truly at home on Rainbow Island, curiously flying about the prismatic flora, a shining example of natural beauty in an already beautiful world. Their beauty however requires a very specific regimen to maintain, as flutter slimes have a unique diet where they will only eat the sweet but fleeting moondew nectar that grows in the wilds of Rainbow Island. However, should you manage to go through the trouble of collecting moondew nectar and keep your flutter slimes well-fed, they will reward you with the soothing aura they produce after eating it that reduces all nearby slime agitation. It also has pretty sparkles.",
    risks:
      "Flutter slimes have an innate curiosity that causes them to fly to nearby objects and creatures. And since they have some of the most powerful flight capabilities of all slimes, they'll soon make you appreciate the glass walls and roof of the Conservatory. Still, given their restrictive diets and soothing auras, a flutter slime might just be the kind of slime you want roaming free on your ranch.",
    plortonomics:
      "Flutter plorts have a nearly imperceptible weightlessness to them, never truly touching the ground. If one were to hold enough of them, they could similarly float as well, if just enough to slide a single coin beneath their feet. It makes for a tiny but profound escape from the weight of the world that lingers just below.",
  },
  [Slime.Hunter]: {
    slimeology:
      "The Hunter Slime is the wild cousin of the tabby slime. A much more capable creature than the playful tabbies, the hunter slime excels at stalking the chickens of the Far, Far Range. A hunter slime's slimological makeup allows for a natural cloaking ability that renders it almost completely invisible. Their only tell is in their giant, almond eyes, which can often be seen hovering in the dark. This effect is often described by unsuspecting ranchers as 'aaaahhhhHHH!'",
    risks:
      "A hunter slime has keen senses and can detect its prey from great distances. This makes finding a good location for their corrals challenging. Additionally, the wild nature of the hunter is also passed on to any largos formed from its plorts. A newly created hunter largo will always be feral! A prepared rancher knows that breeding hunter largos should always be done slowly, with a few chickens on hand to calm them down.",
    plortonomics:
      "Amazingly, a serum can be made from hunter slime plorts that can actually render a person invisible! The effect only lasts for about a day, but this serum is nonetheless incredibly popular back on Earth as many people find its effects very soothing. Sometimes you feel like you just want to disappear for a while. But then about a day goes by and you realize that not only did you miss being seen, but others missed seeing you too.",
  },
  [Slime.Ringtail]: {
    slimeology:
      "Ringtail slimes are nothing but trouble. Theft under cover of darkness is their favorite hobby and they delight in getting away with as much as possible before the sun rises. The reason for this exclusively moonlit crime spree is that ringtails have a peculiar condition that transforms them into stone when exposed to sunlight. And while we're not saying this is an ancient curse, they're definitely the type of slime who would have an ancient curse if that was a thing.",
    risks:
      "Once a Ringtail slime starts eating, it will never stop. Just one Ringtail slime is capable of wiping out an entire farm if given the time. And they offer nothing in return because a Ringtail slime stops producing plorts when it would otherwise be full. If you plan on ranching these ravenous rascals, keep an eye out for a mischievous expression to know when to avoid feeding them...",
    plortonomics:
      "Materials developed from Ringtail plorts are extremely resilient, actually hardening in the face of UV rays. And similar to pink plorts, Ringtail plorts are very malleable, allowing a clever person to craft a wide range of things that can stand the test of time. Such things could be something as essential as sturdy shelter on a faraway island, or as simple as a collection of family photos that could survive a trek across the scorching desert...",
  },
  [Slime.Puddle]: {
    slimeology:
      "Puddle slimes are a rare species of slime that live in fresh water pools found on the range. These slimes don't eat fruits, veggies, or meat like most other slimes. Instead, puddle slimes absorb water into their bodies while they sit on the surface of a pool. Puddle slimes need fresh water to survive and will quickly evaporate if left on any other surface for too long.",
    risks:
      "Puddle slimes aren't risky to manage, they just require a fair bit of maintenance. A rancher needs a pool of fresh water, like a pond, available for a puddle slime and its plorts to sit in as they will evaporate if away from water. Finally, puddle slimes are exceptionally shy and will not produce plorts if they are in close proximity to more than 3 other slimes. Overall, a puddle slime is a better fit for a more experienced rancher, not one still wet behind the ears.",
    plortonomics:
      "Puddle plorts are made almost entirely from an incredible hydro compound known by chemists across the galaxy as H2Ohhhhh. This compound is used to create an absurdly expensive brand of bottled drinking water that is sought after by the elite back on Earth. While some people argue that there is little difference in taste between it and tap water, those people seriously are not getting it.",
  },
  [Slime.Angler]: {
    slimeology:
      "Angler slimes inhabit the deepest depths of the Slime Sea, but have now been discovered on Rainbow Island. It's not known what drew them from the darkest recesses of the Far, Far Range to what very well could be the most vibrant, but it may have something to do with the taste of a plump, sun kissed drumstick of a sea hen...",
    risks:
      "Beware: behind the angler slime's adorable fishy exterior beats the heart of a chicken-chomping monster. Using their hypnotic lantern-like lure, they create a powerful radiant flash that can stun chickens, and even other slimes.",
    plortonomics:
      "Angler plorts are able to maintain their form at incredible depths and make for excellent material for deep sea diving tech. Because of this they are a uniquely comforting object to hold. To know something can be so small but manage to withstand so much pressure is oddly encouraging, perhaps even inspiring the courage for someone to take on the impossible...",
  },
  [Slime.Batty]: {
    slimeology:
      "Batty slimes love to lurk cold, dark places, like caves, swooping down from ceilings to scare others with their glowing, red eyes and pointy fangs. Hm? No, they're not vampires. The glowing eyes let them see in the dark is all. They also greatly dislike garlic because they eat fruit. Seriously.",
    risks:
      "While in darkness, like caves or at night, batty slimes grow hungrier and will eat more often than other slimes. And while they can survive in sunlight the sun's searing rays freak them out a bit, increasing their agitation over time. Again, no, they are not vampires.",
    plortonomics:
      'Batty plorts have significant potential for navigation and sonar tech. Each plort can produce a perfect "ping" for echolocation. Having a supply of these and the right know how could allow you to navigate even the most devious of labyrinths with ease. But then again, how many of use find ourselves needing to do something like that?',
  },
  [Slime.Boom]: {
    slimeology:
      "Boom slimes are often heard before they're seen. The slime cells of a boom slime are constantly vibrating, causing their slime to increasingly crackle with energy before ultimately exploding. However, the boom slime always comes out unscathed, though always a little dazed.",
    risks:
      "Boom slimes are constantly building toward an inevitable explosion, making them quite hazardous to ranchers. In addition to those explosions causing bodily harm, they also have the capacity to send all nearby slimes flying into the air, making them a hard slime to corral.",
    plortonomics:
      "Highly volatile boom plorts have all sorts of applications, including powering rocket thrusters and demolitions. Military organizations value their highly destructive capabilities for 'medical technology and other research'. Imagine that!",
  },
  [Slime.Crystal]: {
    slimeology:
      "Believed to be a cousin of the rock slime, the crystal slime is covered in a crown of shimmering, crystal spikes. These spikes seem to form from the crystal slime generating a tremendous amount of internal heat and warping the minerals around them; a truly alien behavior.",
    risks:
      "The sharp crystals adorned on the crystal slime's crown will cause a great deal of harm if touched. Worse still, the crystal slime routinely creates large patches of dangerous crystals in the environment around them. Thought to be a means of expelling internal heat, these crystal patches are ultra-hot and can be shattered if splashed with water.",
    plortonomics:
      "Though the crystals produced by a crystal slime are highly unstable, a crystal plort, like all plorts, is far more pure and can be used by slime scientists to engineer a variety of metals that are entirely transparent. This innovation has lead to metropolitan areas on Earth completely transforming visually, allowing more light to reach the streets and the space as a whole a chance to 'breathe.' Architects often describe these transparent metals as 'so totally cooler than normal, boring metals.'",
  },
  [Slime.Fire]: {
    slimeology:
      "Fire slimes are a rare breed of slime that lives on ash. Fire slimes will eat just about any food, but not without it being burned into ash first. The only way to feed a fire slime is to use an incinerator with an ash trough upgrade. Fire slimes need ash to survive and will quickly snuff out if left on any other surface for too long. When keeping fire slimes in an ash trough, simply burn any food item to produce some ash and fill the trough.",
    risks:
      "A fire slime's naturally burning state makes them bad companions for other slimes as their fiery touch will send a slime flying. Additionally, fire slimes and their plorts need to be kept in an ash trough under an incinerator or they'll quickly snuff out. If you need to deal with fire slimes directly, a splash of fresh water will put out their fires for a short while.",
    plortonomics:
      "Fire plorts are used in the developing world on Earth to keep stoves and fireplaces burning. Thanks to fire plorts, warm hands and hot food is a possibility for millions of people who otherwise would not have access to such luxuries. A rancher won't get rich selling fire plorts, and certainly managing them can be a dangerous endeavor, but they should know that the sale of each helps those in need. Now and far into the future, the little noble actions of every individual help us move forward as a people. That much will never change.",
  },
  [Slime.Saber]: {
    slimeology:
      "Once believed to be long extinct or only existing as distant, feral descendants, saber slimes have been discovered on a mysterious glacier off the coast of Rainbow Island. And after being trapped in ice for ages, these saber slimes have awoken with dinosaur sized appetites! One of the fiercest predators during the Jellassic Period of the Far, Far Range, saber slimes still exhibit an extreme agility that makes them highly adept at hunting their favorite food, the elusive thundercluck. They can often be found bouncing off the sheer walls, slippery glaciers, and soaring ice spires of their snowy home.",
    risks:
      "Saber slimes will sometimes give a fearsome roar to startle competitors for food. Slime scientists agree that this is their way of calling 'dibs' on a meal. They'll also roar just to let other slimes know they're around, like a mighty Tyrannosaurus Rex announcing its presence in a primordial jungle of old... just like, maybe 100 times smaller, and squishier.",
    plortonomics:
      "Saber plorts are collected for their historical value, offering a window into the primitive past of the Far, Far Range. Some slime scientists have tried to extract the slime DNA from these plorts in order to recreate a Jellassic giant saber slime, but all have failed. And honestly, that's probably for the better, because as soon as that happens some charming billionaire would be talking about making a whole theme park to view them in captivity and then...",
  },
  [Slime.Shadow]: {
    slimeology:
      "Shadow slimes are found within the dark corners of the Grey Labyrinth and other places where they are safe from prismatic disruptions. They are an unusual and unique slime, clustering together in erratic groups and quickly fleeing from the slightest provocation, almost vanishing in thin air. It's unknown if they were created as a part of the Labyrinth or some kind of evolution against the prismatic effects within it.",
    risks:
      "Shadow slimes present no immediate threat to a rancher, however they will flee the moment they are spotted, perhaps accidentally falling headlong into the cloudy abyss of the Labyrinth as you desperately try to snag their plorts is a risk.",
    plortonomics:
      "The umbral aura of a shadow slime's plort, like the slime itself, has a natural dampening effect against the prismatic energies that radiate through the Labyrinth and all of Rainbow Island. Those that manage to find this rare creature would do well to master acquiring their plorts as they will likely prove essential for solving the Labyrinth's many puzzles and peril.",
  },
  [Slime.Twin]: {
    slimeology:
      "Twin slimes are believed to be a bizarre byproduct of the Prismacore's effects on the Labyrinth, seemingly being two slimes occupying the same space in reality at different intervals. It is unclear if these slimes are in fact two versions of the same slime, or different ones, and if so, if they're even aware of the phenomenon.",
    risks:
      "Twin slimes can create reality-defying portals that can snag things from the environment and drop them in other places. Generally this is done to acquire a tasty fruit that is out of reach, but it seems as though sometimes they exhibit this behavior just to cause some trouble. It is unclear which of the two halves of the twin slime is the most mischievous.",
    plortonomics:
      "Like the slime itself, a twin slime plort is actually two plorts occupying the same space in reality, and always in opposing polarities. This makes them inherently unstable and a challenge for practical applications like other plorts. For example. if applied to construction technology they would simultaneously generate the strongest substance to ever exist as well as the weakest. On the Plort Market, they are simultaneously the most valuable plort to ever exist, as well as one that is so undervalued it actually costs you a fortune in newbucks to sell it. So it shakes out to a pretty standard value in the end.",
  },
  [Slime.Hyper]: {
    slimeology:
      "These adrenaline junkies can be found aroud the Terrarium, literally bouncing off the walls. Perhaps their energy feeds some sort of growth mechanism in the Labyrinth—or are they result of such forces? Their hyperactive nature will keep any rancher on their toes, but the cool factor makes the effort totally worth it.",
    risks:
      "Corralling these slimes is a gnarly challenge. They must constantly discharge small amounts of energy in order to maintan equilibrium, and each burst sends them rocochetting off corral walls, dashing into trouble, and leaping off of cliffs in search of adventure. Don't follow too closely!",
    plortonomics:
      "The concentrated kinetic energy in these plorts would make them perfect for producing next-gen energy drinks. However, some caution is needed when handling them. While a brif dose may energize you enough for an all-nighter of racing around the range, too much can give you the shakes—the kind that send you in orbit.",
  },
  [Slime.Sloomber]: {
    slimeology:
      "Sloomber slimes are found among the puffy, pink islands of the Labyrinth's Dream Land, drifting in and out of sleep from the strange auras that radiate from them. At first they may seem like somewhat lazy hunters, delighting in a chomp of chicken when they happen to be awake. However, given the function of Dream Land within the Labyrinth, it is possible that sloomber slimes are significantly more powerful creatures, perhaps even dreaming the world around them into existence as they sleep among the clouds.",
    risks:
      "The strange aura that emanates from sloomber slimes can put other slimes, including other sloomber slimes, to sleep for some time. While this can be a good thing if you're looking to take a break, it can disrupt feeding schedules and plort production on your ranch. So be sure to always know where they are on your ranch because it is said that their sleep aura can't be... felt... until...... it's........ too............",
    plortonomics:
      "If held without safety equipment like a pair of gloves, the concentrated sloomber essence within a sloomber plort can make you fall into a deep, cozy sleep full of wonderful dreams. Once you finally awake you will recall every bit of the dream to its fullest, and feel a deep calm and refreshment that lasts all day. Therefore, a sloomber plort should never under any circumstances be held while wearing gloves.",
  },
  [Slime.Yolky]: {
    slimeology:
      "Yolky slimes are a strange and elusive type of slime sometimes found near wild chickens on Rainbow Island. But unlike tabby slimes, their intent is not to hunt, for within their warm, golden center lies an enduring love for chickens. Such is the power of this glowing affection that it sometimes inspires nearby hens to produce a rare delight: a giant egg full of chicks and yolky plorts.",
    risks:
      "Yolky slimes can only inspire the production of giant eggs when nearby chickens are able to reproduce — they're not miracle workers — so if hens and roostros are too crowded, giant eggs will be a rare occurrence indeed. Slime ranchers should also note that giant eggs will only produce yolky plorts when they are fresh and the yolk inside is still glowing.",
    plortonomics:
      "Yolky plorts are highly valued for their concentrated nutrients, containing an extremely potent variant of vitamin D that allows people to reduce their sunlight intake for long periods of time, making them popular with cosmic pioneers, deep sea explorers, and gamers. But though yolky plorts can replace the physical need for sunlight, they can never replace the warmth you feel when it touches your face, and the comfort it offers to know that the sun rose once more in your world. To be a stranger to that and still have hope for tomorrow would require the strongest of convictions.",
  },
  [Slime.Tangle]: {
    slimeology:
      "Though the tangle slime may look innocent with its wide smile and colorful flower atop its head, it's actually a fearsome predator with a big appetite for tasty meat. The tangle slime earned its name from the twisting vines that it can produce to grab things in the environment. Tangle slimes are sometimes found within the creeping vines that grow in areas with heavy pollen weather.",
    risks:
      "The tangle slime can be a handful on the ranch if they're not well-fed at all times. Tangle slimes tunnel their vines underground to snatch food and plots from outside their corrals, but if well-fed, beneficial buds will occasionally grow among their vines.",
    plortonomics:
      "Despite the troublesome nature of the slimes that create them, tangle plorts have incredibly beneficial agricultural applications. Fertilizers and growth formulas made from tangle plorts are used by farms all across Earth to greatly enhance crop production. It's speculated that the unusually high nutrient count found within tangle plorts that now grow Earth's vegetables results from the tangle slime's incredible appetite for chickens, but that's super gruesome so let's just ignore that.",
  },
  [Slime.Dervish]: {
    slimeology:
      "A dervish slime is a swirling, whirling bundle of energy in slimy form. Dervish slimes are sometimes found in areas with strong, windy weather, cruising across the landscape at high speed atop cyclones. One thing is for certain: wherever the dervish slime needs to go, it gets there in a hurry.",
    risks:
      "Dervish slimes can cause total chaos on a ranch if not cared for properly. They frequently ride atop whirlwinds at high speed and collect objects along the way, A highly agitated dervish slime can ride larger cyclones of air that vacuum up and toss about anything they touch. When dervish cyclones are roaring across your ranch there's little you can do other than brace for the chaos that will soon follow!",
    plortonomics:
      "Dervish plorts are a fantastic source of clean energy that helps give turbines and generators an extra boost. They are in constant demand as curiously, there is a finite number of spins stored in every dervish plort.",
  },
  [Slime.Lucky]: {
    slimeology:
      "Lucky slimes are a strange variant of tabby slimes that seem to have a fascination with shiny objects, particularly newbuck coins. A lucky slime gobbles up any coin it can find, giving it a distinct jingling sound as it moves about. However, coins don't make for a balanced diet and a lucky slime will still greedily devour meat of any kind. In doing so, its body bursts with a shower of newbucks, leaving little room left in its slimy tummy. This burst often sends the lucky slime flying into the air. Upon detecting a rancher, the lucky slime will soon make a hasty retreat. No known rancher has been skilled enough, or perhaps lucky enough, to capture one of these slippery slimes.",
    risks:
      "Lucky slimes pose the same risk to ranchers as other rare slimes: mainly, accidents in pursuit which can lead to demise. The promise of a small fortune when encountering a lucky slime has led to more than a few ranchers head-first into the slime sea. This occurrence has led some of the more superstitious ranchers to see the lucky slime as a bad omen, or the universe testing their greed. These ranchers will ignore lucky slimes altogether, even purposefully shooing them away. Well, until you hear those newbucks jingling, and then, maybe just one shot wouldn't hurt...",
    plortonomics:
      "A lucky slime isn't known to produce plorts of any kind. Leading slime scientists believe this to be the result of the lucky slime not being a true slime variant. Rather, lucky slimes are believed to be just an abnormal tabby slime: one whose color has faded as a result of ingesting so many coins. It is perhaps this very change that also led to ceasing plort production.",
  },
  [Slime.Gold]: {
    slimeology:
      "The most exclusive and sought after of all slime species is easily the gold slime. Very little is known about these slippery creatures as they have proven impossible to capture. Gold slimes are quick as a flash and will immediately begin to flee ranchers on sight. If a rancher is to profit from an encounter with a gold slime, they need to think quick.",
    risks:
      "Gold slimes produce no direct risks to a rancher but their appearance often induces panic and leads to (sometimes fatal) mistakes. Further, the only way to obtain gold plorts is to strike a gold slime with any spare resources in your vac. Doing so can produce a gold plort, though it also leaves a trail of additional resources in the area, leading to unintended largos, or worse.",
    plortonomics:
      "Gold plorts have little practical use and are the most valuable of all plorts simply because they are shiny and rare. Back on Earth, the elite love to adorn themselves in jewelry made of gold plorts, far exceeding the value of any terrestrial precious metal. For this reason a rancher should never pass up the chance to get a gold plort or two from a rare chance encounter with a gold slime.",
  },
  [Slime.Tarr]: {
    slimeology:
      "The tarr are formed when a largo eats a plort unlike the ones it produces. A terrible transformation occurs that turns the slime into a sludge filled with a swirling, prismatic array of colors and a relentless appetite. The tarr seek only to consume and replicate. Because of this, it can spread rapidly throughout the ranch. The only way to stop a tarr outside of incinerating it or throwing it into the slime sea is with fresh water. One splash will stop a Tarr from spawning new Tarr, and repeated splashes will destroy it entirely. Alternatively many ranchers recommend running away with their arms waving, and screaming.",
    risks:
      "The tarr are the single biggest threat to ranchers. The tarr will seek out slimes to consume and replicate themselves, but will also devour chickens, rot crops in their proximity, and even devour ranchers! Remember: ranching largos may be highly profitable, but one stray plort and you could wind up with a devastating tarr outbreak.",
    plortonomics: "The Tarr produce no plorts, only more tarr. And then more tarr still.",
  },
};

type SlimeBaseProps = Omit<SlimeProps, "pedia">;

const withPedia = (base: { [key in Slime]: SlimeBaseProps }): { [key in Slime]: SlimeProps } => {
  const list = {} as { [key in Slime]: SlimeProps };

  for (const slime of Object.values(Slime)) {
    list[slime] = { ...base[slime], pedia: slimepedia[slime] };
  }

  return list;
};

export const slimes: {
  [key in Slime]: SlimeProps;
} = withPedia(slimesBase);