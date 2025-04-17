import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles['container-bg']}>
      <section className={styles.content}>
        <div className={styles.item}>
          <h2>lucasbezerrar@gmail.com</h2>

          <ul className={styles.list}>
            <li className={styles.top}>Siga</li>
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

          <ul className={styles.list}>
            <li className={styles.top}>Links rápidos</li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
          </ul>
        </div>
        <div className={styles.footer}>
          <p>
            Copyright &copy; 2025 Lucas Rocha. Todos os direitos reservados.
          </p>
        </div>
      </section>
    </footer>
  );
};
