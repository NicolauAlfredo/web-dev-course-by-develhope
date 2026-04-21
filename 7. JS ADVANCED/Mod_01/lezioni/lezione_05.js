/* Lezione 05 - Spread Operator */

const firstArray = [1, 2, 3, 4];
const secondArray = [5, 6, 7, 8];

const myArray = [...firstArray, ...secondArray];

console.log(myArray);

// Assign
const thirdArray = [...secondArray];

secondArray.push(5);

console.log(thirdArray);

// Object
const person = {
  name: "Nico",
  surname: "Alfredo",
  city: "Chibia",
};

console.log(person);

const copyPerson = { ...person, age: 27, city: "Sassari" };

console.log(copyPerson);
