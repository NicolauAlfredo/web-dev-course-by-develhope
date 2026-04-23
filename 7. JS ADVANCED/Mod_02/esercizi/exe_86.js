const fetchDataFromAPI = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();

    setTimeout(() => {
      success < 0.5
        ? resolve("Data retrieved successfully")
        : reject("Error: Failed to fetch data");
    }, 1000);
  });
};

fetchDataFromAPI()
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
