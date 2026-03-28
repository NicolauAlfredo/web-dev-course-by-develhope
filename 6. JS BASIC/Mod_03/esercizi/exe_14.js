const isSunnyDay = true;
const isAutumn = false;
const itIsRaining = false;
const isSummer = true;

// Prime 3 operazioni che restituiscono true
console.log(isSunnyDay && isSummer); // true (vero che è una giornata di sole E siamo in estate)
console.log(isAutumn || isSunnyDay); // true (è autunno O è una giornata di sole)
console.log(!itIsRaining); // true (non sta piovendo)

// Le rimanenti 3 operazioni che restituiscono false
console.log(isAutumn && isSummer); // false (autunno E estate non sono contemporanei)
console.log(isSunnyDay && itIsRaining); // false (è una giornata di sole E sta piovendo non è possibile)
console.log(!isSummer); // false (non è estate, la negazione di true è false)
