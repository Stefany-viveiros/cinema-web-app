import { getMovies } from './api.js';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

// 🔥 GARANTE QUE O HTML CARREGOU
document.addEventListener("DOMContentLoaded", () => {
  loadMovies('/movie/now_playing', 'nowPlaying');
  loadMovies('/movie/upcoming', 'upcoming');
  loadMovies('/movie/popular', 'weekly');
});

async function loadMovies(endpoint, elementId) {
  const container = document.getElementById(elementId);

  // 🔥 evita erro se elemento não existir
  if (!container) return;

  const data = await getMovies(endpoint);

  container.innerHTML = "";

  data.results.slice(0, 10).forEach(movie => {
    const div = document.createElement('div');
    div.classList.add('movie');

    div.innerHTML = `
      <img src="${movie.poster_path ? IMG_URL + movie.poster_path : ''}">
      <p>${movie.title}</p>
    `;

    // 🎬 clique → vai para assentos
    div.onclick = () => {
      localStorage.setItem("movie", JSON.stringify(movie));
      window.location.href = "seats.html";
    };

    container.appendChild(div);
  });

  // 🎥 banner
  const banner = document.getElementById('banner');

  if (banner && data.results.length > 0) {
    banner.style.backgroundImage =
      `url(${IMG_URL + data.results[0].backdrop_path})`;
  }
}