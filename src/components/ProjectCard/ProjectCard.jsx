import PropTypes from 'prop-types';
import { PATHS } from '@/constants/paths';
import { getImage } from '@/utils/getImage';
import { Heading } from '@/components/Heading';
import { ToolList } from '@/components/ToolList';
import { ButtonLink } from '@/components/ButtonLink';
import { LearnMore } from '@/components/LearnMore';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const imagePath = getImage(project.images[0]);

  return (
    <article className={styles.card}>
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
          <ButtonLink href={project.links.demo} external>
            Ver site
          </ButtonLink>

          <LearnMore to={PATHS.PROJECTS.detailsPath(project.slug)} />
        </nav>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
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
