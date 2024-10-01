let input = document.getElementById("movie-input");
let root = document.querySelector("ul");

let watchedMovies = [];

function handleInput(event) {
  if (event.key === "Enter") {
    const value = event.target.value;

    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", (event) => {
      if (event.target.checked === true) {
        watchedMovies.push(value);
      } else {
        watchedMovies = watchedMovies.filter((movie) => movie !== value);
      }
    });

    let p = document.createElement("p");
    p.innerText = value;
    let removebtn = document.createElement("small");
    removebtn.innerText = "❌";
    removebtn.addEventListener("click", (event) => {
      let parent = event.target.parentElement;
      parent.nextElementSibling.remove();
      parent.remove();
    });

    let hr = document.createElement("hr");

    li.append(checkbox, p, removebtn);
    root.append(li, hr);

    input.value = "";
  }
}

input.addEventListener("keyup", handleInput);
