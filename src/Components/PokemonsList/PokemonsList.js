import React from 'react';
import styles from './PokemonsList.module.css';
import { NavLink } from 'react-router-dom';
const activeLink = {
  color: 'red',
};

const getId = item => {
  const url = item.pokemon.url.slice(0, -1);
  return url.slice(url.lastIndexOf('/') + 1);
};

const PokemonsList = ({ onGetUrl, pokemonsList }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.namesPokemon}>
        {pokemonsList.map(item => (
          <button
            key={item.pokemon.url}
            className={styles.name}
            type="text"
            onClick={onGetUrl}
            value={item.pokemon.url}
          >
            {console.log('))', getId(item))}
            <NavLink to={`/pokemon/${getId(item)}`} activeStile={activeLink}>
              {item.pokemon.name}
            </NavLink>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PokemonsList;
