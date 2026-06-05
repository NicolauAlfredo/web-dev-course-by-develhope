type Point = {
  readonly x: number; // ReadOnly
  y: number;
  z?: number; // Optional
};

type Line = {
  a: Point;
  b: Point;
};

let b: Line = {
  a: {
    x: 1,
    y: 2,
  },
  b: {
    x: 44,
    y: 88,
  },
};

let a: Point = {
  x: 27,
  y: 22,
  z: 22,
};

let { x, y } = a;

console.log(x, y);
