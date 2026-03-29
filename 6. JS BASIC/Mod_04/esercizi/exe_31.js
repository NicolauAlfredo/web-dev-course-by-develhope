const printName = () => console.log("Nicolau");

const sayHelloName = (callback) => {
  setTimeout(() => {
    console.log("Hello");
    callback();
  }, 1000);
};

sayHelloName(printName);
