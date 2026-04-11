let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Stampare in console il primo valore
console.log(`Primo valore: ${numbers[0]}`);
// Gli array partono da indice 0 -> quindi questo stampa 1

// Stampare la lunghezza dell'array
console.log(`Lunghezza dell'array: ${numbers.length}`);
// length restituisce il numero totale di elementi -> 10

// Stampare in console l'ultimo valore
console.log(`Ultimo valore: ${numbers[numbers.length - 1]}`);
// numbers.length è 10, ma l'ultimo indice è 9 (perché si parte da 0)
// quindi stampa numbers[9] -> 10

// Provare a stampare l'elemento con indice 20
console.log(`Elemento con indice 20: ${numbers[20]}`);
// Non esiste un elemento in posizione 20
// JavaScript restituisce undefined quando l'indice non è presente
