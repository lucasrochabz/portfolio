import PropTypes from 'prop-types';
import styles from './ExperienceList.module.css';

const ExperienceList = ({ experiences }) => {
  return (
    <section className={styles.career}>
      <h2>Carreira</h2>

      <ul className={styles.list}>
        {experiences.map(
          ({ company, role, location, startDate, endDate, duration }) => (
            <li key={company} className={styles.item}>
              <h3 className={styles.role}>{role}</h3>

              <p>
                {company} — {location}
              </p>

              <time>
                {startDate} — {endDate} | {duration}
              </time>
            </li>
          ),
        )}
      </ul>
    </section>
  );
};

ExperienceList.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ExperienceList;
