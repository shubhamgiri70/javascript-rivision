let allBoxes = document.querySelectorAll("div");

function handleClick(event) {
  console.log(event.target);
}

allBoxes.forEach((box) => {
  box.addEventListener("click", handleClick);
});

