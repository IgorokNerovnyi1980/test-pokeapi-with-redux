import axios from 'axios';

export const fetchPokemons = (URL, TYPE, PAGE) =>
  axios.get(`${URL}/${TYPE}/${PAGE}/`, {
    headers: {
      'Content-Type': 'text/html',
    },
  });

// export const fetchPixabay = (query, page = 1, perPage = 12) => {
//   return axios.get(
//     `${CATS_URL}${query}&page=${page}&per_page=${perPage}&key=${KEY}`,
//   );
// };
