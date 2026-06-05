let a: unknown = 4;
a = "Hello, World";
console.log(a);

let b: number = a; // Error
console.log(b);

function error(message: string): never {
  throw new Error(message);
}
