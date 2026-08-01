import PropTypes from 'prop-types';
import { ProjectCard } from '../ProjectCard';
import styles from './ProjectList.module.css';

const ProjectList = ({ projects, withContainer = false }) => {
  const className = withContainer
    ? `container ${styles.list}`
    : styles.projectList;

  return (
    <ul className={className}>
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
};

ProjectList.propTypes = {
  withContainer: PropTypes.bool,
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
