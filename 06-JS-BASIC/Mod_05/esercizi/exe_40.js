function Smartphone(brand, name, price) {
  this.brand = brand;
  this.name = name;
  this.price = price;
}

let iphone = new Smartphone("Apple", "Iphone 17 Pro Max", 1400);
let samsung = new Smartphone("Samsung", "Samsung Ultra S26 ", 1400);

console.log(iphone);
console.log(samsung);
