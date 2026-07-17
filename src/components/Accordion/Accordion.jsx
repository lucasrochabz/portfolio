import PropTypes from 'prop-types';
import styles from './Accordion.module.css';

// fix: mudar nome desse componente
const Accordion = ({ versions }) => {
  return (
    <ul className={styles.accordion}>
      {versions.map((release) => (
        <li key={release.version} className={styles.card}>
          <div className={styles.top}>
            <h2 className={styles.version}>{release.version}</h2>
            <span>{release.date}</span>
          </div>

          <p>{release.description}</p>
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
  ),
};

export default Accordion;
