let form = document.querySelector("form");

let userInfo = {};

function handleSubmit(event) {
  event.preventDefault();
  userInfo.email = event.target.elements.text.value;
  userInfo.gender = event.target.elements.gender.value;
  userInfo.isAgree = event.target.elements.checkbox.checked;

  console.log(userInfo);
}

form.addEventListener("submit", handleSubmit);
