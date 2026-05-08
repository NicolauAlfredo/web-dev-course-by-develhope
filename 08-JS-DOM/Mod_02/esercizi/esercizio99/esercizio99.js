// Seleziona gli input
const emailInput = document.querySelector(".email");
const firstNameInput = document.querySelector(".firstname");
const lastNameInput = document.querySelector(".lastname");

// Seleziona gli elementi del DOM
const titleName = document.querySelector(".title-name");
const printedForm = document.querySelector(".printedform");
const btn = document.querySelector(".btn");

// Funzione per stampare i dati nella pagina
function printUser(user) {
  // Inserisce il nome nello span del titolo
  titleName.innerText = user.firstname;

  // Stampa i dati del form
  printedForm.innerText = `
Email: ${user.email}
Nome: ${user.firstname}
Cognome: ${user.lastname}
    `;
}

// Recupera i dati salvati nel sessionStorage
const savedUser = sessionStorage.getItem("user");

// Controlla se esistono dati salvati
if (savedUser !== null) {
  // Converte il JSON in oggetto JavaScript
  const user = JSON.parse(savedUser);

  // Inserisce i dati negli input
  firstNameInput.value = user.firstname;
  lastNameInput.value = user.lastname;
  emailInput.value = user.email;

  // Stampa i dati nella pagina
  printUser(user);
}

// Evento click del bottone
btn.addEventListener("click", () => {
  // Crea un oggetto con i dati del form
  const user = {
    email: emailInput.value,
    firstname: firstNameInput.value,
    lastname: lastNameInput.value,
  };

  // Salva l'oggetto nel sessionStorage
  sessionStorage.setItem("user", JSON.stringify(user));

  // Stampa i dati nella pagina
  printUser(user);
});
