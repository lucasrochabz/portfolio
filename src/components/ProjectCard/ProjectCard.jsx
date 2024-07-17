import './ProjectCard.css';

export const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="project-card">
        <figure>
          <h2>{project.image}</h2>
        </figure>

        <div className="card-info">
          <h2 className="project-title">{project.name}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            ipsa nihil non facilis, voluptatibus atque dolor adipisci est
            architecto animi!
          </p>
          <div className="tools-container">
            <ul className="card-tools-list">
              {project.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
            <div className="external-links">
              <a href="#">Site</a>
              <a href="#">Repositório</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
