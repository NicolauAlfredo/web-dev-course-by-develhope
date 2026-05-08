const caricaModulo = (modulo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Il modulo ${modulo} è stato caricato.`);
    }, 2000);
  });
};

const lanciaVeicoloSpaziale = async () => {
  const moduloA = await caricaModulo('A');
  console.log(`${moduloA}`);

  const moduloB = await caricaModulo('B');
  console.log(`${moduloB}`);

  const moduloC = await caricaModulo('C');
  console.log(`${moduloC}`);

  console.log(`Veicolo spaziale pronto per il lancio!`);
};

// avvio della simulazione
lanciaVeicoloSpaziale();