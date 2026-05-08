function getBrandModel(cars) {
  return cars.map(car => {
    if (!car.brand || !car.model) {
      return "Dati non validi";
    }
    return `${car.brand} ${car.model}`;
  });
}

const cars = [
  { brand: "Toyota", model: "Corolla", year: 2020 },
  { brand: "Ford", model: "Focus", year: 2018 },
  { brand: "BMW", model: "X3", year: 2022 }
];

const result = getBrandModel(cars);
console.log(result);
