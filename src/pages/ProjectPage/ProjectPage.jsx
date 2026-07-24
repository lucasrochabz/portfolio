import { useParams } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Layout } from '@/components/Layout';
import { Heading } from '@/components/Heading';
import styles from './ProjectPage.module.css';

const images = import.meta.glob('/src/assets/projects/*', {
  eager: true,
});

// Fix: melhorar essa página
const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.items.find((project) => project.slug === slug);

  const imageModule = images[`/src/assets/projects/${project.image}`];
  const imagePath = imageModule?.default;

  return (
    <Layout>
      <section className={styles.project}>
        <Heading variant="title">{project.name}</Heading>
        <div className={styles.content}>
          <img src={imagePath} alt="Imagem do projeto" />
          <p>{project.summary}</p>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectPage;
