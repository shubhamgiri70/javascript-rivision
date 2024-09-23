function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

function generateRandomColor() {
  let hexCharactors = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = getRandomNum(16);
    color = color + hexCharactors[randomNumber];
  }
  return color;
}

let root = document.querySelector(".all-boxes");

for (let i = 0; i < 500; i++) {
  let ele = document.createElement("li");
  ele.classList.add("box");

  let randomNu = getRandomNum(500);
  ele.innerText = randomNu;

  ele.addEventListener("mousemove", handleMouseMove);

  root.append(ele);
}

function handleMouseMove() {
  let allBoxes = document.querySelectorAll(".box");
  allBoxes.forEach((box) => {
    box.style.backgroundColor = generateRandomColor();
    box.innerText = getRandomNum(500);
  });
}
