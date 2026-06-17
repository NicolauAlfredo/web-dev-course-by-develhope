const button = document.querySelector("#loadDogBtn");
const dogImage = document.querySelector("#dogImage");
const breedSelect = document.querySelector("#breedSelect");

function fetchAllBreeds() {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao buscar raças");
      }

      return response.json();
    })
    .then((data) => {
      return Object.keys(data.message);
    });
}

function fetchRandomDogImage(breed) {
  const endpoint = breed
    ? `https://dog.ceo/api/breed/${breed}/images/random`
    : "https://dog.ceo/api/breeds/image/random";

  return fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao buscar imagem");
      }

      return response.json();
    })
    .then((data) => {
      return data.message;
    });
}

function renderBreedOptions(breeds) {
  breeds.forEach((breed) => {
    const option = document.createElement("option");

    option.value = breed;
    option.textContent = breed;

    breedSelect.append(option);
  });
}

function renderDogImage(imageUrl) {
  dogImage.src = imageUrl;
}

function handleLoadDogImage() {
  const selectedBreed = breedSelect.value;

  fetchRandomDogImage(selectedBreed)
    .then((imageUrl) => {
      renderDogImage(imageUrl);
    })
    .catch((error) => {
      console.error(error);
      alert("Não foi possível carregar a imagem.");
    });
}

function initializeApp() {
  fetchAllBreeds()
    .then((breeds) => {
      renderBreedOptions(breeds);
    })
    .catch((error) => {
      console.error(error);
    });
}

button.addEventListener("click", handleLoadDogImage);

initializeApp();
