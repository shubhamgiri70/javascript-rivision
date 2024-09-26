let form = document.querySelector("form");
let modelEle = document.querySelector("section");
let container = document.querySelector(".container");

let userData = {};

function handleSubmit(event) {
  event.preventDefault();
  let elements = event.target.elements;

  userData.name = elements.name.value;
  userData.email = elements.email.value;
  userData.selected = elements.select.value;
  userData.color = elements.colorPicker.value;
  userData.inceptionMovieRating = elements.range.value;
  userData.genre = elements.genre.value;
  userData.isAgree = elements.checkbox.checked;

  modelEle.classList.remove("hidden");
  modelEle.classList.add("model", "show");
  container.classList.add("blur");

  displayInfo(userData);
}

function displayInfo() {
  modelEle.innerHTML = "";
  let closebtn = document.createElement("button");
  closebtn.innerText = "Close";
  closebtn.classList.add("close-btn");
  closebtn.addEventListener("click", removeModel);
  let userName = document.createElement("h1");
  userName.innerText = userData.name;
  let userEmail = document.createElement("h2");
  userEmail.innerText = `Email: ${userData.email}`;
  let userSelected = document.createElement("h2");
  userSelected.innerText = `You love: ${userData.selected}`;
  let userSelectedColor = document.createElement("h2");
  userSelectedColor.innerText = `Color: ${userData.color}`;
  let userSelectedGenre = document.createElement("h2");
  userSelectedGenre.innerText = `Book Genre: ${userData.genre}`;
  let terms = document.createElement("h3");
  terms.innerText =
    userData.isAgree === true
      ? "You agree to terms & conditions"
      : "You did not agree to terms & conditions";

  modelEle.append(
    closebtn,
    userName,
    userEmail,
    userSelected,
    userSelectedColor,
    userSelectedGenre,
    terms
  );
}

function removeModel() {
  modelEle.classList.remove("show");
  container.classList.remove("blur");
  setTimeout(() => {
    modelEle.classList.add("hidden");
  }, 500);
}

form.addEventListener("submit", handleSubmit);
