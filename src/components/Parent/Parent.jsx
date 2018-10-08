import React from 'react';
import styles from './Parent.scss';
import KeyValue from '../KeyValue';

export default function (props) {
  return (
    <div className={styles.parent}>
      <header>header</header>
      <div>
        <button>+</button>
      </div>
      <KeyValue />
      <button  type='submit' value='submit' >Submit</button>
    </div>
  );
}
