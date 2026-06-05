type Point = {
  readonly x: number; // ReadOnly
  y: number;
  z?: number; // Optional
};

let a: Point = {
  x: 27,
  y: 22,
  z: 22, 
};

let { x, y } = a;

console.log(x, y);
