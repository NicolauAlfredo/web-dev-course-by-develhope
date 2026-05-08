function runCallbacks(callbacks) {
  for (let i = 0; i < callbacks.length; i++) {
    callbacks[i]();
  }
}

function firstCallback() {
  console.log("First callback eseguita");
}

function secondCallback() {
  console.log("Second callback eseguita");
}

function thirdCallback() {
  console.log("Third callback eseguita");
}

const callbackArray = [firstCallback, secondCallback, thirdCallback];

runCallbacks(callbackArray);
