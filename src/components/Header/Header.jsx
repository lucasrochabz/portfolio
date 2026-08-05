import { Logo } from '@/components/Logo';
import { Anchor } from '@/components/Anchor';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerBg}>
      <div className={styles.header}>
        <Logo />

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
