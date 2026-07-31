import PropTypes from 'prop-types';
import { Heading } from '@/components/Heading';
import { ToolList } from '@/components/ToolList';
import { Anchor } from '@/components/Anchor';
import styles from './ProjectCard.module.css';

const images = import.meta.glob('/src/assets/projects/*', {
  eager: true,
});

const ProjectCard = ({ project }) => {
  const imageModule = images[`/src/assets/projects/${project.image}`];
  const imagePath = imageModule?.default;

  return (
    <div className={styles.card}>
      <figure>
        <img src={imagePath} alt={imagePath} />
      </figure>

      <div className={styles.content}>
        <Heading as="h2" className={styles.name}>
          {project.name}
        </Heading>

        <ToolList tools={project.tools} />

        <p className={styles.summary}>{project.summary}</p>

        <nav className={styles.links}>
          <Anchor.Root href={project.links.demo} variant="primary">
            Site
          </Anchor.Root>

          <Anchor.Root href={project.links.repository} variant="secondary">
            Repositório
          </Anchor.Root>
        </nav>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.shape({
      demo: PropTypes.string.isRequired,
      repository: PropTypes.string.isRequired,
    }),
    summary: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
