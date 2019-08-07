import React from 'react';
import styles from './Controls.module.css';
import PropTypes from 'prop-types';

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

export default UpDown;
