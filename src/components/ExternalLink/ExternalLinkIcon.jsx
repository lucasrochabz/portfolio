import styles from './ExternalLinkRoot.module.css';

const ExternalLinkIcon = ({ src, alt }) => {
  return <img src={src} alt={alt} aria-hidden="true" className={styles.icon} />;
};

export default ExternalLinkIcon;
