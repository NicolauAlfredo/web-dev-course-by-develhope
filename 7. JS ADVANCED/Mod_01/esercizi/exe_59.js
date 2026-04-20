const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

// 1. forEach → stampa i nomi
studenti.forEach((studente) => console.log(studente.nome));

// 2. find → primo studente con voto > 90
const studenteTop = studenti.find((studente) => studente.voto > 90);
console.log("Studente con voto > 90:", studenteTop);

// 3. reduce → media dei voti
const media = studenti.reduce((acc, studente, _, array) => {
  acc += studente.voto;
  return acc / array.length;
}, 0);

console.log("Media voti:", media);

// ⚠️ alternativa più chiara per la media:
const somma = studenti.reduce((acc, s) => acc + s.voto, 0);
const mediaCorretta = somma / studenti.length;

// 4. map → nomi in maiuscolo
const nomiMaiuscoli = studenti.map((studente) => studente.nome.toUpperCase());
console.log(nomiMaiuscoli);

// 5. filter → studenti con voto > 85
const sopra85 = studenti.filter((studente) => studente.voto > 85);
console.log(sopra85);
