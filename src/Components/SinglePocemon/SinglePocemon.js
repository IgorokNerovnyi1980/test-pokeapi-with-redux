import React from 'react';
import styles from './SinglePocemon.module.css';

const SinglePocemon = ({ url }) => {
  return (
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
  );
};

export default SinglePocemon;
