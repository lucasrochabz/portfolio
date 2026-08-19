import { useState } from 'react';
import { contact } from '@/data/contact';
import { Logo } from '@/components/Logo';
import { Link } from '@/components/Link';
import { MenuButton } from '@/components/MenuButton';
import { MenuMobile } from '@/components/MenuMobile';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.headerBg}>
      <div className={styles.header}>
        <Logo isHeader={true} />

        <nav className={styles.mailto}>
          <Link.Root href={contact.mailto} variant="cta">
            Entre em contato
          </Link.Root>
        </nav>

        <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <MenuMobile isOpen={isOpen} />
    </header>
  );
};

export default Header;
