// Seleziona la <ul> tramite il suo id
const ul = document.querySelector("#my-ul");

// Stampa la <ul> nel console
console.log(ul);

// Seleziona il primo elemento con la classe "my-li"
const li = document.querySelector(".my-li");

// Stampa il primo <li> trovato
console.log(li);

// Seleziona tutti gli elementi con la classe "my-li"
const listItems = document.querySelectorAll(".my-li");

// Stampa la NodeList con tutti i <li>
console.log(listItems);

// Seleziona l'input tramite l'attributo name
const input = document.querySelector("[name='my-input']");

// Stampa l'input nel console
console.log(input);

// Seleziona la <ul> usando getElementById
const ulById = document.getElementById("my-ul");

// Stampa la <ul> trovata tramite id
console.log(ulById);

// Seleziona tutti gli elementi con la classe "my-li"
// usando getElementsByClassName
const listItemsByClasseName = document.getElementsByClassName("my-li");

// Stampa la HTMLCollection dei <li>
console.log(listItemsByClasseName);
