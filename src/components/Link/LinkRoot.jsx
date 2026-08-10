import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Link.module.css';

const LinkRoot = ({ href, to, variant = 'primary', children }) => {
  const variantClass = styles[variant] || styles.primary;

  if (to) {
    return (
      <RouterLink to={to} className={variantClass}>
        {children}
      </RouterLink>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={variantClass}
    >
      {children}
    </a>
  );
};

LinkRoot.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'cta', 'footer', 'status']),
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default LinkRoot;
