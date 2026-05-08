const student = {
  info: { name: "Bob", age: 25 },
  grades: { math: 95, science: 89 }
};

// destrutturazione
const { info: { name, age }, grades: { math: grade } } = student;

console.log(name);  // "Bob"
console.log(age);   // 25
console.log(grade); // 95