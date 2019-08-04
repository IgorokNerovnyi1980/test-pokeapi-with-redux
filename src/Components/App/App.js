import React, { Component } from 'react';
import styles from './App.module.css';
import PokemonsList from '../PokemonsList/PokemonsList';
import SinglePocemon from '../SinglePocemon/SinglePocemon';

class App extends Component {
  state = {
    pokemon: '',
  };
  onGetUrlPokemon = e => {
    console.log(e.target.value);
    this.setState({ pokemon: e.target.value });
  };
  render() {
    const { pokemon } = this.state;
    return (
      <div className={styles.mainWindow}>
        <PokemonsList getUrl={this.onGetUrlPokemon} />
        <SinglePocemon url={pokemon} />
      </div>
    );
  }
}
export default App;
