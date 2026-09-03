import { useState } from 'react';
import { Logo } from '@/components/Logo';
import { MenuButton } from '@/components/MenuButton';
import { MenuMobile } from '@/components/MenuMobile';
import { ContactButton } from '@/components/ContactButton';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.headerBg}>
      <div className={styles.header}>
        <Logo isHeader={true} />

        <nav className={styles.mailto}>
          <ContactButton />
        </nav>

        <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <MenuMobile isOpen={isOpen} />
    </header>
  );
};

export default Header;
