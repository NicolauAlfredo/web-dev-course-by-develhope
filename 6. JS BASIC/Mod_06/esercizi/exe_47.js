const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

// Rimuovere Giovanni (che è in posizione 2 -> terzo elemento)
students.splice(2, 1);

// splice(indice, quanti elementi rimuovere)

// Aggiungere Francesco
students.push({
  id: 3,
  name: "Francesco",
  surname: "Verdi",
  age: 41,
});

// push aggiunge un elemento alla fine dell'array
console.log(students);
