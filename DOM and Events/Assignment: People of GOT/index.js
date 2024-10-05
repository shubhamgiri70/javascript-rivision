let root = document.querySelector(".people");
let allTags = document.querySelector(".all-tags");
let inputText = document.getElementById("input-text");

let data = got.houses;
let allPeople = data.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

function createCards(allPeople) {
  root.innerHTML = "";
  allPeople.forEach((people) => {
    let li = document.createElement("li");
    let image = document.createElement("img");
    image.src = people.image;
    image.alt = people.name;
    let h2 = document.createElement("h2");
    h2.innerText = people.name;
    let p = document.createElement("p");
    p.innerText = people.description;
    let btn = document.createElement("button");
    btn.innerText = "KNOW MORE!";
    btn.addEventListener("click", () => {
      window.open(people.wikiLink, "__Blank");
    });

    li.append(image, h2, p, btn);
    root.append(li);
  });
}

createCards(allPeople);

function createTags() {
  data.forEach((house) => {
    let li = document.createElement("li");
    li.innerText = house.name;
    li.addEventListener("click", () => {
      let filterPeople = house.people;
      createCards(filterPeople);
    });

    allTags.append(li);
  });
}

function anotherTag() {
  let resetTagbtn = document.createElement("li");
  resetTagbtn.innerText = "All People";
  resetTagbtn.addEventListener("click", () => {
    createCards(allPeople);
  });

  allTags.prepend(resetTagbtn);
}

createTags();
anotherTag();

inputText.addEventListener("keyup", (event) => {
  let value = event.target.value.toLowerCase();
  if (event.key === "Enter") {
    let filterPeople = allPeople.filter((people) => {
      if (people.name.toLowerCase().includes(value)) {
        return people;
      }
    });
    createCards(filterPeople);
    inputText.value = "";
  }
});
