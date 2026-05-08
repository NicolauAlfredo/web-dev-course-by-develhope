const user = { name: "John", age: 30 };

function fetchDataFromAPI(callback) {
  console.log("Richiesta dati in corso...");

  setTimeout(() => {
    // simuliamo la risposta dell'API
    const data = user;

    console.log("Dati ricevuti dall'API");
    callback(data);
  }, 2000); // 2 secondi di ritardo simulato
}

function handleData(data) {
  console.log("Elaborazione dati:");
  console.log(`Nome: ${data.name}, Età: ${data.age}`);
}

fetchDataFromAPI(handleData);