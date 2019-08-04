import React, { Component } from 'react';
import styles from './PokemonsList.module.css';
import { fetchPokemons } from '../services/fetch';

const URL = 'https://pokeapi.co/api/v2';
const TYPE = 'ability';
const PAGE = 1;
// result.data.sprites.front_default // front image

class PokemonsList extends Component {
  state = {
    isLoading: false,
    pokemonsList: [],
    pokemon: [],
    type: TYPE,
    page: PAGE,
  };
  runFetch() {
    this.setState({ isLoading: true });
    fetchPokemons(URL, this.state.type, this.state.page)
      .then(result => this.setState({ pokemonsList: [...result.data.pokemon] }))
      .catch(err => console.log(err))
      .finally(() => this.setState({ isLoading: false }));
  }

  componentDidMount() {
    this.runFetch();
  }
  pageDown = () => {
    this.setState(state => ({ page: state.page - 1 }), () => this.runFetch());
  };
  pageUp = () => {
    this.setState(state => ({ page: state.page + 1 }), () => this.runFetch());
  };

  render() {
    const { pokemonsList, page } = this.state;
    console.log(pokemonsList);
    console.log(page);
    return (
      <div className={styles.wrapper}>
        <div className={styles.namesPokemon}>
          {pokemonsList.map(item => (
            <div key={item.pokemon.url} className={styles.name}>
              <h3>{item.pokemon.name}</h3>
            </div>
          ))}
        </div>
        <div className={styles.btnWrapper}>
          <button type="button" onClick={this.pageDown}>
            Назад
          </button>
          <button type="button" onClick={this.pageUp}>
            Вперед
          </button>
        </div>
      </div>
    );
  }
}

export default PokemonsList;
