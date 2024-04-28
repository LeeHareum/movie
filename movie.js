document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  let allMovies = [];

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzFkNmY1NjY1OTUyYzkyNjUxNWMyYWY0ZjM2Y2U2NCIsInN1YiI6IjY1OGQ0MjUyOGVkMDNmNWUzYzkzZGY4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DCApNhuNkZlysmHhl01oDyaFW9wFwsdnpYof_rAIzBM",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      allMovies = data.results;
      displayMovies(allMovies);
    })
    .catch((err) => console.error(err));

  document
    .querySelector(".search")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const searchText = searchInput.value.toLowerCase();

      const filteredMovies = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchText)
      );
      displayMovies(filteredMovies);
    });

  function displayMovies(movies) {
    const cardList = document.querySelector(".card-list");
    cardList.innerHTML = "";

    movies.forEach((movie) => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");

      movieCard.innerHTML = `
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
              <h3>${movie.title}</h3>
              <p>${movie.overview}</p>
              <p>평점: ${movie.vote_average}</p>
              <div class="overlay">Click</div>
            `;

      movieCard.addEventListener("click", function () {
        alert("영화 id : " + movie.id);
      });
      cardList.appendChild(movieCard);
    });
  }
});
