import PropTypes from 'prop-types';
import { PATHS } from '@/constants/paths';
import { getImage } from '@/utils/getImage';
import { Heading } from '@/components/Heading';
import { ButtonLink } from '@/components/ButtonLink';
import { LearnMore } from '@/components/LearnMore';
import styles from './ProjectCard.module.css';

// fix: atualizar esse componente
const ProjectCard = ({ project }) => {
  const imagePath = getImage(project.images[0]);

  return (
    <article className={styles.card}>
      <figure>
        <img src={imagePath} alt={project.name} />
      </figure>

      <div className={styles.content}>
        <Heading as="h2" className={styles.name}>
          {project.name}
        </Heading>

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
    links: PropTypes.shape({
      demo: PropTypes.string.isRequired,
    }),
    summary: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
