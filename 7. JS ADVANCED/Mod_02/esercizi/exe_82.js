function performOperation(a, b, callback) {
  try {
    // eseguo la callback con i parametri
    const result = callback(a, b);

    // se tutto va bene, mostro il risultato
    console.log(`Risultato: ${result}`);
  } catch (error) {
    // gestione errore
    console.error(
      `Errore durante l'esecuzione della callback: ${error.message}`,
    );
  }
}

function displayResult(result) {
  console.log(`Il risultato è: ${result}`);
}

// Esempio
performOperation(5, 3, (x, y) => x + y);
