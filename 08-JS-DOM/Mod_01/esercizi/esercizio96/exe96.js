// Seleziona il bottone
const btn = document.querySelector(".btn");

// Seleziona il body
const body = document.body;

// Aggiunge un evento click al bottone
btn.addEventListener("click", () => {
  // Aggiunge o rimuove la classe theme
  body.classList.toggle("theme");
});
