import { Link } from 'react-router-dom';
import { ROUTES } from '../../paths';
import { ExternalLinkOld } from '../ExternalLinkOld';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerBg}>
      <div className={styles.header}>
        <Link to={ROUTES.home}>
          <h2 className={styles.logo}>Lucas Rocha</h2>
        </Link>

        <nav>
          <ExternalLinkOld
            href="mailto:lucasbezerrar@gmail.com?subject=Assunto%20do%20e-mail"
            variant="cta"
          >
            Entre em contato
          </ExternalLinkOld>
        </nav>
      </div>
    </header>
  );
};

export default Header;
