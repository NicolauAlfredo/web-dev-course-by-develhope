let tempoRimanente = 10;

console.log("Conto alla rovescia in corso...");

const intervallo = setInterval(contoAllaRovescia, 1000);

function contoAllaRovescia() {
  console.log(`Tempo rimanente: ${tempoRimanente}`);

  tempoRimanente--;

  if (tempoRimanente < 0) {
    clearInterval(intervallo);
    console.log("Conto alla rovescia terminato!");
  }
}