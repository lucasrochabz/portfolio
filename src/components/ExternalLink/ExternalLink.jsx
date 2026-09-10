import PropTypes from 'prop-types';
import styles from './ExternalLink.module.css';

// fix: corrigir esse componente
// fix: add variant ghost
const ExternalLink = ({ href, variant = 'fill', children }) => {
  const variantClass = styles[variant] || styles.fill;

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
  variant: PropTypes.oneOf(['fill', 'outline']),
  children: PropTypes.node.isRequired,
};

export default ExternalLink;
