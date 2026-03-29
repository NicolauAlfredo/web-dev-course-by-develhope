const printName = () => console.log("Nicolau");

const sayHelloName = (callback) => {
  console.log("Hello");
  callback();
};

sayHelloName(printName);

