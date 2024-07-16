import './ProjectCard.css';

export const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="project-card">
        <figure>
          <h2>{project.image}</h2>
        </figure>

        <div className="project-card-info">
          <h2>{project.name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            exercitationem.
          </p>
          <ul className="card-tools-list">
            {project.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
          <div className="external-links">
            <a href="#">GitHub</a>
            <a href="#">Site</a>
          </div>
        </div>
      </div>
    </>
  );
};
