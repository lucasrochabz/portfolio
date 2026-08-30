import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './InternalLink.module.css';

// fix: corrigir classe
const InternalLink = ({ to, children }) => {
  return (
    <Link to={to} className={styles.internal}>
      {children}
    </Link>
  );
};

InternalLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default InternalLink;
