/* Lezione 03 - Gestire gli errori con le callback */

function checkAge(age, callback) {
  if (age >= 18) {
    callback(null, "OK");
  } else {
    callback(new Error("Ko"), null);
  }
}

checkAge(18, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
