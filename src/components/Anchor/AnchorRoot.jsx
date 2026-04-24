import PropTypes from 'prop-types';
import styles from './Anchor.module.css';

const ExternalLinkRoot = ({ href, variant = 'primary', children }) => {
  const variantClass = styles[variant] || styles.primary;
  const isExternal = href.startsWith('http');

  const extraProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a href={href} {...extraProps} className={`${styles.base} ${variantClass}`}>
      {children}
    </a>
  );
};

ExternalLinkRoot.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'social', 'cta']), // restringe a esses valores
  href: PropTypes.string.isRequired, // sempre precisa ter link
  children: PropTypes.node.isRequired, // pode ser texto, ícone, etc.
};

export default ExternalLinkRoot;
