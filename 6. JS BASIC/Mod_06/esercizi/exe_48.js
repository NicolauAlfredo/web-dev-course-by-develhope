const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: "gamer" },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: "sportsman" },
  { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: "gamer" },
  { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: "photographer" },
];

// Funzione per restituire il motto in base all'hobby
function getMotto(hobby) {
  if (hobby === "gamer") {
    return "Life Is a Game, Play to Win!";
  } else if (hobby === "sportsman") {
    return "Never give up!";
  } else if (hobby === "photographer") {
    return "A picture is worth a thousand words!";
  }
}

// Funzione per trovare lo studente più giovane
function getYoungest(students) {
  let youngest = students[0];

  for (let i = 1; i < students.length; i++) {
    if (students[i].age < youngest.age) {
      youngest = students[i];
    }
  }

  return youngest;
}

// Funzione per trovare il cognome più lungo
function getLongestSurname(students) {
  let longest = students[0];

  for (let i = 1; i < students.length; i++) {
    if (students[i].surname.length > longest.surname.length) {
      longest = students[i];
    }
  }

  return longest.surname;
}

// Funzione principale
function printStudents(students) {
  for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
    console.log(getMotto(students[i].hobby));
  }

  const youngest = getYoungest(students);
  console.log("Il più giovane è", youngest.name);

  const longestSurname = getLongestSurname(students);
  console.log("Il cognome più lungo è", longestSurname);
}

// Esecuzione iniziale
printStudents(students);

// Aggiungere Elena al terzo posto (indice 2)
students.splice(2, 0, {
  id: 5,
  name: "Elena",
  surname: "Pappalardo",
  age: 23,
  hobby: "photographer",
});

// Eseguire di nuovo la funzione
printStudents(students);