// Click event
const btn = document.querySelector(".my-btn");
const ul = document.querySelector("#my-ul");
const input = document.querySelector(".my-input");

btn.addEventListener("click", (event) => {
  // Recupera il valore dell'input
  const inputValue = input.value;

  // Controlla se l'input è vuoto
  if (inputValue === "") {
    return;
  }

  // Crea un nuovo elemento li
  const li = document.createElement("li");

  // Inserisce il testo dell'input nel li
  li.innerText = inputValue;

  // Aggiunge la classe
  li.classList.add("my-li");

  // Inserisce il li nella lista
  ul.appendChild(li);

  // Svuota l'input
  input.value = "";

  console.log("btn event", event);
});

const h1 = document.querySelector(".my-title");

h1.addEventListener("click", (event) => {
  console.log("h1 event", event);
});

// Change event
const select = document.querySelector(".my-select");

select.addEventListener("change", (event) => {
  console.log("Selected event", event);
});

// Keydown event
input.addEventListener("keydown", (event) => {
  console.log("Input event", event);
});

// Mouse events
const link = document.querySelector(".my-link");

link.addEventListener("mouseover", (event) => {
  console.log("Mouseover event", event);
});

link.addEventListener("mouseout", (event) => {
  console.log("Mouseout event", event);
});
