/* Lezione 06 - Lo scope delle variabili */

// Quando le variabili sono definite con let or const
let a = 42;
console.log(a);

function myFunction() {
  let b = 22;
  console.log(b);

  if (true) {
    // Va bene!!
    console.log(a);
    console.log(b);
    console.log(c);
  }
}

// ERRORE !!
console.log(b);
console.log(c);

myFunction();

// Quando le variabili sono definite con var viene spostata in cima della funzioni
