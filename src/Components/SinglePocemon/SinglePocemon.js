import React, { Component } from 'react';
import styles from './SinglePocemon.module.css';
import { fetchSinglePokemon } from '../services/fetch';

class SinglePocemon extends Component {
  state = {
    url: null,
    single: {},
    isLoading: false,
  };

  runFetch() {
    fetchSinglePokemon(this.state.url)
      .then(result => this.setState({ single: { ...result }, isLoading: true }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.setState(
      {
        url: `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`,
      },
      () => this.runFetch(),
    );
  }
  render() {
    const { isLoading, single, url } = this.state;
    console.log('single :', single);
    console.log('url :', url);
    const pokemonData = single.data;
    if (pokemonData !== undefined) {
      const id = pokemonData.id;
      // const img = pokemonData.sprites.front_default;
      // const abilities = pokemonData.abilities;
      console.log(id);
    }

    return isLoading === true ? (
      <div className={styles.wrapper}>
        <div className={styles.avatarBlock}>
          <h1>{pokemonData.name}</h1>
          <div className={styles.imgWrapper}>
            <img src={pokemonData.sprites.front_default} alt="" />
          </div>
        </div>

        <div className={styles.textBlock}>
          <ul key="1">
            <h4>Abilities:</h4>
            {pokemonData.abilities.map(item => (
              <li key={item.ability.name}>
                <p>{item.ability.name}</p>
              </li>
            ))}
          </ul>
          <ul key="2">
            <h4>Stats:</h4>
            {pokemonData.stats.map(item => (
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
      <p className={styles.nothing}>No Pokemon Information</p>
    );
  }
}

export default SinglePocemon;
