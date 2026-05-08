/* Lezione 01 - setTimeout & setInterval */

// setTimeout

// Function
function hello() {
  console.log("Hello, World");
}

setTimeout(hello, 1000);

// Anonymous Function

console.log(1);

setTimeout(() => {
  console.log("Hello, World");
  console.log(2);
}, 1000);

console.log(3);

// setInterval

let counter = 0;

console.log("Start");

// Start
const id = setInterval(() => {
  counter++;
  console.log(`Interval 1 - ${counter}`);
}, 1000);

setInterval(() => {
  counter++;
  console.log(`Interval 2`);
}, 2000);

console.log("Lorem ipsum");

// Stop
setTimeout(() => {
  clearInterval(id);
}, 5000);
