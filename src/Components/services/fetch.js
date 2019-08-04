import axios from 'axios';

export const fetchPokemons = (url, type, page) =>
  axios.get(`${url}/${type}/${page}/`, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
export const fetchSinglePokemon = (urlpokemon, id) =>
  axios.get(`${urlpokemon}/${id}/`, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
