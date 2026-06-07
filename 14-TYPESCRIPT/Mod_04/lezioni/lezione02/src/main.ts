// Read Only
const a: readonly number[] = [1, 2, 3, 4, 5];

a.push(6); // error

function sum(numbers: readonly number[]) {
  return numbers.reduce((r, n) => r + n, 0);
}

let b = [1, 2, 4];

sum(a);

console.log(a);
