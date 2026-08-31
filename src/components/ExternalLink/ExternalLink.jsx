import PropTypes from 'prop-types';
import styles from './ExternalLink.module.css';

// fix: corrigir esse componente
// fix: add variant ghost
const ExternalLink = ({ href, variant, children }) => {
  const variantClass = styles[variant] || styles.external;

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

ExternalLink.propTypes = {
  href: PropTypes.string,
  variant: PropTypes.oneOf(['fill', 'outline', 'external']),
  children: PropTypes.node.isRequired,
};

export default ExternalLink;
