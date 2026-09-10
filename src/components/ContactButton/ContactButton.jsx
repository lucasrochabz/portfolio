import { contact } from '@/data/contact';
import styles from './ContactButton.module.css';

const ContactButton = () => {
  return (
    <a href={contact.mailto} className={styles.contact}>
      Entre em contato
    </a>
  );
};

export default ContactButton;
