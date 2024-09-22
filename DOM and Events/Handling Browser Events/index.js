let incBtn = document.querySelector(".inc");
let decBtn = document.querySelector(".dec");
let resetBtn = document.querySelector(".reset");
let counter = document.querySelector("h1");

incBtn.addEventListener("click", () => {
  counter.innerText = Number(counter.innerText) + 1;
});

decBtn.addEventListener("click", () => {
  counter.innerText = Number(counter.innerText) - 1;
});

resetBtn.addEventListener("click", () => {
  counter.innerText = 0;
});
