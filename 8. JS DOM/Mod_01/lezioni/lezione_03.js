// Seleziona l'elemento <html> del documento
const html = document.documentElement;

// Stampa nel console l'intero elemento HTML
console.log(html);

// Stampa tutti i figli diretti di <html>
// Generalmente: <head> e <body>
console.log(html.children);

// Seleziona il <body> tramite la collection children
const body = html.children[2];

// Stampa il body nel console
console.log(body);

// Seleziona il secondo figlio del body
// In questo caso la lista <ul>
const ul = body.children[1];

// Stampa la lista nel console
console.log(ul);

// Seleziona tutti gli elementi figli della <ul>
// Restituisce una HTMLCollection con tutti i <li>
ul.children;

// Stampa la <ul> nel console
console.log(ul);

// Seleziona il secondo elemento <li> della lista
const myLi = ul.children[1];

// Stampa il <li> selezionato
console.log(myLi);

// Seleziona l'elemento genitore del <li>
// In questo caso la <ul>
console.log(myLi.parentElement);

// Seleziona l'elemento fratello precedente
// Ovvero il <li> sopra
console.log(myLi.previousElementSibling);

// Seleziona l'elemento fratello successivo
// Ovvero il <li> sotto
console.log(myLi.nextElementSibling);
