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
          <p>{project.text}</p>

          <ul className={styles.list}>
            {project.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>

          <div className={styles.links}>
            <a href={project.site} target="blank">
              Site
            </a>
            <a href={project.repository} target="blank">
              Repositório
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
