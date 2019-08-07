import React from 'react';
import styles from './PokemonsList.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const getId = item => {
  const url = item.pokemon.url.slice(0, -1);
  return url.slice(url.lastIndexOf('/') + 1);
};

const PokemonsList = ({ pokemonsList }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.namesPokemon}>
        {pokemonsList.map(item => (
          <button
            key={item.pokemon.url}
            className={styles.name}
            type="text"
            value={item.pokemon.url}
          >
            <Link to={`/pokemon/${getId(item)}`}>{item.pokemon.name}</Link>
          </button>
        ))}
      </div>
    </div>
  );
};
PokemonsList.propTypes = {
  pokemonsList: PropTypes.array.isRequired,
};

export default PokemonsList;
