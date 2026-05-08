// 1. Creo una variabile booleana
const isRunning = true;

// 2. Stampo il valore e il tipo
console.log(`Valore: ${isRunning}, Tipo: ${typeof isRunning}`); // true, "boolean"

// 3. Casting a number
const isRunningNumber = Number(isRunning);
// true diventa 1
console.log(`Valore: ${isRunningNumber}, Tipo: ${typeof isRunningNumber}`); // 1, "number"

// 4. Casting a string
const isRunningString = String(isRunning);
// true diventa "true"
console.log(`Valore: ${isRunningString}, Tipo: ${typeof isRunningString}`); // "true", "string"

// 5. Casting a boolean
const isRunningBoolean = Boolean(isRunning);
// rimane true
console.log(`Valore: ${isRunningBoolean}, Tipo: ${typeof isRunningBoolean}`); // true, "boolean"