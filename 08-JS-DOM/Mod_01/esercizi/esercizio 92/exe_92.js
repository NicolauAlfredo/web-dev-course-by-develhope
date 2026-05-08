// Seleziona l'elemento <html>
const html = document.documentElement;

// Seleziona il <body>
const body = document.body;

// Seleziona la <ul>
const ul = body.children[0];

// Stampa l'elemento padre della <ul>
console.log(ul.parentElement);

// Seleziona il secondo elemento figlio della <ul>
const secondLi = ul.children[1];

// Stampa il secondo <li>
console.log(secondLi);

// Stampa il fratello successivo del secondo <li>
console.log(secondLi.nextElementSibling);

// Stampa il fratello precedente del secondo <li>
console.log(secondLi.previousElementSibling);
