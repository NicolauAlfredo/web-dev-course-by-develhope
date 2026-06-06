type Point = {
  x: number;
  y: number;
};

type Color = {
  color: string;
};

type ColoredPoint = Point & Color; // Type Intersection | Global

type ColoredPoint1 = Point & { color: string }; // Type Intersection | Inline

const a: ColoredPoint = {
  x: 12,
  y: 33,
  color: "red",
};

console.log(a);
