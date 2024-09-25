let first = document.querySelectorAll(".first li");

first.forEach((box, index) => {
  box.addEventListener("click", (event) => {
    event.target.innerHTML = index;

    setTimeout(() => {
      event.target.innerHTML = "";
    }, 5000);
  });
});

let second = document.querySelector(".second");

second.addEventListener("click", (event) => {
  let text = event.target.dataset.text;
  if (text) {
    event.target.innerText = text;
    setTimeout(() => {
      event.target.innerText = "";
    }, 5000);
  }
});
