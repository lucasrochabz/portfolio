import projeto from './../../assets/projeto-portfolio.png';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ project }) => {
  return (
    <>
      <div className={styles['project-card']}>
        <figure>
          <img src={projeto} alt="" />
        </figure>

        <div className={styles['card-info']}>
          <h2 className={styles['project-title']}>{project.name}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            ipsa nihil non facilis, voluptatibus atque dolor adipisci est
            architecto animi!
          </p>
          <div className={styles['tools-container']}>
            <ul className={styles['card-tools-list']}>
              {project.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
            <div className={styles['external-links']}>
              <a href="#">Site</a>
              <a href="#">Repositório</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
