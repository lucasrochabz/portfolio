import { useState } from 'react';
import { NAVIGATION_LINKS } from '@/constants/navigation';
import { contact } from '@/data/contact';
import { Logo } from '@/components/Logo';
import { ButtonLink } from '@/components/ButtonLink';
import { MenuButton } from '@/components/MenuButton';
import { MenuMobile } from '@/components/MenuMobile';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.headerBg}>
      <div className={styles.header}>
        <Logo isHeader={true} />

        <nav className={styles.navigation}>
          {NAVIGATION_LINKS.map((link) => (
            <ButtonLink to={link.path} variant="ghost" key={link.label}>
              {link.label}
            </ButtonLink>
          ))}
        </nav>

        <div className={styles.mailto}>
          <ButtonLink href={contact.mailto} variant="contact" external>
            Entre em contato
          </ButtonLink>
        </div>

        <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <MenuMobile isOpen={isOpen} />
    </header>
  );
};

export default Header;
