import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { Anchor } from '../Anchor';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerBg}>
      <div className={styles.header}>
        <Link to={ROUTES.HOME}>
          <h2 className="logo">Lucas Rocha</h2>
        </Link>

        <nav>
          <Anchor.Root
            href="mailto:lucasbezerrar@gmail.com?subject=Assunto%20do%20e-mail"
            variant="cta"
          >
            Entre em contato
          </Anchor.Root>
        </nav>
      </div>
    </header>
  );
};

export default Header;
