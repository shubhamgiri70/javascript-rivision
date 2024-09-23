const textColors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "black",
  "gray",
  "teal",
  "navy",
  "lime",
  "cyan",
  "magenta",
  "olive",
  "maroon",
  "indigo",
  "violet",
  "gold",
  "silver",
  "coral",
  "salmon",
  "chocolate",
  "crimson",
  "darkblue",
  "darkgreen",
  "darkred",
  "darkorange",
  "darkviolet",
  "hotpink",
  "lightblue",
  "lightgreen",
  "lightgray",
  "khaki",
  "lavender",
  "plum",
  "turquoise",
  "sienna",
  "slategray",
  "springgreen",
  "steelblue",
  "tan",
  "thistle",
  "tomato",
  "wheat",
  "whitesmoke",
  "yellowgreen",
  "dodgerblue",
  "seagreen",
];

let root = document.querySelector(".all-boxes");
let h1 = document.querySelector("h1");

function handleClick(colorText, e) {
  if (e.shiftKey) {
    h1.innerText = colorText;
    h1.style.backgroundColor = colorText;
  } else {
    h1.innerText = "Use Shif Key to change color";
  }
}

textColors.forEach((color) => {
  let box = document.createElement("div");
  box.classList.add("color");
  box.style.backgroundColor = color;

  box.addEventListener("click", (event) => {
    console.log(event);
    handleClick(color, event);
  });

  root.append(box);
});
