import PropTypes from 'prop-types';
import styles from './ExternalLinkOld.module.css';

const ExternalLinkOld = ({ variant = 'primary', href, icon, children }) => {
  const variantClass = styles[variant] || styles.primary;
  const isExternal = href.startsWith('http');

  const extraProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a href={href} {...extraProps} className={`${styles.base} ${variantClass}`}>
      {icon && <img src={icon} alt="" className={styles.icon} />}
      {children}
    </a>
  );
};

ExternalLinkOld.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'social', 'cta']), // restringe a esses valores
  href: PropTypes.string.isRequired, // sempre precisa ter link
  icon: PropTypes.string, // caminho para a imagem opcional
  children: PropTypes.node.isRequired, // pode ser texto, ícone, etc.
};

export default ExternalLinkOld;
