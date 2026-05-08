function caricaModulo(modulo) {
  return new Promise((resolve, reject) => {
    const tempoCaricamento = Math.random() * 3000; // fino a 3 secondi

    setTimeout(() => {
      if (tempoCaricamento < 1500) {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      } else {
        reject(`Errore durante il caricamento del modulo ${modulo}.`);
      }
    }, tempoCaricamento);
  });
}

// Funzione asincrona richiesta
async function lanciaVeicoloSpaziale() {
  try {
    const risultatoA = await caricaModulo("A");
    console.log(risultatoA);

    const risultatoB = await caricaModulo("B");
    console.log(risultatoB);

    const risultatoC = await caricaModulo("C");
    console.log(risultatoC);

    console.log("Veicolo spaziale pronto per il lancio!");
  } catch (errore) {
    console.log("Impossibile lanciare il veicolo spaziale a causa di errori nei moduli.");
  }
}

// Esecuzione della funzione
lanciaVeicoloSpaziale();