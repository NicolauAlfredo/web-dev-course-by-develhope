/* Lezione 06 - Gli oggetti nidificati */

let person = {
  name: "Nicolau",
  age: 27,
  address: {
    city: "Chibia",
    streetName: "Rua Principal",
    number: 24,
    otherData: {
      foo: "bar",
      bar: "baz",
    },
  },
};

console.log(person.address.otherData.bar);

// Optional Change
console.log(person.address?.otherData.bar);

// NULLISH COALESCING OPERATOR
console.log(person.address ?? "Addres not found!");
