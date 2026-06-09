import PropTypes from 'prop-types';
import styles from './ExperienceList.module.css';

const ExperienceList = ({ experiences }) => {
  return (
    <>
      <h2 className={styles.section}>Carreira</h2>

      <div className={styles.experiences}>
        {experiences.map(
          ({ company, role, location, startDate, endDate, duration }) => (
            <div key={company} className={styles.item}>
              <p className={styles.role}>{role}</p>
              <p>
                {company} — {location}
              </p>
              <p>
                {startDate} — {endDate} | {duration}
              </p>
            </div>
          ),
        )}
      </div>
    </>
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
