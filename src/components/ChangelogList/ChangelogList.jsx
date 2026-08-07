import PropTypes from 'prop-types';
import { ChangelogCard } from '@/components/ChangelogCard';
import styles from './ChangelogList.module.css';

const ChangelogList = ({ versions }) => {
  return (
    <ul className={styles.list}>
      {versions.map((release) => (
        <li key={release.version}>
          <ChangelogCard release={release} />
        </li>
      ))}
    </ul>
  );
};

ChangelogList.propTypes = {
  versions: PropTypes.arrayOf(
    PropTypes.shape({
      version: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ChangelogList;
