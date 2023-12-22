import React from 'react';
import styles from '../styles/About.module.css';
import ExplainerVideo from './ExplainerVideo';
// import explainerVid from 'https://127.0.0.1/file-name';
const About = () => {
  return (
    <section className={styles.about}>
      <h2>About</h2>
      <div>
        <ExplainerVideo />
        
      </div>
      <p>{/* About text goes here */}</p>
    </section>
  );
};

export default About;