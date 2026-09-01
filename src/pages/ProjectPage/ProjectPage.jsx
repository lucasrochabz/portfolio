import { useParams } from 'react-router-dom';
import { projects } from '@/data/projects';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { SEO } from '@/components/SEO';
import { ProjectContent } from '@/components/ProjectContent';

// Fix: melhorar essa página corrigir css
const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.items.find((project) => project.slug === slug);

  if (!project) return <NotFoundPage />;

  return (
    <>
      <SEO title={project.name} description={project.summary} />

      <ProjectContent project={project} />
    </>
  );
};

export default ProjectPage;
