/* Lezione 01 - Introduzione agli oggetti */

let person = {
  name: "Benedito",
  age: 27,
  gender: "M",
  profession: "Web Dev",
  married: false,
  sayHello: function () {
    console.log("Hello " + this.name);
  },
};

// Stampare dei resultati
console.log(person);
console.log(person.name);
person.sayHello();

// Cambiare il valore
person.name = "Nicolau"

// Aggiungere proprieta
person.surname = "Alfredo"

console.log(person);