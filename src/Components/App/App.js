import React, { Component } from 'react';
import styles from './App.module.css';
import PokemonsList from '../PokemonsList/PokemonsList';
import SinglePocemon from '../SinglePocemon/SinglePocemon';
import TestFetch from '../TestFetch/TestFetch';

class App extends Component {
  state = {
    pokemon: '',
  };
  onGetUrlPokemon = e => {
    this.setState({ pokemon: e.target.value });
  };
  render() {
    const { pokemon } = this.state;
    return (
      <div className={styles.mainWindow}>
        <PokemonsList getUrl={this.onGetUrlPokemon} />
        <SinglePocemon url={pokemon} />
        <TestFetch />
      </div>
    );
  }
}
export default App;
