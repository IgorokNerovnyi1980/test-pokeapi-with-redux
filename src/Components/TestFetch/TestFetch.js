import React, { Component } from 'react';
import { fetchSinglePokemon } from '../services/fetch';

class TestFetch extends Component {
  state = {};
  componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/pokemon/44/';
    fetchSinglePokemon(url)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }

  render() {
    return <h6>Test Fetch</h6>;
  }
}

export default TestFetch;
