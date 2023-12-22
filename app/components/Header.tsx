import Image from "next/image";
<<<<<<< HEAD
import DP from '../images/jamals-profile.png'
import styles from '../styles/Header.module.css'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/twitter'
import 'react-social-icons/linkedin'
import 'react-social-icons/discord'

const Header = () => {
  return(
  <header className={styles.header}>
    <Image className={styles.dp} src={DP} width="124" height="124" alt="" />
    <h1>Jamal Sadique-Donkor</h1>
    <p>A Beginner Web Developer at the PAD Forum.</p>
    {/* Social links go here */}
    <SocialIcon url="https://www.facebook.com/people/Kwesi-SD/pfbid0w7kmNKcEjssJumno41EMG7sE894XLFUrtjS2T33jdSADkFuEFb8PbAeQi1hHEkb2l/" />
  <SocialIcon url="https://twitter.com/_notJamal/" />
  <SocialIcon url="https://linkedin.com/in/jamalsd" />
  <SocialIcon url="https://discord.com/users/508709539575758874" />
=======
import DP from '../images/nana-adjoa.png'
import styles from '../styles/Header.module.css'

const Header = () => {
  return(
    
  <header className={styles.header}>
    <Image className={styles.dp} src={DP} width="124" height="124" alt="" />
    <h1>Nana Adjoa</h1>
    <p>A Beginner Web Developer at the PAD Forum</p>
    {/* Social links go here */}
>>>>>>> 8ad577096e6c8b0fd3446f513cfb09b3d2991620
  </header>
  );
};

export default Header;