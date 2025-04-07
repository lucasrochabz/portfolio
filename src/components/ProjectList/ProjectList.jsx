import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './ProjectList.module.css';

export const ProjectList = () => {
  const projects = [
    {
      image: 'imagem1',
      name: 'Nome do Projeto 1',
      tools: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      image: 'imagem2',
      name: 'Nome do Projeto 2',
      tools: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      image: 'imagem3',
      name: 'Nome do Projeto 3',
      tools: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  return (
    <>
      <section id="projetos" className={styles['project-list']}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </>
  );
};
