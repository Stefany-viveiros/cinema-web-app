import { getMovies } from './api.js';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_POSTER = 'https://via.placeholder.com/300x450?text=Sem+Imagem';
const DEFAULT_BG = 'https://via.placeholder.com/1280x720?text=Cinema';

// 🔥 GARANTE QUE O HTML CARREGOU
document.addEventListener("DOMContentLoaded", () => {
  loadMovies('/movie/now_playing', 'nowPlaying');
  loadMovies('/movie/upcoming', 'upcoming');
  loadMovies('/movie/popular', 'weekly');
});

// 🎬 FUNÇÃO PRINCIPAL
async function loadMovies(endpoint, elementId) {
  const container = document.getElementById(elementId);

  // evita erro se não existir
  if (!container) return;

  try {
    const data = await getMovies(endpoint);

    container.innerHTML = "";

    // 🔥 renderiza filmes
    data.results.slice(0, 10).forEach(movie => {
      const div = document.createElement('div');
      div.classList.add('movie');

      const poster = movie.poster_path
        ? IMG_URL + movie.poster_path
        : DEFAULT_POSTER;

      div.innerHTML = `
        <img src="${poster}">
        <p>${movie.title}</p>
      `;

      // 🎬 clique → vai para assentos
      div.onclick = () => {
        localStorage.setItem("movie", JSON.stringify(movie));
        window.location.href = "seats.html";
      };

      container.appendChild(div);
    });

    // 🎥 BANNER (TELÃO)
    const banner = document.getElementById('banner');

    if (banner && data.results.length > 0) {

      // procura filme com imagem válida
      const movieWithImage = data.results.find(m => m.backdrop_path);

      const bg = movieWithImage
        ? IMG_URL + movieWithImage.backdrop_path
        : DEFAULT_BG;

      banner.style.backgroundImage = `url(${bg})`;
    }

  } catch (error) {
    console.error("Erro ao carregar filmes:", error);
  }
}