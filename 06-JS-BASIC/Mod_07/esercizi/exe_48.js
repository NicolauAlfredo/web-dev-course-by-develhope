const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: "gamer" },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: "sportsman" },
  { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: "gamer" },
  { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: "photographer" },
];

// Mappa hobby → motto
const mottoMap = {
  gamer: "Life Is a Game, Play to Win!",
  sportsman: "Never give up!",
  photographer: "A picture is worth a thousand words!",
};

// Arrow function
const getMotto = (hobby) => mottoMap[hobby] || "No motto available";

// Studente più giovane (reduce)
const getYoungest = (students) =>
  students.reduce((youngest, current) =>
    current.age < youngest.age ? current : youngest
  );

// Cognome più lungo (restituisce oggetto per coerenza)
const getLongestSurname = (students) =>
  students.reduce((longest, current) =>
    current.surname.length > longest.surname.length ? current : longest
  );

// Funzione principale
const printStudents = (students) => {
  students.forEach((student) => {
    console.log(`${student.name} ${student.surname}`);
    console.log(getMotto(student.hobby));
  });

  const youngest = getYoungest(students);
  console.log(`Il più giovane è ${youngest.name} ${youngest.surname}`);

  const longest = getLongestSurname(students);
  console.log(
    `Il cognome più lungo è ${longest.surname} (${longest.name})`
  );
};

// Esecuzione iniziale
printStudents(students);

// Aggiunta Elena
students.splice(2, 0, {
  id: 5,
  name: "Elena",
  surname: "Pappalardo",
  age: 23,
  hobby: "photographer",
});

// Riesecuzione
printStudents(students);
