import PropTypes from 'prop-types';
import { Heading } from '@/components/Heading';
import styles from './Accordion.module.css';

// fix: mudar nome desse componente
const Accordion = ({ versions }) => {
  return (
    <ul className={styles.list}>
      {versions.map((release) => (
        <li key={release.version}>
          <article className={styles.card}>
            <header className={styles.header}>
              <Heading as="h2" className={styles.version}>
                {release.version}
              </Heading>

              <time className={styles.date}>{release.date}</time>
            </header>

            <p className={styles.description}>{release.description}</p>
          </article>
        </li>
      ))}
    </ul>
  );
};

Accordion.propTypes = {
  versions: PropTypes.arrayOf(
    PropTypes.shape({
      version: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Accordion;
