/* Lezione 04 - Rest Parameter */

function sum(x, y, ...params) {
  console.log(x);
  console.log(y);
  console.log(params);
  // return params.reduce((a, param) => a + param, 0);
}

const mySum = sum(5, 6, 8, 9, "Ciao", { a: "test" });

console.log(mySum);
