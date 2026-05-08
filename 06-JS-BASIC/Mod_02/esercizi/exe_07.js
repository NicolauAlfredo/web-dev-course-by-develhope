// Variabili iniziali
let hello = 'Ciao';       // stringa
let age = 18;             // numero
let isGraduated = false;  // booleano

// Casting: trasformiamo i tipi delle variabili

let helloNumber = Number(hello);  
// Number('Ciao') prova a convertire la stringa in numero
// 'Ciao' non è un numero, quindi il risultato sarà NaN (Not a Number)

let ageBoolean = Boolean(age);  
// Boolean(18) converte il numero in booleano
// Tutti i numeri diversi da 0 diventano true

let isGraduatedString = String(isGraduated);  
// String(false) converte il booleano in stringa
// Risultato: "false"

// Stampiamo i risultati in console
console.log(helloNumber);        // NaN
console.log(ageBoolean);         // true
console.log(isGraduatedString);  // "false"
