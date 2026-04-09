let user = {
  name: "Cosimo",
  age: 30,
};

// copia dell'oggetto
let newUser = Object.assign({}, user);

newUser.name = "Paolo";

console.log(newUser);
console.log(user);
