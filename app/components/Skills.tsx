import styles from '../styles/Skills.module.css';

const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.h2}>Skills</h2>
      <div className={styles.skill}>
        <span className={styles.skillName}>CSS</span>
        <div className={styles.progressBar}>
          <div className={styles.filled1}></div>
        </div>
        <span className={styles.skillPercent}>70%</span>
      </div>

      <div className={styles.skill}>
        <span className={styles.skillName}>JavaScript</span>
        <div className={styles.progressBar}>
          <div className={styles.filled2}></div>
        </div>
        <span className={styles.skillPercent}>40%</span>
      </div>

      <div className={styles.skill}>
        <span className={styles.skillName}>HTML</span>
        <div className={styles.progressBar}>
          <div className={styles.filled3}></div>
        </div>
        <span className={styles.skillPercent}>80%</span>
      </div>

      <div className={styles.skill}>
        <span className={styles.skillName}>C++</span>
        <div className={styles.progressBar}>
          <div className={styles.filled4}></div>
        </div>
        <span className={styles.skillPercent}>60%</span>
      </div>

      
      <div className={styles.skill}>
        <span className={styles.skillName}>Communication</span>
        <div className={styles.progressBar}>
          <div className={styles.filled5}></div>
        </div>
        <span className={styles.skillPercent}>77%</span>
      </div>
      
    </section>
  );
};

export default Skills;
