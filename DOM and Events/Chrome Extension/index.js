let key = document.querySelector("h2");
let description = document.querySelector("p");
let btn = document.querySelector("button");

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

btn.addEventListener("click", () => {
  let randomIndex = generateRandomNumber(data.length);
  let randomShortCut = data[randomIndex];

  key.innerText = randomShortCut.shortcut;
  description.innerText = randomShortCut.description;
});

