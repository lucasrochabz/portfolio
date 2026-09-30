import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ButtonLink.module.css';

// fix: trocar os links por esse
// fix: add variant ghost (externo)
const ButtonLink = ({
  to,
  href,
  external = false,
  variant = 'fill',
  children,
}) => {
  const variantClass = styles[variant] || styles.fill;

  if (external) {
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
  }

  return (
    <Link to={to} className={variantClass}>
      {children}
    </Link>
  );
};

ButtonLink.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  external: PropTypes.bool,
  variant: PropTypes.oneOf(['fill', 'outline', 'ghost', 'contact']),
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
