import PropTypes from 'prop-types';
import { PATHS } from '@/constants/paths';
import { Link } from '@/components/Link';
import styles from './MenuMobile.module.css';

// fix: acho que é melhor criar um arquivo em constants
const navigationLinks = [
  { path: PATHS.HOME, label: 'Home' },
  { path: PATHS.ABOUT, label: 'Sobre' },
  { path: PATHS.PROJECTS.INDEX, label: 'Projetos' },
  { path: PATHS.COURSE, label: 'Cursos' },
];

const MenuMobile = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <nav className={styles.menuMobile}>
      {navigationLinks.map((link) => (
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
