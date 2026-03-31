/* Lezione 02 - L'operatore in e il ciclo for in */

let person = {
  name: "Nicolau",
  age: 27,
};

for (let key in person) {
  console.log(key + ":", person[key]);
}
