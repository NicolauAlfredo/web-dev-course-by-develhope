/* Lezione 06 - Le API delle Promise */

function myFirstPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from the first promise");
    }, 1000);
  });
}

function mySecondePrimise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from the second promise");
    }, 2000);
  });
}

/* Method to print */

Promise.all([myFirstPromise(), mySecondePrimise()])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

/* Return the first Promise with complete success */

Promise.race([myFirstPromise(), mySecondePrimise()])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// myFirstPromise().then((data) => console.log(data));
// mySecondePrimise().then((data) => console.log(data));
