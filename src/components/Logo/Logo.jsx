import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logoLight from '@/assets/images/logo-light.svg';
import { PATHS } from '@/constants/paths';
import styles from './Logo.module.css';

// fix: acho que da para tirar esse isHeader
const Logo = ({ isHeader }) => {
  if (isHeader) {
    return (
      <Link to={PATHS.HOME} className={styles.logo}>
        <img src={logoLight} alt="Lucas Rocha" />
      </Link>
    );
  }

  return <img src={logoLight} alt="Lucas Rocha" />;
};

Logo.propTypes = {
  isHeader: PropTypes.bool,
};

export default Logo;
