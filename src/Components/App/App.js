import React, { Component } from 'react';
import styles from './App.module.css';
import PokemonsList from '../PokemonsList/PokemonsList';
import SinglePocemon from '../SinglePocemon/SinglePocemon';

class App extends Component {
  state = {};
  render() {
    return (
      <div className={styles.mainWindow}>
        <PokemonsList />
        <SinglePocemon />
      </div>
    );
  }
}
export default App;
