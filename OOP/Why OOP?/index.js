const dogImages = [
  "https://place.dog/500/500?id=1",
  "https://place.dog/500/500?id=2",
  "https://place.dog/500/500?id=3",
  "https://place.dog/500/500?id=4",
  "https://place.dog/500/500?id=5",
  "https://place.dog/500/500?id=6",
  "https://place.dog/500/500?id=7",
  "https://place.dog/500/500?id=8",
  "https://place.dog/500/500?id=9",
];

const catImages = [
  "https://cataas.com/cat",
  "https://cataas.com/cat/cute",
  "https://cataas.com/cat/funny",
  "https://cataas.com/cat/sleepy",
  "https://cataas.com/cat/angry",
  "https://cataas.com/cat/happy",
  "https://cataas.com/cat/sad",
  "https://cataas.com/cat/grumpy",
  "https://cataas.com/cat/playful",
];

let dogsUL = document.querySelector(".dogs");
let catsUL = document.querySelector(".cats");
let dogsBtn = document.querySelector(".dogs-btn");
let catsBtn = document.querySelector(".cats-btn");

function suffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function createCatsUI() {
  catsUL.innerHTML = "";
  catImages.forEach((cat) => {
    let li = document.createElement("li");
    let image = document.createElement("img");
    image.src = cat;

    li.append(image);
    catsUL.append(li);
  });
}

function createDogsUI() {
  dogsUL.innerHTML = "";
  dogImages.forEach((dog) => {
    let li = document.createElement("li");
    let image = document.createElement("img");
    image.src = dog;

    li.append(image);
    dogsUL.append(li);
  });
}

function suffleDogs() {
  dogsBtn.addEventListener("click", () => {
    dogs = suffle(dogImages);
    createDogsUI();
  });
}

function suffleCats() {
  catsBtn.addEventListener("click", () => {
    cats = suffle(catImages);
    createCatsUI();
  });
}
createCatsUI();
createDogsUI();
suffleCats();
suffleDogs();
