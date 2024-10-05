const cardsArray = [
  { name: "shell", img: "img/shell.png" },
  { name: "star", img: "img/star.png" },
  { name: "bobomb", img: "img/bobomb.png" },
  { name: "mario", img: "img/mario.png" },
  { name: "luigi", img: "img/luigi.png" },
  { name: "peach", img: "img/peach.png" },
  { name: "1up", img: "img/1up.png" },
  { name: "mushroom", img: "img/mushroom.png" },
  { name: "thwomp", img: "img/thwomp.png" },
  { name: "bulletbill", img: "img/bulletbill.png" },
  { name: "coin", img: "img/coin.png" },
  { name: "goomba", img: "img/goomba.png" },
];

const game = document.getElementById("game");

let firstGuess = "";
let secondGuess = "";
let count = 0;
let previousTarget = null;
let delay = 1200;

let grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);

// Duplicate and shuffle the game cards
let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

gameGrid.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = item.name;

  const front = document.createElement("div");
  front.classList.add("front");

  const back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(${item.img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

// Handle card click event
grid.addEventListener("click", function (event) {
  const clicked = event.target.parentElement;

  // Check if the click is valid and avoid clicking the same card twice
  if (
    clicked.nodeName === "SECTION" ||
    clicked === previousTarget ||
    clicked.classList.contains("is-flipped") ||
    clicked.classList.contains("match")
  ) {
    return;
  }

  // Add the flip class to reveal the card
  clicked.classList.add("is-flipped");

  // Handle first and second guesses
  if (count === 0) {
    firstGuess = clicked.dataset.name;
    count++;
    previousTarget = clicked;
  } else {
    secondGuess = clicked.dataset.name;
    count++;

    // Check if the two guesses match
    if (firstGuess === secondGuess) {
      setTimeout(match, delay);
    }

    // Reset guesses after a delay whether it’s a match or not
    setTimeout(resetGuesses, delay);
  }
});

// Function to mark matching cards
const match = () => {
  const selected = document.querySelectorAll(".is-flipped");
  selected.forEach((card) => {
    card.classList.add("match");
  });
};

// Function to reset guesses after each pair attempt
const resetGuesses = () => {
  firstGuess = "";
  secondGuess = "";
  count = 0;
  previousTarget = null;

  const selected = document.querySelectorAll(".is-flipped:not(.match)");
  selected.forEach((card) => {
    card.classList.remove("is-flipped");
  });
};
