// Seleziona l'input, il bottone e la lista
const input = document.querySelector(".todo__input");
const button = document.querySelector(".todo__button");
const list = document.querySelector(".todo__list");

// Crea una funzione per aggiungere un nuovo task
function addTask() {
  // Recupera il valore scritto nell'input
  const taskText = input.value;

  // Controlla se l'input è vuoto
  if (taskText === "") {
    return;
  }

  // Crea un nuovo elemento li
  const li = document.createElement("li");
  li.classList.add("todo__item");

  // Crea un checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Crea un elemento span per il testo del task
  const span = document.createElement("span");
  span.innerText = taskText;

  // Inserisce checkbox e testo dentro il li
  li.appendChild(checkbox);
  li.appendChild(span);

  // Inserisce il li dentro la lista
  list.appendChild(li);

  // Svuota l'input dopo aver aggiunto il task
  input.value = "";
}

// Quando clicco sul bottone, aggiungo il task
button.addEventListener("click", addTask);