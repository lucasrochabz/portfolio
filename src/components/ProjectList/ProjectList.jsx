import { ProjectCard } from '../ProjectCard';
import { projectsData } from '../../data/projectsData';
import styles from './ProjectList.module.css';

const ProjectList = () => {
  return (
    <>
      <section id="projetos" className={styles.projectList}>
        {projectsData.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </section>
    </>
  );
};

export default ProjectList;
