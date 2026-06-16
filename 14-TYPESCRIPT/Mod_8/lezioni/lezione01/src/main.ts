type Customer = {
  type: "customer";
  name: string;
  orders: number[];
};

type Admin = {
  type: "admin";
  name: string;
  permission: string[];
};

type User = Customer | Admin; // | = UNIONE; & = INTERSEZIONE; keyof = Type Mapping

const myUser = {
  type: "customer",
  name: "Nicolau",
  permission: [1, 2, 3],
};

console.log(myUser);
