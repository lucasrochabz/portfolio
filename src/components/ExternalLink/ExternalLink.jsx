import PropTypes from 'prop-types';
import styles from './ExternalLink.module.css';

const ExternalLink = ({ variant, href, icon, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.base} ${styles[variant]}`}
    >
      {icon && <img src={icon} alt="" className={styles.icon} />}
      {children}
    </a>
  );
};

ExternalLink.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'social']), // restringe a esses valores
  href: PropTypes.string.isRequired, // sempre precisa ter link
  icon: PropTypes.string, // caminho para a imagem opcional
  children: PropTypes.node.isRequired, // pode ser texto, ícone, etc.
};

export default ExternalLink;
