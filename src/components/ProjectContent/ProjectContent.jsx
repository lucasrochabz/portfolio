import PropTypes from 'prop-types';
import { useState } from 'react';
import { getImage } from '@/utils/getImage';
import { ProjectGallery } from '@/components/ProjectGallery';
import { Heading } from '@/components/Heading';
import { ToolList } from '@/components/ToolList';
import { ExternalLink } from '@/components/ExternalLink';
import styles from './ProjectContent.module.css';

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

        <ToolList tools={project.tools} />

        <p className={styles.summary}>{project.summary}</p>

        <nav className={styles.nav}>
          <ExternalLink href={project.links.repository} variant={'outline'}>
            Ver código
          </ExternalLink>

          <ExternalLink href={project.links.demo} variant={'fill'}>
            Ver site
          </ExternalLink>
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
