/* Lezione 03 - Valore Vs Riferimento */

let person = {
  name: "Nicolau",
  age: 27,
  fn: () => {},
};

let personCopy = person;

person.name = "Alfredo";

console.log(personCopy, person, person == personCopy);

// FUNCTION REFERENCE TYPE

function fn() {}

let fn2 = fn;

console.log(fn2 == fn);

// Copy object without modifier the original
let copyPerson = {};
for (let key in person) {
  copyPerson[key] = person[key];
}

copyPerson.name = "Leão";

console.log(person, copyPerson, copyPerson === person);
