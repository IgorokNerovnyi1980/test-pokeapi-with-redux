import React from 'react';
import styles from './PokemonsList.module.css';
import { NavLink } from 'react-router-dom';
const activeLink = {
  color: 'red',
};

const PokemonsList = ({ onGetUrl, pokemonsList }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.namesPokemon}>
        {pokemonsList.map(item => (
          <NavLink to="/pokemon" activeStile={activeLink}>
            <button
              key={item.pokemon.url}
              className={styles.name}
              type="text"
              onClick={onGetUrl}
              value={item.pokemon.url}
            >
              {item.pokemon.name}
            </button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default PokemonsList;
