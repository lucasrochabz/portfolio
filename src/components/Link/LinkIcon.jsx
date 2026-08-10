import PropTypes from 'prop-types';
import styles from './Link.module.css';

const LinkIcon = ({ src, alt }) => {
  return <img src={src} alt={alt} aria-hidden="true" className={styles.icon} />;
};

LinkIcon.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default LinkIcon;
