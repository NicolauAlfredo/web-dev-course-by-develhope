function somma(...numeri) {
  let totale = 0;

  for (let numero of numeri) {
    totale += numero;
  }

  return totale;
}

// Stampa in console l'output della funzione
console.log(somma(1, 2, 3, 4)); // 10 
