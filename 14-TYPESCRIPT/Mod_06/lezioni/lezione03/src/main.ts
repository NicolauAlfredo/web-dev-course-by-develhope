type HasLength = {
  length: number;
};

function getLength<T extends HasLength>(value: T) {
  return value.length;
}

getLength("Hello, World");
getLength([1, 2, 3, 4]);

function getFirst<T extends any[]>(value: T): T[number] {
  return value[0];
}

let a = getFirst([1, 2, 3, 4, 5]); // a: number
let b = getFirst(["Hello", ["World"]]); // b: string
let c = getFirst(21); // c = Error!

console.log(a);
console.log(b);
console.log(c);
