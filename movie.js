// movie database
const fakeMovies = [
  {
    title: "Inception",
    genre: "Sci-Fi",
    rating: "8.8",
    poster: "inception.jpg"
  },
  {
    title: "Interstellar",
    genre: "Adventure",
    rating: "8.6",
    poster: "intersteller.jpg"
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    rating: "9.0",
    poster: "dark Knight.jpg"
  }
];

const searchBtn = document.getElementById("searchBtn");
const input = document.getElementById("searchInput");
const resultBox = document.getElementById("result");

searchBtn.addEventListener("click", () => {
  const query = input.value.trim().toLowerCase();

  if (!query) {
    resultBox.innerHTML = <p>Please enter a movie name.</p>;
    return;
  }

  const movie = fakeMovies.find(m => m.title.toLowerCase().includes(query));

  if (!movie) {
    resultBox.innerHTML = <p>Movie not found in my database</p>;
  } else {
    resultBox.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" />
      <h2>${movie.title}</h2>
      <p><strong>Genre:</strong> ${movie.genre}</p>
      <p><strong>Rating:</strong> ${movie.rating}</p>
    `;
  }
});