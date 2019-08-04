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

  runFetch() {
    this.setState({ isLoading: true });
    fetchSinglePokemon(this.props.url)
      .then(result => this.setState({ single: { ...result } }))
      .catch(err => console.log(err));
    //   .finally(() => this.setState({ isLoading: false }));
  }

  componentDidUpdate() {
    // console.log('urlState: ', this.state.url);
    // console.log('didUpdate prop: ', this.props.url);
    if (this.state.url === null) {
      this.setState(prevState => ({ ...prevState, url: this.props.url }));
      this.runFetch();
    }
  }
  render() {
    const { isLoading, single } = this.state;
    console.log(single.data);
    // console.log(single.data.name);

    return (
      isLoading && (
        <div className={styles.wrapper}>
          <div className={styles.avatarBlock}>
            <h1>Name</h1>
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
