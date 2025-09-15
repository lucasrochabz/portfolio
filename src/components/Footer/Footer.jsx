import ExternalLink from '../ExternalLink/ExternalLink';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerBg}>
      <section className={styles.footer}>
        <ul className={styles.listLinks}>
          <li>
            <ExternalLink
              variant="social"
              href="https://www.linkedin.com/in/lucas-bezerra-rocha"
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
          <p className={styles.version}>v2.0</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
