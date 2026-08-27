import PropTypes from 'prop-types';
import { PATHS } from '@/constants/paths';
import { Heading } from '@/components/Heading';
import { ToolList } from '@/components/ToolList';
import { Link } from '@/components/Link';
import { LearnMore } from '@/components/LearnMore';
import styles from './ProjectCard.module.css';

const images = import.meta.glob('/src/assets/projects/*', {
  eager: true,
});

const ProjectCard = ({ project, reverse }) => {
  const imageModule = images[`/src/assets/projects/${project.images[0]}`];
  const imagePath = imageModule?.default;

  return (
    <article className={`${styles.card} ${reverse ? styles.reverse : ''}`}>
      <figure className={styles.figure}>
        <img src={imagePath} alt={project.name} />
      </figure>

      <div className={styles.content}>
        <Heading as="h2" className={styles.name}>
          {project.name}
        </Heading>

        <ToolList tools={project.tools} />

        <p className={styles.summary}>{project.summary}</p>

        <nav className={styles.links}>
          <Link.Root href={project.links.demo} variant="primary">
            Ver site
          </Link.Root>

          <LearnMore to={PATHS.PROJECTS.detailsPath(project.slug)} />
        </nav>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  reverse: PropTypes.bool,
  project: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.shape({
      demo: PropTypes.string.isRequired,
    }),
    summary: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
