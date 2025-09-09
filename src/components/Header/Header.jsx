import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.headerBg}>
        <div className={styles.header}>
          <h2 className={styles.logo}>Lucas Rocha</h2>

          <nav className={styles.nav}>
            <a href="mailto:lucasbezerrar@gmail.com?subject=Assunto%20do%20e-mail">
              Entre em contato
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
