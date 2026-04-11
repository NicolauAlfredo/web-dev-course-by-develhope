function formatBooks(books) {
  return books.map(book => {
    let result = `${book.titolo} di ${book.autore}`;
    if (book.anno > 2000) result += " - Moderno";
    if (book.genere === "Science Fiction") result += " - SciFi";
    return result;
  });
}
 
const libri = [
  { titolo: "Il Signore degli Anelli", autore: "J.R.R. Tolkien", anno: 1954, genere: "Fantasy" },
  { titolo: "Dune", autore: "Frank Herbert", anno: 1965, genere: "Science Fiction" },
  { titolo: "Project Hail Mary", autore: "Andy Weir", anno: 2021, genere: "Science Fiction" },
  { titolo: "La Storia Infinita", autore: "Michael Ende", anno: 1979, genere: "Fantasy" },
  { titolo: "Piranesi", autore: "Susanna Clarke", anno: 2020, genere: "Fantasy" },
];

const risultato = formatBooks(libri);
console.log(risultato);
