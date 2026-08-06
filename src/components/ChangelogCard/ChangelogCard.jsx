import PropTypes from 'prop-types';
import { Heading } from '@/components/Heading';
import styles from './ChangelogCard.module.css';

const ChangelogCard = ({ release }) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <Heading as="h2" className={styles.version}>
          {release.version}
        </Heading>

        <time className={styles.date}>{release.date}</time>
      </header>

      <p className={styles.description}>{release.description}</p>
    </article>
  );
};

ChangelogCard.propTypes = {
  release: PropTypes.shape({
    version: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChangelogCard;
