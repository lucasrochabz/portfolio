import './ProjectCard.css';

export const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="project-card">
        <figure>
          <h2>{project.image}</h2>
        </figure>

        <div className="project-card-info">
          <p>{project.name}</p>
          <button>Clique aqui</button>
          <button>Clique aqui</button>
        </div>
      </div>
    </>
  );
};
