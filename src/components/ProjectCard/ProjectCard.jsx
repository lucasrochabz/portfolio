import PropTypes from 'prop-types';
import { ExternalLinkOld } from '../ExternalLinkOld';
import styles from './ProjectCard.module.css';

const images = import.meta.glob('/src/assets/images/*', {
  eager: true,
});

const ProjectCard = ({ project }) => {
  const imagePath = images[`/src/assets/images/${project.image}`]?.default;

  return (
    <>
      <div className={styles.card}>
        <figure>
          <img src={imagePath} alt={imagePath} />
        </figure>

        <div className={styles.info}>
          <h2 className="subtitle">{project.name}</h2>
          <ul className={styles.list}>
            {project.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>

          <p>{project.description}</p>

          <div className={styles.links}>
            <ExternalLinkOld href={project.site} variant="primary">
              Site
            </ExternalLinkOld>

            <ExternalLinkOld href={project.repository} variant="secondary">
              Repositório
            </ExternalLinkOld>
          </div>
        </div>
      </div>
    </>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    site: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
