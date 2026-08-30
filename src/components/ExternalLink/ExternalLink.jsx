import PropTypes from 'prop-types';
import styles from './ExternalLink.module.css';

// fix: corrigir classe
const ExternalLink = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.external}
    >
      {children}
    </a>
  );
};

ExternalLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ExternalLink;
