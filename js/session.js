const IMG_URL = 'https://image.tmdb.org/t/p/original';

// CARREGA DADOS
document.addEventListener("DOMContentLoaded", () => {

  const movie = JSON.parse(localStorage.getItem("movie"));
  const seat = localStorage.getItem("seat");

  // 🔥 VALIDAÇÃO (IMPORTANTE)
  if (!movie || !seat) {
    alert("Sessão inválida!");
    window.location.href = "index.html";
    return;
  }

  // 🎬 FILME NO TELÃO
  const screen = document.getElementById("screen");
  screen.style.backgroundImage = `url(${IMG_URL + movie.backdrop_path})`;

  // 🎥 INFO
  document.getElementById("movieTitle").innerText = movie.title;
  document.getElementById("seatInfo").innerText = "Assento: " + seat;

});

// 🍿 ABRIR BOMBONIERE
window.toggleSnackBar = function() {
  const bar = document.querySelector('.snack-bar');
  const overlay = document.querySelector('.overlay');

  bar.classList.toggle('active');
  overlay.classList.toggle('active');
};