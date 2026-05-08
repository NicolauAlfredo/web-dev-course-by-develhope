const operazioneAsync = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Operazione completata!"), 2000);
  });

operazioneAsync()
  .then((risultato) => console.log(risultato))
  .catch((errore) => console.error(errore));
