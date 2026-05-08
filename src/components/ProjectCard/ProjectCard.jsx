import PropTypes from 'prop-types';
import { Anchor } from '@/components/Anchor';
import styles from './ProjectCard.module.css';

const images = import.meta.glob('/src/assets/projects/*', {
  eager: true,
});

const ProjectCard = ({ project }) => {
  const imageModule = images[`/src/assets/projects/${project.image}`];
  const imagePath = imageModule?.default;

  const linkVariantMap = {
    demo: 'primary',
    repo: 'secondary',
  };

  return (
    <div className={styles.card}>
      <figure>
        <img src={imagePath} alt={imagePath} />
      </figure>

      <div className={styles.content}>
        <h2 className="subtitle">{project.name}</h2>

        <ul className={styles.list}>
          {project.tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>

        <p>{project.description}</p>

        <nav className={styles.links}>
          {project.links.map((link) => (
            <Anchor.Root
              key={link.url}
              href={link.url}
              variant={linkVariantMap[link.type]}
            >
              {link.name}
            </Anchor.Root>
          ))}
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
    links: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        variant: PropTypes.oneOf(['demo', 'repo']),
      }),
    ),
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
