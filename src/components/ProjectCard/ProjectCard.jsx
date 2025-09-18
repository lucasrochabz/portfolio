import ExternalLink from '../ExternalLink/ExternalLink';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const images = import.meta.glob('/src/assets/images/*', {
    eager: true,
  });

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
            <ExternalLink href={project.site} variant="primary">
              Site
            </ExternalLink>

            <ExternalLink href={project.repository} variant="secondary">
              Repositório
            </ExternalLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
