import React from 'react';
import styles from '../styles/About.module.css';
import ExplainerVideo from './ExplainerVideo';
// import explainerVid from 'https://127.0.0.1/file-name';
const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.h2}>ABOUT</h2>
        <div className={styles.aboutVideo}><ExplainerVideo /></div>
        <div className={styles.aboutText}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum, quas provident dicta dignissimos modi quod hic, autem suscipit itaque distinctio mollitia earum porro accusamus assumenda, maxime qui beatae voluptas! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum accusantium dolores beatae. Officiis iste itaque optio numquam eum reiciendis iure. Cupiditate cum maxime illo saepe magnam consequuntur totam laboriosam reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem obcaecati aliquam, voluptates nulla voluptas ducimus eveniet. Temporibus libero aliquid natus praesentium modi beatae nostrum, rerum accusamus tempore ducimus. Quibusdam, illum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cum, enim consectetur rem blanditiis itaque eum. Eaque quasi laudantium labore corrupti porro cumque corporis quidem! Distinctio, commodi! Labore, asperiores libero.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum, quas provident dicta dignissimos modi quod hic, autem suscipit itaque distinctio mollitia earum porro accusamus assumenda, maxime qui beatae voluptas! Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
          
          <p>Nostrum accusantium dolores beatae. Officiis iste itaque optio numquam eum reiciendis iure. Cupiditate cum maxime illo saepe magnam consequuntur totam laboriosam reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem obcaecati aliquam, voluptates nulla voluptas ducimus eveniet. Temporibus libero aliquid natus praesentium modi beatae nostrum, rerum accusamus tempore ducimus. Quibusdam, illum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cum, enim consectetur rem blanditiis itaque eum. Eaque quasi laudantium labore corrupti porro cumque corporis quidem! Distinctio, commodi! Labore, asperiores libero.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minima fugiat illum corporis repellendus voluptatem alias veritatis sint laudantium doloribus, facilis, dolor sequi ipsam harum temporibus! Nam recusandae quod tenetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt et similique eligendi accusantium odit delectus esse praesentium porro sint quaerat laborum est officia impedit repellat perspiciatis sapiente sit, nemo labore! 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo alias, nam beatae quo odit magnam ducimus temporibus laborum incidunt ad voluptatem minus, id similique tempore natus ipsam, cum unde rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem rerum qui laborum illo quia culpa. Distinctio ipsa consequatur doloremque labore aut neque recusandae corrupti, voluptates quam odit optio necessitatibus pariatur.
          </p>
        </div>
        <p>{/* About text goes here */}</p>
      </div>
    </section>
  );
};

export default About;