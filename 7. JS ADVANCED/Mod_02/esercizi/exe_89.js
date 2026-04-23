const caricamentoDati = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
    }, 2000);
  });
};

const ottieniDati = async () => {
  try {
    const dati = await caricamentoDati();
    console.log(`Dati ricevuti: ${dati}`);
  } catch (errore) {
    console.error(`Errore durante il caricamento dei dati: ${errore}`);
  }
};

ottieniDati();