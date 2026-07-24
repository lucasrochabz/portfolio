import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { Heading } from '@/components/Heading';
import { Anchor } from '@/components/Anchor';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerBg}>
      <div className={styles.header}>
        <Link to={ROUTES.HOME}>
          <Heading as="h2" variant="logo">
            Lucas Rocha
          </Heading>
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
