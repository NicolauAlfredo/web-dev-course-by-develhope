const smartphone = {
  brand: "Apple",
  name: "iPhone 13",
  price: 1300,
};

// rendiamo l'oggetto immutabile
Object.freeze(smartphone);

// tentativo di modifica (verrà ignorato in strict mode o fallirà)
smartphone.price = 100;

console.log(smartphone);