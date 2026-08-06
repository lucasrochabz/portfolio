import { Logo } from '@/components/Logo';
import { Link } from '@/components/Link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerBg}>
      <div className={styles.header}>
        <Logo isHeader={true} />

        <nav>
          <Link.Root
            href="mailto:lucasbezerrar@gmail.com?subject=Assunto%20do%20e-mail"
            variant="cta"
          >
            Entre em contato
          </Link.Root>
        </nav>
      </div>
    </header>
  );
};

export default Header;
