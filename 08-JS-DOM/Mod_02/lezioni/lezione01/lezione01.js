const form = document.querySelector(".form");

const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const accountResult = document.querySelector(".account-result");
const fullNameEl = document.querySelector(".account-result__full-name");
const emailEl = document.querySelector(".account-result__email");
const passwordEl = document.querySelector(".account-result__password");

function createAccount(event) {
  event.preventDefault();

  const user = {
    name: nameInput.value,
    surname: surnameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  localStorage.setItem("name", user.name);
  localStorage.setItem("surname", user.surname);
  localStorage.setItem("email", user.email);
  localStorage.setItem("password", user.password);

  fullNameEl.innerText = `${user.name} ${user.surname}`;
  emailEl.innerText = user.email;
  passwordEl.innerText = user.password;

  accountResult.style.display = "block";
}

form.addEventListener("submit", createAccount);
