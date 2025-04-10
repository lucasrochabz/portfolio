import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles['container-bg']}>
      <section className={styles.content}>
        <div className={styles.item}>
          <h2>lucas@example.com</h2>

          <ul className={styles.list}>
            <li className={styles.top}>Siga</li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">GitHub</a>
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
            Copyright &copy; 2024 Lucas Rocha. Todos os direitos reservados.
          </p>
        </div>
      </section>
    </footer>
  );
};
