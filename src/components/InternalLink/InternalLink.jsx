import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './InternalLink.module.css';

// fix: corrigir essas classes
const InternalLink = ({ to, variant = 'fill', children }) => {
  const variantClass = styles[variant] || styles.fill;

  return (
    <Link to={to} className={variantClass}>
      {children}
    </Link>
  );
};

InternalLink.propTypes = {
  to: PropTypes.string,
  variant: PropTypes.oneOf(['fill', 'outline']),
  children: PropTypes.node.isRequired,
};

export default InternalLink;
