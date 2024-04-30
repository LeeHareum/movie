document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.querySelector(".search");
  if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // movie.js에서 allMovies를 가져오기 위한 함수 호출
      const allMovies = window.allMovies();
      const searchText = document
        .getElementById("search-input")
        .value.toLowerCase();

      const filteredMovies = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchText)
      );

      if (filteredMovies.length === 0) {
        alert("영화 제목을 확인해주세요 :)");
      } else {
        window.displayMovies(filteredMovies);
      }
    });
  }
});
