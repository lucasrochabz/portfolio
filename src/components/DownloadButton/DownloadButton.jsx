import PropTypes from 'prop-types';
import { Download } from 'lucide-react';
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
      <Download />
      {label}
    </a>
  );
};

DownloadButton.propTypes = {
  file: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default DownloadButton;
