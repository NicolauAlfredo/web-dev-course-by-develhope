function filterOutOdds(...numbers) {
  return numbers.filter(num => num % 2 === 0);
}

console.log(filterOutOdds(10, 15, 20, 33));
// Output: [10, 20]