/* Lezione 01 - Introduzione agli array */

// Numbers
let numbers = [
  1, // indice: 0
  2, // indice: 1
  3, // indice: 2
  4, // indice: 3
  5, // indice: 4
  6, // indice: 5
];

let three = numbers[2];
// console.log(three);

// Strings
let persons = ["Nicolau", "Alfredo", "Leão", "Benedito"];

let nicolau = persons[0];
// console.log(nicolau);

// Numero di elementi dentro dell'array
// console.log(persons.length);

// Stampare tutti gli elementi
for (let i = 0; i < persons.length; i++) {
  // console.log(persons[i]);
}

// Object dentro delle'array
let person1 = [
  { name: "Eliandra", age: 20 },
  { name: "Benedito", age: 21 },
];

// Stampare tutti gli elementi (REFERIMENTO)
for (let i = 0; i < person1.length; i++) {
  let person = person1[i];
  // console.log(`${person.name} is ${person.age} years old.`);
}

// Array dentro l'Object (REFERIMENTO)
let person2 = {
  name: "Nicolau",
  age: 23,
  favoriteColors: ["White", "Black"],
};

// console.log(person2.favoriteColors[1]);

// Copy Array
let copyPerson2 = { ...person1 };
copyPerson2.name = "Alfredo";
copyPerson2.age = 22

console.log("-----------------------")
console.log(copyPerson2);
