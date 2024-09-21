const pokemonData = [
  {
    id: 1,
    name: "Bulbasaur",
    image: "https://img.pokemondb.net/sprites/home/normal/bulbasaur.png",
    description:
      "Bulbasaur is a small, squat Pokémon that has a green body with darker green spots. It has red eyes, pointed ears, and a plant bulb on its back that grows as it evolves. Bulbasaur can absorb sunlight and convert it into energy, making it a strong Grass-type Pokémon.",
    types: ["Grass", "Poison"],
  },
  {
    id: 2,
    name: "Ivysaur",
    image: "https://img.pokemondb.net/sprites/home/normal/ivysaur.png",
    description:
      "Ivysaur evolves from Bulbasaur and features a large flower bud on its back. This Pokémon is more powerful than its predecessor and is known for its strong connection to nature. Ivysaur is capable of releasing a sweet scent to attract other Pokémon and can unleash powerful attacks using the plant on its back.",
    types: ["Grass", "Poison"],
  },
  {
    id: 3,
    name: "Venusaur",
    image: "https://img.pokemondb.net/sprites/home/normal/venusaur.png",
    description:
      "Venusaur is the final form of Bulbasaur. This massive Pokémon has a gigantic flower blooming on its back, which can absorb sunlight for energy. It has a strong bond with nature and is known to create a calming effect on its surroundings. Venusaur's powerful vines can also be used in battle to entangle foes.",
    types: ["Grass", "Poison"],
  },
  {
    id: 4,
    name: "Charmander",
    image: "https://img.pokemondb.net/sprites/home/normal/charmander.png",
    description:
      "Charmander is a small, lizard-like Pokémon with a flame burning at the tip of its tail. It has orange skin and is known for its playful and friendly nature. If the flame goes out, Charmander is said to weaken. This Fire-type Pokémon can unleash fiery attacks and is often sought after for its loyalty.",
    types: ["Fire"],
  },
  {
    id: 5,
    name: "Charmeleon",
    image: "https://img.pokemondb.net/sprites/home/normal/charmeleon.png",
    description:
      "Charmeleon is the evolved form of Charmander and has a more aggressive personality. Its fiery tail flame burns hotter than that of its predecessor, signifying its increased power. Charmeleon is known to become angry when its tail flame is extinguished and will fight fiercely to protect itself.",
    types: ["Fire"],
  },
  {
    id: 6,
    name: "Charizard",
    image: "https://img.pokemondb.net/sprites/home/normal/charizard.png",
    description:
      "Charizard is the final evolution of Charmander, resembling a dragon. It has large wings and can fly at high speeds. Charizard is known for its fiery breath and powerful attacks, often using flames to scorch its opponents. It is highly regarded for its strength and agility in battles.",
    types: ["Fire", "Flying"],
  },
  {
    id: 7,
    name: "Squirtle",
    image: "https://img.pokemondb.net/sprites/home/normal/squirtle.png",
    description:
      "Squirtle is a small, turtle-like Pokémon with a blue body and a shell that offers protection. This Water-type Pokémon is known for its playful demeanor and ability to shoot water from its mouth. Squirtle can withdraw into its shell for defense and is often seen swimming in ponds.",
    types: ["Water"],
  },
  {
    id: 8,
    name: "Wartortle",
    image: "https://img.pokemondb.net/sprites/home/normal/wartortle.png",
    description:
      "Wartortle is the evolved form of Squirtle, characterized by its bushy tail and ears. It has a more serious personality and is known to be very protective of its trainer. Wartortle can use its tail to create whirlpools and is skilled in water attacks, making it a strong opponent in battles.",
    types: ["Water"],
  },
  {
    id: 9,
    name: "Blastoise",
    image: "https://img.pokemondb.net/sprites/home/normal/blastoise.png",
    description:
      "Blastoise is the final evolution of Squirtle and has powerful water cannons on its shell. This large Pokémon is known for its strategic mindset and formidable water attacks. Blastoise can shoot powerful jets of water that can even knock down opponents, making it a formidable foe in battle.",
    types: ["Water"],
  },
  {
    id: 10,
    name: "Jigglypuff",
    image: "https://img.pokemondb.net/sprites/home/normal/jigglypuff.png",
    description:
      "Jigglypuff is a round, pink Pokémon with large eyes and a curly tuft of hair. This Normal/Fairy type is known for its ability to sing lullabies that can put anyone to sleep. Jigglypuff often carries a marker to draw on the faces of those who fall asleep while listening to its song.",
    types: ["Normal", "Fairy"],
  },
];

let root = document.querySelector(".all-cards");

pokemonData.forEach((char) => {
  let li = document.createElement("li");
  li.classList.add("card");
  let image = document.createElement("img");
  image.src = char.image;
  image.alt = char.id;
  let h1 = document.createElement("h1");
  h1.innerText = char.name;
  let p = document.createElement("p");
  p.innerText = char.description;

  li.append(image, h1, p);
  root.append(li);
});
