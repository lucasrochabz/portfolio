import { ProjectCard } from '../ProjectCard';
import { projects } from '@/data/projects';
import styles from './ProjectList.module.css';

const ProjectList = () => {
  return (
    <section id="projetos" className={styles.projectList}>
      {projects.map((project, id) => (
        <ProjectCard key={id} project={project} />
      ))}
    </section>
  );
};

export default ProjectList;
