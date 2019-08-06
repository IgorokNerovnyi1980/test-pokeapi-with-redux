import React, { Component } from 'react';
import styles from './App.module.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../Home/HomePage';
import SinglePocemon from '../SinglePocemon/SinglePocemon';

class App extends Component {
  state = {};
  getUrlPokemon = e => {
    this.setState({ pokemon: e.target.value });
  };
  render() {
    const { pokemon } = this.state;
    return (
      <div className={styles.section}>
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <HomePage {...props} onGetUrl={this.getUrlPokemon} />
            )}
          />
          <Route
            path="/pokemon"
            render={props => <SinglePocemon {...props} url={pokemon} />}
          />
          <Route render={() => <p>Страница не найдена</p>} />
        </Switch>
      </div>
    );
  }
}
export default App;
