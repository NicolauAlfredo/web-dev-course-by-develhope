/* Lezione 02 - I metodi degli array */

let numbers = [1, 2, 3];

// Aggiungere (push) elemento nella fine dell'array
numbers.push(4, 5, 6);
console.log(`Elemento aggiunto alla fine: ${numbers}`);

// Rimovere (pop) elemento al fondo dell'array
numbers.pop();
console.log(`Elemento rimoso alla fine dell'array: ${numbers}`);

// Aggiungere (unshift) elemento all'inizio dell'array
numbers.unshift(0);
console.log(`Elemento aggiunto nell'inizio dell'array: ${numbers}`);

// Rimovere (shift) elemento all'inizio dell'array
numbers.shift();
console.log(`Elemento rimoso all'inizio dell'array: ${numbers}`);

// Convertere un'array ad una string
let names = ["Nicolau", "Alfredo"];

console.log(`Elementi convertiti in String: ${names.join(" ")}`);
console.log(`Tipo: ${typeof names.join()}`);

// ForEach
names.forEach((item) => {
  console.log(`Elemento: ${item}`);
});
