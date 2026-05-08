/* Lezione 02 - Le Callback */

function sayHello(name, callback) {
  setTimeout(() => {
    console.log(`Hello, ${name}`);

    callback();
  }, 1000);
}

sayHello("Nicolau", () => {
  console.log("I'm the callback!!!");
});
