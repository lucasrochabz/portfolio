import PropTypes from 'prop-types';
import { Download } from 'lucide-react';
import styles from './DownloadButton.module.css';

const DownloadButton = ({ href, children }) => {
  return (
    <a href={href} download className={styles.download}>
      <Download />
      {children}
    </a>
  );
};

DownloadButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default DownloadButton;
