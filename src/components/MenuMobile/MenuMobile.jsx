import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { NAVIGATION_LINKS } from '@/constants/navigation';
import styles from './MenuMobile.module.css';

// fix: acho que tenho que usar o Link.Root
const MenuMobile = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <nav className={styles.menuMobile}>
      {NAVIGATION_LINKS.map((link) => (
        <Link key={link.label} to={link.path} className={styles.link}>
          <span>{link.label}</span>
          <ChevronRight />
        </Link>
      ))}
    </nav>
  );
};

MenuMobile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MenuMobile;
