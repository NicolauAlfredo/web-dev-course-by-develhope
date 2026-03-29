/* Lezione 05 - Le arrow function */

let sum = (a, b) => {
  return a + b;
};
console.log(sum(1, 4));

let decrease = (a, b) => a - b;
console.log(decrease(4, 2));

setTimeout(() => console.log("Hello"), 2500);

setTimeout(() => {
  return console.log("Hello");
}, 2500);
