const API_KEY = '9513d17ee4cacca28de659d6c50e30f8';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getMovies(endpoint) {
  const res = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=pt-BR`);
  return await res.json();
}