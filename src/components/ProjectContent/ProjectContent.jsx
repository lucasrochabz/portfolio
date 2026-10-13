import PropTypes from 'prop-types';
import { useState } from 'react';
import { getImage } from '@/utils/getImage';
import { ProjectGallery } from '@/components/ProjectGallery';
import { Heading } from '@/components/Heading';
import { ButtonLink } from '@/components/ButtonLink';
import styles from './ProjectContent.module.css';

// fix: corrigir esse componente. Acho que tenho que add sections
export const ProjectContent = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState(project.images[0]);
  const imagePath = getImage(selectedImage);

  return (
    <section className={styles.section}>
      <div>
        <figure className={styles.figure}>
          <img src={imagePath} alt={`Imagem do projeto ${project.name}`} />
        </figure>

        <ul className={styles.list}>
          <ProjectGallery
            images={project.images}
            onSelectedImage={setSelectedImage}
          />
        </ul>
      </div>

      <div className={styles.content}>
        <Heading variant="title">{project.name}</Heading>

        <p className={styles.summary}>{project.summary}</p>

        <div className={styles.tools}>
          <h2>Ferramentas</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>React Router</li>
          </ul>
        </div>

        <div className={styles.hosting}>
          <h2>Hospedagem</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>React Router</li>
          </ul>
        </div>

        <nav className={styles.links}>
          <ButtonLink href={project.links.demo} external>
            Ver site
          </ButtonLink>

          <ButtonLink
            href={project.links.repository}
            variant="outline"
            external
          >
            Ver código
          </ButtonLink>
        </nav>
      </div>
    </section>
  );
};

ProjectContent.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.shape({
      repository: PropTypes.string.isRequired,
      demo: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProjectContent;
