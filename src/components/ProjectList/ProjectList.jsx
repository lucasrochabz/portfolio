import PropTypes from 'prop-types';
import { ProjectCard } from '../ProjectCard';
import styles from './ProjectList.module.css';

// fix: add proptypes
const ProjectList = ({ projects }) => {
  return (
    <section className={`container ${styles.projectList}`}>
      {projects.map((project, id) => (
        <ProjectCard key={id} project={project} />
      ))}
    </section>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      featured: PropTypes.bool,
      slug: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      tools: PropTypes.arrayOf(PropTypes.string).isRequired,
      summary: PropTypes.string.isRequired,
      links: PropTypes.shape({
        demo: PropTypes.string.isRequired,
        repository: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
};

export default ProjectList;
