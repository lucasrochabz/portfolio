import PropTypes from 'prop-types';
import { NAVIGATION_LINKS } from '@/constants/navigation';
import { Link } from '@/components/Link';
import styles from './MenuMobile.module.css';

const MenuMobile = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <nav className={styles.menuMobile}>
      {NAVIGATION_LINKS.map((link) => (
        <Link.Root to={link.path} key={link.label}>
          {link.label}
        </Link.Root>
      ))}
    </nav>
  );
};

MenuMobile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MenuMobile;
