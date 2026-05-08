// Endpoint API
const API_URL = "https://api.potterdb.com/v1/books";

// Seleziona il container
const booksContainer = document.querySelector(".books-container");

// Funzione per recuperare i dati
async function fetchData() {
  try {
    // Chiamata API
    const response = await fetch(API_URL);

    // Conversione in JSON
    const data = await response.json();

    // Recupera l'array dei libri
    const books = data.data;

    // Ciclo dei libri
    books.forEach((book) => {
      // Recupera attributi del libro
      const attributes = book.attributes;

      // Crea card
      const card = document.createElement("article");
      card.classList.add("book-card");

      // Inserisce HTML nella card
      card.innerHTML = `
        <img
          src="${attributes.cover}"
          alt="${attributes.title}"
          class="book-card__image"
        />

        <div class="book-card__content">
          <h1 class="book-card__title">
            ${attributes.title}
          </h1>
        </div>
      `;

      // Inserisce la card nel DOM
      booksContainer.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
}

// Esegue la funzione
fetchData();
