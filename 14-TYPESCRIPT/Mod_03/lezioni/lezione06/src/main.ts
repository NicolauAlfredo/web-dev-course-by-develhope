function isGreaterThan(a: number, b: number) {
  if (a === b) {
    return false;
  }

  return a > b;
}

const result = isGreaterThan(2, 4);
console.log(result);

function parse(value: string) {
  if (value === "true") {
    return true;
  }

  if (value === "false") {
    return false;
  }

  return null;
}

const a = parse("true") as boolean;
console.log(a);

// Optional
function greet(name?: string, age: number) {
  if (!name) {
    return "Hello, World!";
  }

  return `Hello, ${name}`;
}

greet();

// Void
function log(message: string): void {
  console.log(message);
}

// Type of Function
type SumFuction = (a: number, b: number) => number;

// Callback

type Point = {
  x: number;
  y: number;

  distance: (other: Point) => number;
};

const a: Point = {
  x: 33,
  y: 22,

  distance: (other: Point) => {
    return 2;
  },
};

console.log(a);
