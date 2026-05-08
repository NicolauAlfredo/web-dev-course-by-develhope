/* Lezione 05 - Le Promise */

function checkAge(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve("Ok");
      } else {
        reject("Ko");
      }
    }, 1000);
  });
}

const check = checkAge(19)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(check);
