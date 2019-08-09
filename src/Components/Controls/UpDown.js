import React from 'react';
import styles from './Controls.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import * as selectors from '../../redux/selectors';

const UpDown = ({ value, onUp, onDown }) => {
  return (
    <div className={styles.btnWrapper}>
      <button className={styles.button} onClick={onDown} disabled={value <= 1}>
        Назад
      </button>
      <button className={styles.button} onClick={onUp}>
        Вперед
      </button>
    </div>
  );
};

UpDown.propTypes = {
  value: PropTypes.number.isRequired,
  onUp: PropTypes.func.isRequired,
  onDown: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: selectors.getNumberPage(state),
});
const mapDispatchToProps = dispatch => ({
  onUp: () => dispatch(actions.increment(1)),
  onDown: () => dispatch(actions.decrement(1)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpDown);
