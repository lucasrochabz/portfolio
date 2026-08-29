import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '@/data/projects';
import { getImage } from '@/utils/getImage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { SEO } from '@/components/SEO';
import { ProjectGallery } from '@/components/ProjectGallery';
import { Heading } from '@/components/Heading';
import { ToolList } from '@/components/ToolList';
import { Link } from '@/components/Link';
import styles from './ProjectPage.module.css';

// fix: observar se é melhor colocar navigate no lugar do if
// Fix: melhorar essa página corrigir css
// fix: estou com problema na imagem pois ela começa com número e depois vira string
const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.items.find((project) => project.slug === slug);

  const [selectedImage, setSelectedImage] = useState(0);
  const imagePath = getImage(project.images[selectedImage]);

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
            <Link.Root href={project.links.repository} variant="tertiary">
              Ver código
            </Link.Root>

            <Link.Root href={project.links.demo}>Ver site</Link.Root>
          </nav>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
