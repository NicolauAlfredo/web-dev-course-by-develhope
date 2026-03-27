/* Lezione 05 - Conversione tra i tipi di dati */
let string = "5";
let anotherString = "6";

console.log("Senza conversione: ", string + anotherString);

// Type Casting - String to Number (Conversione manuale)
console.log("con conversione: ", Number(string) + Number(anotherString));

// Not a number
let ciao = "Ciao";
console.log("Not a Number: ", Number(ciao));

// Type Question (Auto conversione)
let a = "4";
let b = "2";

console.log(a * b);

// Type Question - Number to String (Auto conversione)
let message = "Ho pensato al numero ";
let n1 = 42;

console.log(message + n1);

// Type Casting - Number to String (Conversione manuale)
console.log(message + Number(n1));

// Boolean Casting
let n2 = 55;

console.log("Conversione booleana: ", Boolean(n2));

// Tipo della variabile
let hello = "Hello"
console.log(typeof hello)