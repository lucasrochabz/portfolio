import { projects } from '@/data/projects';
import { ProjectCard } from '../ProjectCard';
import styles from './ProjectList.module.css';

const ProjectList = () => {
  return (
    <section className={`container ${styles.projectList}`}>
      {projects.items.map((project, id) => (
        <ProjectCard key={id} project={project} />
      ))}
    </section>
  );
};

export default ProjectList;
