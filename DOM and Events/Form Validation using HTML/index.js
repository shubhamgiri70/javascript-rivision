let form = document.querySelector("form");

let userData = {};

function doesNameContainNum(str) {
  return str.split("").some((e) => Number(e));
}

function handleSubmit(event) {
  event.preventDefault();
  let elements = event.target.elements;
  let username = elements.username.value;
  let name = elements.name.value;
  let email = elements.email.value;
  let password = elements.password.value;
  let cnfPassword = elements["cnf-pass"].value;
  let phone = elements.phone.value;

  if (username.length < 5) {
    elements.username.nextElementSibling.innerText = ` Username can't be less than 4 characters`;
    elements.username.classList.add("error");
  } else {
    elements.username.classList.remove("error");
    elements.username.classList.add("success");
    userData.username = username;
    elements.username.value = "";
  }

  if (doesNameContainNum(name)) {
    elements.name.nextElementSibling.innerText = ` Name can't be numbers`;
    elements.name.classList.add("error");
  } else {
    elements.name.classList.remove("error");
    elements.name.classList.add("success");
    userData.name = name;
    elements.name.value = "";
  }

  if (!email.includes("@")) {
    elements.email.nextElementSibling.innerText = ` 
    Email must contain the symbol @`;
    elements.email.classList.add("error");
  } else if (email.length < 7) {
    elements.email.nextElementSibling.innerText = ` 
    Email must be at least 6 characters`;
    elements.email.classList.add("error");
  } else {
    elements.email.classList.remove("error");
    elements.email.classList.add("success");
    userData.email = email;
    elements.email.value = "";
  }

  if (isNaN(phone)) {
    elements.phone.nextElementSibling.innerText = ` 
    Phone numbers can only be a number`;
    elements.phone.classList.add("error");
  } else if (phone.length < 8) {
    elements.phone.nextElementSibling.innerText = ` 
    Length of phone number can't be less than 7`;
    elements.phone.classList.add("error");
  } else {
    elements.phone.classList.remove("error");
    elements.phone.classList.add("success");
    userData.phone = phone;
    elements.phone.value = "";
  }

  if (password !== cnfPassword) {
    elements["cnf-pass"].nextElementSibling.innerText = ` 
    Password and confirm password must be same`;
    elements["cnf-pass"].classList.add("error");
  } else {
    elements["cnf-pass"].classList.remove("error");
    elements["cnf-pass"].classList.add("success");
    userData.cnfPassword = cnfPassword;
    elements.password.value = "";
    elements["cnf-pass"].value = "";
  }
  console.log(userData);
}

form.addEventListener("submit", handleSubmit);
