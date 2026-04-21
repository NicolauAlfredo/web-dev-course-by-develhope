/* Lezione 03 - La destrutturazione */

const numbers = [1, 2, 3, 4, 5];

// const firstElement = numbers[0];
// const secondElement = numbers[1];

const [firstElement, secondElement, x] = numbers;

console.log(firstElement);
console.log(secondElement);
console.log(x);

// Objects

const student = {
  firstName: "Nicolau",
  lastName: "Alfredo",
  age: 27,
  x: 100,
};

// const firstName = student.firstName;
// const lastName = student.lastName;
// const age = student.age;
// const myVar = student.x
const { age, firstName: name, x: myVar } = student;

console.log(name);
console.log(x);
console.log(age);

// Rinominare
console.log(myVar);

// Other way
function logStudentName({ firstName }) {
  console.log(firstName);
}

logStudentName(student);
