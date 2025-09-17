import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.headerBg}>
        <div className={styles.header}>
          <Link to="/">
            <h2 className={styles.logo}>Lucas Rocha</h2>
          </Link>

          <nav>
            <a
              className={styles.buttonCta}
              href="mailto:lucasbezerrar@gmail.com?subject=Assunto%20do%20e-mail"
            >
              Entre em contato
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
