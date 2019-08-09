import React, { Component } from 'react';
import styles from './Home.module.css';

import { fetchPokemons } from '../services/fetch';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Title from './Title';
import PokemonsList from '../PokemonsList/PokemonsList';
import UpDown from '../Controls/UpDown';
import * as selectors from '../../redux/selectors';

class HomePage extends Component {
  state = {
    isLoading: false,
    pokemonsList: [],
    page: null,
  };

  runRequest() {
    this.setState({ isLoading: true });
    fetchPokemons(this.props.url, this.props.type, this.state.page)
      .then(result => this.setState({ pokemonsList: [...result.data.pokemon] }))
      .catch(err => console.log(err))
      .finally(() => this.setState({ isLoading: false }));
  }

  componentDidMount() {
    this.setState({ page: this.props.page }, () => this.runRequest());
  }
  componentDidUpdate() {
    if (this.props.page !== this.state.page) {
      this.setState({ page: this.props.page }, () => this.runRequest());
    }
  }

  render() {
    const { pokemonsList, isLoading } = this.state;
    return (
      <div className={styles.wrapper}>
        <Title />
        {!isLoading ? (
          <PokemonsList pokemonsList={pokemonsList} />
        ) : (
          <p>Loading...</p>
        )}
        <UpDown />
      </div>
    );
  }
}
HomePage.propTypes = {
  page: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  page: selectors.getNumberPage(state),
  url: state.mainUrl,
  type: state.type,
});

export default connect(mapStateToProps)(HomePage);
