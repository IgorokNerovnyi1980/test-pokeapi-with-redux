import React, { Component } from 'react';
import styles from './App.module.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../Home/HomePage';
import SinglePocemon from '../SinglePocemon/SinglePocemon';

class App extends Component {
  // state = {};
  // getUrlPokemon = e => {
  //   this.setState({ pokemon: e.target.value });
  // };
  render() {
    // const { pokemon } = this.state;
    return (
      <div className={styles.mainWindow}>
        <div className={styles.section}>
          <Switch>
            <Route path="/" exact render={props => <HomePage {...props} />} />
            <Route
              path="/pokemon/:id"
              render={props => <SinglePocemon {...props} />}
            />
            <Route render={() => <p>Страница не найдена</p>} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
