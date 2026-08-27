import { useParams } from 'react-router-dom';
import { projects } from '@/data/projects';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { SEO } from '@/components/SEO';
import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';
import styles from './ProjectPage.module.css';
import { useState } from 'react';

import { ProjectGallery } from '@/components/ProjectGallery';
import { ToolList } from '@/components/ToolList';

const images = import.meta.glob('/src/assets/projects/*', {
  eager: true,
});

// Fix: melhorar essa página corrigir css
const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.items.find((project) => project.slug === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  const [selectedImage, setSelectedImage] = useState(project.images[0]);

  // const imageModule = images[`/src/assets/projects/${project.image}`];
  const imageModule = images[`/src/assets/projects/${selectedImage}`];
  const imagePath = imageModule?.default;

  return (
    <>
      <SEO title={project.name} description={project.summary} />

      <section className={styles.project}>
        <Heading variant="title">{project.name}</Heading>

        <div className={styles.content}>
          <div>
            <figure>
              <img src={imagePath} alt="Imagem do projeto" />
            </figure>

            <ul className={styles.list}>
              <ProjectGallery
                images={project.images}
                setSelectedImage={setSelectedImage}
              />
            </ul>
          </div>

          <div className={styles.teste}>
            <ToolList tools={project.tools} />

            <p>{project.summary}</p>

            <nav className={styles.nav}>
              <Link.Root href={project.links.repository} variant="tertiary">
                Repositório
              </Link.Root>

              <Link.Root href={project.links.demo}>Ver site</Link.Root>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
