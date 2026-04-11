function getBrandModel(cars) {
  const result = cars.map(car => `${car.brand} ${car.model}`);
  console.log(result);
  return result;
}
 
const cars = [
  { brand: "Toyota", model: "Corolla", year: 2020 },
  { brand: "Ford", model: "Focus", year: 2018 },
  { brand: "BMW", model: "X3", year: 2022 }
];

getBrandModel(cars);