let root = document.querySelector("form");
let allCards = document.querySelector(".all-cards");

let userData = JSON.parse(localStorage.getItem("cards")) || [];

function handleSubmit(event) {
  allCards.innerHTML = "";
  event.preventDefault();
  let title = event.target.elements.title.value;
  let category = event.target.elements.category.value;

  userData.title = title;
  userData.category = category;
  userData.push({ title, category });
  localStorage.setItem("cards", JSON.stringify(userData));
  createCard(userData, allCards);

  event.target.elements.title.value = "";
  event.target.elements.category.value = "";
}

function handleEdit(event, info, id) {
  let ele = event.target;
  let input = document.createElement("input");
  input.type = "text";
  input.value = info;
  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      let updatedValue = e.target.value;
      userData[id].title = updatedValue;
      createCard();
    }
  });

  input.addEventListener("blur", (e) => {
    let updatedValue = e.target.value;
    userData[id].title = updatedValue;
    createCard();
  });

  let parentEle = event.target.parentElement;
  parentEle.replaceChild(input, ele);
}

function createCard(data = userData, allCards) {
  let fragment = new DocumentFragment();
  data.forEach((card, index) => {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerText = card.title;
    p.addEventListener("dblclick", (event) =>
      handleEdit(event, card.title, index)
    );

    let h2 = document.createElement("h2");
    h2.innerText = card.category;

    li.append(p, h2);
    fragment.appendChild(li);
  });
  allCards.append(fragment);
}

createCard(userData, allCards);

root.addEventListener("submit", handleSubmit);
