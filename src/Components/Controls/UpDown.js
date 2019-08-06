import React from 'react';
import styles from './Controls.module.css';

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
export default UpDown;
