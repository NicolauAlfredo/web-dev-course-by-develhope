function canPlay() {
  // Variabile dichiarata correttamente nello scope della funzione
  let sport = " Football";

  // Dichiariamo la variabile fuori dall'if
  // così sarà accessibile anche dopo
  let personName;

  if (true) {
    // Assegniamo il valore dentro il blocco
    personName = "Cosimo";
  }

  // Ora funziona perché personName è visibile qui
  console.log(personName + sport);
}

canPlay()
