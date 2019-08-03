import React, { Component } from 'react';
import styles from './App.module.css';
import PokemonsList from '../PokemonsList/PokemonsList';

class App extends Component {
  state = {};
  render() {
    return (
      <div className={styles.mainWindow}>
        <PokemonsList />
      </div>
    );
  }
}
export default App;
