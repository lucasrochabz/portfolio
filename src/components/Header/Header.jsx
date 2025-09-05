import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={styles['header-bg']}>
        <div className={styles.header}>
          <h2 className={styles.logo}>Lucas Rocha</h2>

          <nav className={styles.nav}>
            <a href="#about">Entre em contato</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
