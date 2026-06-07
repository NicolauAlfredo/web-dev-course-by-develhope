let a: number[] = [1, 2, 3, 4, 5];

a.push(6);

console.log(a);

let b: string[] = ["Hello", "World"];
console.log(b);

let c: boolean[] = [true, false];
console.log(c);

let d: (String | number)[] = ["Hello", 5];
console.log(d);

type StringOrNumber = string | number;

let e: StringOrNumber[] = ["A", 4];
console.log(e);

let f = [1, 3, 4, 5, 6];
f.push(10);

// Array: Object
type Point = {
  x: number;
  y: number;
};

let points: Point[] = [{ x: 21, y: 33 }];

console.log(points);
