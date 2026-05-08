import PropTypes from 'prop-types';
import styles from './Anchor.module.css';

const AnchorIcon = ({ src, alt }) => {
  return <img src={src} alt={alt} aria-hidden="true" className={styles.icon} />;
};

AnchorIcon.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default AnchorIcon;
