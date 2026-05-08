const emailInput = document.querySelector(".email");
const firstNameInput = document.querySelector(".firstname");
const lastNameInput = document.querySelector(".lastname");

const titleName = document.querySelector(".title-name");
const printedForm = document.querySelector(".printedform");
const btn = document.querySelector(".btn");

function printUser(user) {
  titleName.innerText = user.firstname;

  printedForm.innerText = `
Email: ${user.email}
Nome: ${user.firstname}
Cognome: ${user.lastname}
    `;
}

const savedUser = localStorage.getItem("user");

if (savedUser !== null) {
  const user = JSON.parse(savedUser);

  firstNameInput.value = user.firstname;
  lastNameInput.value = user.lastname;
  emailInput.value = user.email;

  printUser(user);
}

btn.addEventListener("click", () => {
  const user = {
    email: emailInput.value,
    firstname: firstNameInput.value,
    lastname: lastNameInput.value,
  };

  localStorage.setItem("user", JSON.stringify(user));

  printUser(user);
});
