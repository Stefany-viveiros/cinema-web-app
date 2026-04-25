const IMG_URL = 'https://image.tmdb.org/t/p/original';

document.addEventListener("DOMContentLoaded", () => {

  const movie = JSON.parse(localStorage.getItem("movie"));

  if (!movie) {
    alert("Nenhum filme selecionado!");
    window.location.href = "index.html";
    return;
  }

  const screen = document.getElementById("screen");
  const title = document.getElementById("movieTitle");

  // BACKDROP
  const backdrop = movie.backdrop_path
    ? IMG_URL + movie.backdrop_path
    : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba";

  screen.style.backgroundImage = `url(${backdrop})`;

  //  TÍTULO
  title.innerText = movie.title;

});

//  SIDEBAR
window.toggleSnackBar = function() {
  const bar = document.querySelector('.snack-bar');
  bar.classList.toggle('active');
}