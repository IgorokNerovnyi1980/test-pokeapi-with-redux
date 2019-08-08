import axios from 'axios';

export const fetchPokemons = (url, type, page) =>
  axios.get(`${url}/${type}/${page}/`, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
export const fetchSinglePokemon = urlPokemon =>
  axios.get(urlPokemon, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
