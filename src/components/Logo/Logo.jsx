import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logoWhite from '@/assets/images/logo-white.svg';
import { ROUTES } from '@/constants/routes';
import styles from './Logo.module.css';

const Logo = ({ isHeader }) => {
  if (isHeader) {
    return (
      <Link to={ROUTES.HOME} className={styles.logo}>
        <img src={logoWhite} alt="logo" />
      </Link>
    );
  }

  return <img src={logoWhite} alt="logo" />;
};

Logo.propTypes = {
  isHeader: PropTypes.bool,
};

export default Logo;
