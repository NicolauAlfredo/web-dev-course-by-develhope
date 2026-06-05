let a: unknown = 5;
let b: Number = a as number;
console.log(`${b} è del tipo ${typeof b}`);

let c: number = 10;
let d: string = c as string; // Error
console.log(`${d} è del tipo ${typeof d}`);

let e: string = c as unknown as string;
console.log(`${e} è del tipo ${typeof e}`);
