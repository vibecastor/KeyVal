import React from 'react';
import SampleComponent from '../../SampleComponent';
import Parent from '../../Parent';


import styles from './Home.scss';

const Home = () => (
  <div data-test-hook="homePage" className={styles.home}>
    <Parent/>
  </div>
);

export default Home;
