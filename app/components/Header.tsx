import Image from "next/image";
import DP from '../images/my-photo.jpg'
import styles from '../styles/Header.module.css'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/twitter'
import 'react-social-icons/linkedin'
import 'react-social-icons/discord'

const Header = () => {
  return(
    
  <header className={styles.header}>
    <div className={styles.overlay}>
      <Image className={styles.dp} src={DP} width="130" height="130" alt="" />
      <h1 className={styles.h1}>Jamal Sadique</h1>
      <p className={styles.p}>A Beginner Web Developer at The PAD Forum!</p>
      {/* Social links go here */}
      <div className={styles.socialIcons}>
        <SocialIcon className={styles.i} url="https://www.facebook.com/people/Kwesi-SD/    pfbid0w7kmNKcEjssJumno41EMG7sE894XLFUrtjS2T33jdSADkFuEFb8PbAeQi1hHEkb2l/" />
        <SocialIcon className={styles.i} url="https://twitter.com/_notJamal/" />
        <SocialIcon className={styles.i} url="https://linkedin.com/in/jamalsd" />
        <SocialIcon className={styles.i} url="https://discord.com/users/508709539575758874" />
      </div>
    </div>
  </header>
  );
};

export default Header;