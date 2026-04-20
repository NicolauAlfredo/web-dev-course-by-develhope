/* Lezione 01 - I metodi degli array */

const numbers = [1, 2, 3, 4, 5];

// Callback
function loogNumber(number) {
  console.log(number);
}

// For each
numbers.forEach(loogNumber);

// Anonymous function
numbers.forEach((number) => {
  // ...
  console.log(number);
});

// MAP
const doubled = numbers.map((number) => number * 2);

console.log(doubled); // [2, 4, 6, 8, 10]

// ARRAY Of Objects
const users = [
  {
    name: "Inês",
    surname: "Alfredo",
    age: 38,
  },

  {
    name: "Eliandra",
    surname: "Alfredo",
    age: 20,
  },

  {
    name: "Nicolau",
    surname: "Alfredo",
    age: 27,
  },
];

const userNames = users.map((user) => {
  user.age = user.age + 1;

  return user;
});

console.log(userNames);

// Find

const myUser = users.find((user) => user.name === "Eliandra");

console.log(myUser);

// Filter
const filterUser = users.filter((user) => user.surname === "Alfredo");

console.log(filterUser);

// Reduce
const sum = numbers.reduce((a, number) => a + number, 0);

console.log(sum);
