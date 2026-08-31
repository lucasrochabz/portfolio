import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '@/data/projects';
import { getImage } from '@/utils/getImage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { SEO } from '@/components/SEO';
import { ProjectGallery } from '@/components/ProjectGallery';
import { Heading } from '@/components/Heading';
import { ToolList } from '@/components/ToolList';
import { ExternalLink } from '@/components/ExternalLink';
import styles from './ProjectPage.module.css';

// fix: observar se é melhor colocar navigate no lugar do if
// Fix: melhorar essa página corrigir css
const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.items.find((project) => project.slug === slug);

  const [selectedImage, setSelectedImage] = useState(project.images[0]);
  const imagePath = getImage(selectedImage);

  if (!project) return <NotFoundPage />;

  return (
    <>
      <SEO title={project.name} description={project.summary} />

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
    </>
  );
};

export default ProjectPage;
