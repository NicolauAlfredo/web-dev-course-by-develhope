// Seleziona l'elemento h1 tramite la classe
const h1 = document.querySelector(".my-title");

// Recupera il testo dell'h1
const h1Text = h1.innerText;

// Stampa il testo nel console
console.log(h1Text);

// Modifica il testo dell'h1
h1.innerText = "My edited title 1";

// Modifica il testo dopo 2 secondi
/**
setTimeout(() => {
  h1.innerText = "My edited title 2";
}, 2000);
*/

// Inserisce un nuovo tag HTML dentro l'h1
// In questo caso il testo sarà in corsivo
h1.innerHTML = "<i>My edited title 1</i>";

// Aggiunge una nuova classe dopo 2 secondi
setTimeout(() => {
  h1.classList.add("my-title-red");
}, 2000);

// Rimuove la classe dopo 4 secondi
setTimeout(() => {
  h1.classList.remove("my-title-red");
}, 4000);

// Controlla se la classe esiste già
// Se esiste la rimuove, altrimenti la aggiunge
setTimeout(() => {
  if (h1.classList.contains("my-title-red")) {
    h1.classList.remove("my-title-red");
  } else {
    h1.classList.add("my-title-red");
  }
}, 6000);

// Usa il metodo toggle per aggiungere o rimuovere la classe
setTimeout(() => {
  h1.classList.toggle("my-title-red");
}, 8000);

// Seleziona il primo link con classe "my-link"
const a = document.querySelector(".my-link");

// Modifica il testo e l'attributo href del link
setTimeout(() => {
  a.innerText = "Nicolau Alfredo";
  a.setAttribute("href", "https://nicolaualfredo.com");
}, 2000);

// Seleziona la lista <ul>
const ul = document.querySelector("#my-ul");

// Crea un nuovo elemento <li> dopo 2 secondi
setTimeout(() => {
  // Crea un nuovo elemento li
  const li = document.createElement("li");

  // Inserisce il testo nel li
  li.innerText = "My Added element";

  // Aggiunge una classe al li
  li.classList.add("my-li");

  // Inserisce il li dentro la ul
  ul.appendChild(li);
}, 2000);

// Rimuove la lista <ul> dopo 10 secondi
setTimeout(() => {
  ul.remove();
}, 10000);

// Seleziona l'input
const input = document.querySelector(".my-input");

// Legge il valore dell'input dopo 1 secondo
setTimeout(() => {
  const value = input.value;

  // Stampa il valore nel console
  console.log(value);
}, 1000);

// Modifica il valore dell'input dopo 2 secondi
setTimeout(() => {
  input.value = "Nicolau Alfredo";
}, 2000);
