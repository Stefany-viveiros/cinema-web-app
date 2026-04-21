import { getMovies } from './api.js';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

async function loadMovies(endpoint, elementId) {
  const data = await getMovies(endpoint);
  const container = document.getElementById(elementId);

  data.results.slice(0,10).forEach(movie => {
    const div = document.createElement('div');
    div.classList.add('movie');

    div.innerHTML = `
      <img src="${IMG_URL + movie.poster_path}">
      <p>${movie.title}</p>
    `;

    container.appendChild(div);
  });

  document.getElementById('banner').style.backgroundImage =
    `url(${IMG_URL + data.results[0].backdrop_path})`;
}

// BOTÃO SESSÃO
window.openSessionMode = function() {
  alert('Modo cinema ativado 🎬🍿');
}

// BOTÃO DA BOMBONIERE
window.toggleSnackBar = function() {
  const bar = document.querySelector('.snack-bar');
  bar.classList.toggle('active');
}

loadMovies('/movie/now_playing', 'nowPlaying');
loadMovies('/movie/upcoming', 'upcoming');
loadMovies('/movie/popular', 'weekly');