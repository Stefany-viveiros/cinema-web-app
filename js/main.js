import { getMovies } from './api.js';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

async function loadMovies(endpoint, elementId) {
  const data = await getMovies(endpoint);
  const container = document.getElementById(elementId);

  container.innerHTML = ""; // limpa antes de renderizar -------

  data.results.slice(0, 10).forEach(movie => {
    const div = document.createElement('div');
    div.classList.add('movie');

    div.innerHTML = `
      <img src="${IMG_URL + movie.poster_path}">
      <p>${movie.title}</p>
    `;

    // CLIQUE NO FILME ------- VAI PARA ASSENTOS
    div.onclick = () => {
      localStorage.setItem("movie", JSON.stringify(movie));
      window.location.href = "seats.html";
    };

    container.appendChild(div);
  });

  // banner com destaque
  if (data.results.length > 0) {
    document.getElementById('banner').style.backgroundImage =
      `url(${IMG_URL + data.results[0].backdrop_path})`;
  }
}

// CARREGA AS SEÇÕES -------
loadMovies('/movie/now_playing', 'nowPlaying');
loadMovies('/movie/upcoming', 'upcoming');
loadMovies('/movie/popular', 'weekly');