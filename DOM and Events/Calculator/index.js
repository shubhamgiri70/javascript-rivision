let input = document.getElementById("input");
let allbtn = document.querySelectorAll("button");

let initialValue = 0;
input.value = initialValue;

function handleClick(event) {
  const btnClass = event.target.classList;

  if (btnClass.contains("clear")) {
    input.value = initialValue;
    return;
  }

  if (btnClass.contains("equal")) {
    input.value = eval(input.value);
    return;
  }

  if (btnClass.contains("dot")) {
    if (!input.value.includes(".")) {
      input.value += ".";
    }
    return;
  }

  if (input.value == initialValue) {
    input.value = event.target.innerText;
  } else {
    input.value += event.target.innerText;
  }
}

allbtn.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});
