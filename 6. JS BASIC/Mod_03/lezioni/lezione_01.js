/* Lezione 01 - Gli operatori logici */

const a = 5;
const b = 20;
let result = 0;

// Operatore AND (&&)
result = a > 2 && b < 5;
console.log(result);

// Operatore OR (||)
result = a > 2 || b < 5;
console.log(result);

// Concatenazione di Operatori
result = a > 2 || (b < 5 && a + b > 20);
console.log(result);

// Operatore NOT (!)
let c = true
let d = !c

console.log(c)
console.log(d)