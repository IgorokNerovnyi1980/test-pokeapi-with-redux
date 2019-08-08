import React, { Component } from 'react';
import styles from './Home.module.css';

import { fetchPokemons } from '../services/fetch';

import Title from './Title';
import PokemonsList from '../PokemonsList/PokemonsList';
import UpDown from '../Controls/UpDown';

const URL = 'https://pokeapi.co/api/v2';
const TYPE = 'ability';
const PAGE = 1;

class HomePage extends Component {
  state = {
    isLoading: false,
    pokemonsList: [],
    pokemon: '',
    type: TYPE,
    page: PAGE,
    url: URL,
  };

  runRequest() {
    this.setState({ isLoading: true });
    fetchPokemons(this.state.url, this.state.type, this.state.page)
      .then(result => this.setState({ pokemonsList: [...result.data.pokemon] }))
      .catch(err => console.log(err))
      .finally(() => this.setState({ isLoading: false }));
  }

  componentDidMount() {
    this.runRequest();
  }

  pagePrev = () => {
    this.setState(
      prevState => ({ page: prevState.page - 1 }),
      () => this.runRequest(),
    );
  };
  pageNext = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => this.runRequest(),
    );
  };

  render() {
    const { page, pokemonsList, isLoading } = this.state;
    return (
      <div className={styles.wrapper}>
        <Title />
        {!isLoading ? (
          <PokemonsList pokemonsList={pokemonsList} />
        ) : (
          <p>Loading...</p>
        )}
        <UpDown value={page} onDown={this.pagePrev} onUp={this.pageNext} />
      </div>
    );
  }
}

export default HomePage;
