import React, { Component } from 'react';
import styles from './SinglePocemon.module.css';
import { fetchSinglePokemon } from '../services/fetch';

// const URLPOKEMON = 'https://pokeapi.co/api/v2/pokemon';

class SinglePocemon extends Component {
  state = {
    url: null,
    single: {},
    isLoading: false,
  };
  parsingPocemonData() {
    this.setState(prevState => ({
      ...prevState,
      sprites: prevState.single.sprites,
    }));
  }

  runFetch() {
    fetchSinglePokemon(this.props.url)
      .then(result => this.setState({ single: { ...result }, isLoading: true }))
      .catch(err => console.log(err));
  }

  componentDidUpdate() {
    // console.log('urlState: ', this.state.url);
    // console.log('didUpdate prop: ', this.props.url);
    if (this.state.url === null) {
      this.setState(prevState => ({ ...prevState, url: this.props.url }));
      this.runFetch();
      this.parsingPocemonData();
    }
  }
  render() {
    const { isLoading, single } = this.state;
    console.log(single.data);
    const test = single.data;
    if (test !== undefined) {
      const name = test.name;
      const img = test.sprites.front_default;
      const abilities = test.abilities;
      console.log(abilities);
    }

    return isLoading === true ? (
      <div className={styles.wrapper}>
        <div className={styles.avatarBlock}>
          <h1>{test.name}</h1>
          <div className={styles.imgWrapper}>
            <img src={test.sprites.front_default} alt="" />
          </div>
        </div>

        <div className={styles.textBlock}>
          <ul key="1">
            <h4>Abilities:</h4>
            {test.abilities.map(item => (
              <li key={item.ability.name}>
                <p>{item.ability.name}</p>
              </li>
            ))}
          </ul>
          <ul key="2">
            <h4>Stats:</h4>
            {test.stats.map(item => (
              <li key={item.stat.name}>
                <p>
                  {item.stat.name} - {item.base_stat}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ) : (
      <p>Nothing</p>
    );
  }
}

export default SinglePocemon;
