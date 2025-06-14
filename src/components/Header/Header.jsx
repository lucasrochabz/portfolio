import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={styles['header-bg']}>
        <div className={styles.header}>
          <h2 className={styles.logo}>Lucas Rocha</h2>

          <nav>
            <ul className={styles.nav}>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
