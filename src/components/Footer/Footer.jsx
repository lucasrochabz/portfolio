import { Link } from 'react-router-dom';
import { ExternalLink } from '../ExternalLink';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerBg}>
      <section className={styles.footer}>
        <ul className={styles.listLinks}>
          <li>
            <ExternalLink
              variant="social"
              href="https://www.linkedin.com/in/lucasrochabz"
              icon="/linkedin.svg"
            >
              LinkedIn
            </ExternalLink>
          </li>

          <li>
            <ExternalLink
              variant="social"
              href="https://github.com/lucasrochabz"
              icon="/github.svg"
            >
              GitHub
            </ExternalLink>
          </li>

          <li>
            <ExternalLink
              variant="social"
              href="https://www.instagram.com/lucasrochabz"
              icon="/instagram.svg"
            >
              Instagram
            </ExternalLink>
          </li>
        </ul>

        <div className={styles.bottom}>
          <p>&copy; 2025 Lucas Rocha. Todos os direitos reservados.</p>

          <Link to="/historico">
            <p className={styles.version}>v2.0</p>
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
