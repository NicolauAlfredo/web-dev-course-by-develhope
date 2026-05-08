const user = { name: "John", age: 30 };

function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    console.log("Richiesta dati in corso...");

    setTimeout(() => {
      // simuliamo una possibile condizione di errore
      const success = true; // cambia a false per testare il reject

      if (success) {
        console.log("Dati ricevuti dall'API");
        resolve(user);
      } else {
        reject("Errore nel recupero dei dati dall'API");
      }
    }, 2000);
  });
}

function handleData(data) {
  console.log("Elaborazione dati:");
  console.log(`Nome: ${data.name}, Età: ${data.age}`);
}

// utilizzo della Promise
fetchDataFromAPI()
  .then(handleData)
  .catch(error => {
    console.error("Si è verificato un errore:", error);
  });