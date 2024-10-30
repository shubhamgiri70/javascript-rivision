const image = document.querySelector("img");
const name = document.querySelector("h3");
const p = document.querySelector("p");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const input = document.querySelector("input");

let xhr = new XMLHttpRequest();

function displayUI(data) {
  image.src = data.avatar_url;
  name.innerText = data.name;
  p.innerText = data.company;
  followers.innerText = `Followers: ${data.followers}`;
  following.innerText = `Following: ${data.following}`;
}

function handleInput(event) {
  if (event.key === "Enter") {
    xhr.open("GET", `https://api.github.com/users/${event.target.value}`);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      displayUI(userData);
    };
    xhr.onerror = function () {
      console.log("Somthing went wrong");
    };
    xhr.send();
    event.target.value = "";
  }
}

input.addEventListener("keydown", handleInput);
