function analyzeMovies(movies) {
  const result = {
    numMovies: movies.length,
    numYears: 0,
    genreCounts: {}
  };

  const uniqueYears = {};

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];

    // Count unique years
    if (!uniqueYears[movie.year]) {
      uniqueYears[movie.year] = true;
      result.numYears++;
    }

    // Count genres
    if (!result.genreCounts[movie.genre]) {
      result.genreCounts[movie.genre] = 1;
    } else {
      result.genreCounts[movie.genre]++;
    }
  }

  return result;
}

const movies = [
  { title: "The Godfather",      director: "Coppola",   year: 1972, genre: "Drama" },
  { title: "Goodfellas",         director: "Scorsese",  year: 1990, genre: "Crime" },
  { title: "Pulp Fiction",       director: "Tarantino", year: 1994, genre: "Crime" },
  { title: "The Dark Knight",    director: "Nolan",     year: 2008, genre: "Action" },
  { title: "Schindler's List",   director: "Spielberg", year: 1993, genre: "Drama" },
  { title: "Interstellar",       director: "Nolan",     year: 2014, genre: "Sci-Fi" },
  { title: "The Shawshank",      director: "Darabont",  year: 1994, genre: "Drama" },
];

const stats = analyzeMovies(movies);
console.log(stats);
