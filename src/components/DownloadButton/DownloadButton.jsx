import PropTypes from 'prop-types';
import styles from './DownloadButton.module.css';

const DownloadButton = ({ file, label }) => {
  return (
    <a
      href={file}
      download
      target="_blank"
      rel="noopener noreferrer"
      className={styles.download}
    >
      {label}
    </a>
  );
};

DownloadButton.propTypes = {
  file: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default DownloadButton;
