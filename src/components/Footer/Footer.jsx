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
              LinkedIn
            </a>
          </li>

          <li>
            <a href="https://github.com/lucasrochabz" target="blank">
              GitHub
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/lucasrochabz" target="blank">
              Instagram
            </a>
          </li>
        </ul>

        <div className={styles.footer}>
          <p>&copy; 2025 Lucas Rocha. Todos os direitos reservados.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
