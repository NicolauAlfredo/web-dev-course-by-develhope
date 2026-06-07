// TUPLA
type Coordinates = [number, number];

const coordinates: Coordinates = [1, 2];

console.log(coordinates);

let a: [number, string, boolean] = [1, "String", false];
let [x, y, z] = a;

// CONST

let b = [1, "String", false] as const;
console.log(b)

let [x, y, z] = a;
 