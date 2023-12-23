import styles from '../styles/Skills.module.css';

const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2>SKILLS</h2>
      <div className={styles.skill}>
        <span className={styles.skillName}>CSS</span>
        <div className={styles.progressBar}>
          <div className={`${styles.filled} ${styles.p70}`}></div>
        </div>
        <span className={styles.skillPercent}>70%</span>
      </div>

      <div className={styles.skill}>
        <span className={styles.skillName}>JavaScript</span>
        <div className={styles.progressBar}>
          <div className={`${styles.filled} ${styles.p40}`}></div>
        </div>
        <span className={styles.skillPercent}>40%</span>
      </div>

      <div className={styles.skill}>
        <span className={styles.skillName}>HTML</span>
        <div className={styles.progressBar}>
          <div className={`${styles.filled} ${styles.p80}`}></div>
        </div>
        <span className={styles.skillPercent}>80%</span>
      </div>

      <div className={styles.skill}>
        <span className={styles.skillName}>C++</span>
        <div className={styles.progressBar}>
          <div className={`${styles.filled} ${styles.p60}`}></div>
        </div>
        <span className={styles.skillPercent}>60%</span>
      </div>

      
      <div className={styles.skill}>
        <span className={styles.skillName}>Communication</span>
        <div className={styles.progressBar}>
          <div className={`${styles.filled} ${styles.p77}`}></div>
        </div>
        <span className={styles.skillPercent}>77%</span>
      </div>
    </section>
  );
};

export default Skills;
