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
            {project.links.map((link) => (
              <ExternalLinkOld
                key={link.url}
                href={link.url}
                variant={link.variant}
              >
                {link.name}
              </ExternalLinkOld>
            ))}
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
    links: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        variant: PropTypes.oneOf(['primary', 'secondary']),
      }),
    ),
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
