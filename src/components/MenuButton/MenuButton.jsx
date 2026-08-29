import PropTypes from 'prop-types';
import { Menu, X } from 'lucide-react';
import styles from './MenuButton.module.css';

const MenuButton = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button type="button" onClick={handleClick} className={styles.menuButton}>
      {isOpen ? <X /> : <Menu />}
    </button>
  );
};

MenuButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default MenuButton;
