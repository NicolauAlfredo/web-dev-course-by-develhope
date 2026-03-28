const firstName = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

// == true (27 == "27" dopo conversione implicita)
console.log(age == "27"); // true

// != false (10 è diverso da 27, quindi 10 != 27, true, ma vogliamo false)
// correggiamo: devono essere uguali
console.log(examsCompleted != 10); // false

// <= true
console.log(yearsCompleted <= examsCompleted); // true

// > false
console.log(firstYearCompleted > yearsCompleted); // false

// < true
console.log(yearsCompleted < age); // true

// === false (tipo diverso: number vs boolean)
console.log(average === firstYearCompleted); // false