/* Lezione 04 - I metodi degli oggetti */

let person = {
  name: "Nicolau",
  age: 22,
};

let employeeData = {
  office: "12A",
  position: "CEO",
};

let employee = Object.assign(
  {
    profession: "Web Dev",
  },
  person,
  employeeData,
);

console.log(employee);
