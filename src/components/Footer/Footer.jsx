import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles['container-bg']}>
      <section className={styles.content}>
        <ul className={styles.list}>
          <li>
            <a
              href="https://www.linkedin.com/in/lucas-bezerra-rocha"
              target="blank"
            >
              <img src="/linkedin.svg" alt="Linkedin" className={styles.icon} />
              LinkedIn
            </a>
          </li>

          <li>
            <a href="https://github.com/lucasrochabz" target="blank">
              <img src="/github.svg" alt="GitHub" className={styles.icon} />
              GitHub
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/lucasrochabz" target="blank">
              <img
                src="/instagram.svg"
                alt="Instagram"
                className={styles.icon}
              />
              Instagram
            </a>
          </li>
        </ul>

        <div className={styles.footer}>
          <p>&copy; 2025 Lucas Rocha. Todos os direitos reservados.</p>
          <p className={styles.version}>v2.0</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
