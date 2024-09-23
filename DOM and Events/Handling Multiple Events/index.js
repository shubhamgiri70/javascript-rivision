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

textColors.forEach((color) => {
  let box = document.createElement("div");
  box.classList.add("color");
  box.setAttribute("data-color", color);
  box.style.backgroundColor = color;

  root.append(box);
});

function handleClick(e) {
  let color = e.target.dataset.color;
  h1.innerText = color;
  h1.style.backgroundColor = color;
}
root.addEventListener("click", handleClick);
