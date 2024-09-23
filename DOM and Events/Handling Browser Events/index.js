function main() {
  let incBtn = document.querySelector(".inc");
  let decBtn = document.querySelector(".dec");
  let resetBtn = document.querySelector(".reset");
  let counter = document.querySelector("h1");

  let count = 0;

  incBtn.addEventListener("click", () => {
    count = count + 1;
    counter.innerText = count;
  });

  decBtn.addEventListener("click", () => {
    count = count - 1;
    counter.innerText = count - 1;
  });

  resetBtn.addEventListener("click", () => {
    counter.innerText = 0;
  });

  counter.innerText = count;
}

main();
