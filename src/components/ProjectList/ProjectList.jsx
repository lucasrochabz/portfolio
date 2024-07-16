import { ProjectCard } from '../ProjectCard/ProjectCard';
import './ProjectList.css';

export const ProjectList = () => {
  const projects = [
    {
      image: 'imagem1',
      name: 'Nome do Projeto 1',
    },
    {
      image: 'imagem2',
      name: 'Nome do Projeto 2',
    },
    {
      image: 'imagem3',
      name: 'Nome do Projeto 3',
    },
  ];

  return (
    <>
      <section className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </>
  );
};
