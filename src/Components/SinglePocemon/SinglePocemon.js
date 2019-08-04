import React, { Component } from 'react';
import styles from './SinglePocemon.module.css';
import { fetchSinglePokemon } from '../services/fetch';

const URLPOKEMON = 'https://pokeapi.co/api/v2/pokemon';

class SinglePocemon extends Component {
  state = {
    sigle: [],
    isLoading: false,
  };
  //   runFetch() {
  //     this.setState({ isLoading: true });
  //     fetchSinglePokemon(this.props.url)
  //       .then(result => this.setState({ sigle: [...result] }))
  //       .catch(err => console.log(err))
  //       .finally(() => this.setState({ isLoading: false }));
  //   }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetchSinglePokemon(this.props.url)
      .then(result => this.setState({ sigle: [...result] }))
      .catch(err => console.log(err))
      .finally(() => this.setState({ isLoading: false }));
  }
  render() {
    const { isLoading } = this.state;
    return (
      isLoading && (
        <div className={styles.wrapper}>
          <div className={styles.avatarBlock}>
            <h1>Name pockemon</h1>
            <img src="" alt="" />
          </div>

          <div className={styles.textBlock}>
            <ul key="1">
              <h4>Some stats</h4>
              <li>wer</li>
              <li>wer</li>
              <li>wer</li>
              <li>wer</li>
              <li>wer</li>
            </ul>
            <ul key="2">
              <h4>Some stats</h4>
              <li>wer</li>
              <li>wer</li>
              <li>wer</li>
              <li>wer</li>
              <li>wer</li>
            </ul>
            <ul key="3">
              <h4>Some stats</h4>
              <li>wer</li>
              <li>wer</li>
              <li>wer</li>
              <li>wer</li>
              <li>wer</li>
            </ul>
          </div>
        </div>
      )
    );
  }
}

export default SinglePocemon;
