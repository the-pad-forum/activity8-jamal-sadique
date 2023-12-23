import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <>  
    <section className={styles.contact}>
      <h2 className={styles.h2}>CONTACT</h2>
      <form action="#" method="post">
        <div className={styles.inputGroup}>
          <input type="text" id="name" name="name" placeholder="Name" required />
          <span></span>
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
        <textarea id="message" name="message" placeholder="Message" required />
        <button type="submit">Submit</button>
      </form>
    </section>
    </>
    
  );
};

export default Contact;