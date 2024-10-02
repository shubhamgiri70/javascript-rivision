function main() {
  let h1 = document.querySelector("h1");
  let incbtn = document.querySelector(".inc");
  let decbtn = document.querySelector(".dec");
  let resetbtn = document.querySelector(".reset");

  let counter = localStorage.getItem("count") || 0;
  h1.innerText = counter;

  incbtn.addEventListener("click", () => {
    counter = Number(counter) + 1;
    h1.innerText = counter;
    localStorage.setItem("count", counter);
  });

  decbtn.addEventListener("click", () => {
    counter = Number(counter) - 1;
    h1.innerText = counter;
    localStorage.setItem("count", counter);
  });

  resetbtn.addEventListener("click", () => {
    counter = 0;
    h1.innerText = counter;
    localStorage.setItem("count", counter);
  });
}

main();
