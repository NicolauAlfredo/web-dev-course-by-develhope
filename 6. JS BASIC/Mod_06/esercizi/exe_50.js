function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(arr) {
  let primes = [];

  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primes.push(arr[i]);
    }
  }

  return primes;
}

let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
let result = getPrimes(numbers);

console.log(result);
