import { useParams } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Layout } from '@/components/Layout';

const images = import.meta.glob('/src/assets/projects/*', {
  eager: true,
});

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.items.find((project) => project.slug === slug);

  const imageModule = images[`/src/assets/projects/${project.image}`];
  const imagePath = imageModule?.default;

  return (
    <Layout>
      <section>
        <h1>Detalhes do Projeto</h1>
        <h3>Projeto {project.name}</h3>
        <p>{project.summary}</p>
        <img src={imagePath} alt="Imagem do projeto" />
      </section>
    </Layout>
  );
};

export default ProjectPage;
