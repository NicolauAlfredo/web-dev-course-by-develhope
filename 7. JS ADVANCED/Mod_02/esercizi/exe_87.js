function promiseBasedFunction(arg1, arg2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = arg1 + arg2;
      
      if (result % 2 !== 0) {
        resolve(result);
      } else {
        reject(new Error('Result is not odd!'));
      }
    }, 1000);
  });
}