/* Lezione 02 - Il metodo costruttore */

// Creare una funzione costruttrice

function Person(name, surname, age, profession) {
  ((this.name = name),
    (this.surname = surname),
    (this.age = age),
    (this.profession = profession),
    (this.growUp = function () {
      this.age += 1;
    }),
    (this.sayHello = () => {
      console.log(
        `Hello, my name is ${this.name} ${this.surname} and I am ${this.age} years old`,
      );
    }));
}

let person1 = new Person("Nicolau", "Alfredo", 22, "Programmer");
let person2 = new Person("Alfredo", "Leão", 40, "UX/UI Design");

person1.sayHello();

person2.sayHello();
