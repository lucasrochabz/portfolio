import { useParams } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Layout } from '@/components/Layout';
import { Heading } from '@/components/Heading';

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
      <section>
        <Heading variant="title">Detalhes do Projeto</Heading>

        <Heading as="h3">Projeto {project.name}</Heading>
        <p>{project.summary}</p>
        <img src={imagePath} alt="Imagem do projeto" />
      </section>
    </Layout>
  );
};

export default ProjectPage;
