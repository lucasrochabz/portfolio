import styles from './ProjectCard.module.css';

export const ProjectCard = ({ project }) => {
  const images = import.meta.glob('/src/assets/images/*', {
    eager: true,
  });

  const imagePath = images[`/src/assets/images/${project.image}`]?.default;

  return (
    <>
      <div className={styles['project-card']}>
        <figure>
          <img src={imagePath} alt={imagePath} />
        </figure>

        <div className={styles['card-info']}>
          <h2 className="title">{project.name}</h2>
          <p>{project.text}</p>
          <div className={styles['tools-container']}>
            <ul className={styles['card-tools-list']}>
              {project.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
            <div className={styles['external-links']}>
              <a href={project.site} target="blank">
                Site
              </a>
              <a href={project.repository} target="blank">
                Repositório
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
