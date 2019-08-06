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

  pageMinus = () => {
    this.setState(
      prevState => ({ page: prevState.page - 1 }),
      () => this.runFetch(),
    );
  };
  pagePlus = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => this.runFetch(),
    );
  };

  render() {
    const { page, pokemonsList } = this.state;
    const { onGetUrl } = this.props;
    return (
      <div className={styles.wrapper}>
        <Title />
        <PokemonsList pokemonsList={pokemonsList} onGetUrl={onGetUrl} />
        <UpDown value={page} onDown={this.pageMinus} onUp={this.pagePlus} />
      </div>
    );
  }
}
export default HomePage;
