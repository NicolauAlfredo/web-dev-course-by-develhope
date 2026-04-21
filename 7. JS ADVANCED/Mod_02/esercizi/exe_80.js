function performOperation(a, b, callback) {
  // Eseguiamo un'operazione matematica (somma in questo caso)
  const result = a + b;

  // Passiamo il risultato alla funzione di callback
  callback(result);
}

function displayResult(result) {
  console.log("Il risultato è:", result);
}

// Esempio di utilizzo
performOperation(5, 3, displayResult);