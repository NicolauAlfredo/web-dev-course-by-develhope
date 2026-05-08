/* Lezione 01 - I metodi della console */

// Visualizza un messaggio nella console
console.log("Hello, World!");

// Visualizaza un messagio di errore nella console
console.error("This is my error");

// Visualizza un messaggio di avvertimento nella console
console.warn("This is my warning");

// Visualizza dati tabulari come una tabella
const users = [
  { name: "Nicolau", age: 27 },
  { name: "Alfredo", age: 28 },
];
console.table(users);

// Raggruppa messaggi correlati
console.group("User details");
console.log("Name: Nicolau");
console.log("Age: 27");

console.groupEnd();

// Stampa un messaggio di errore se l'asserzione è falsa
console.assert(1 === 2, "Printing!");
