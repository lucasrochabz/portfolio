import { projects } from '@/data/projects';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Heading } from '@/components/Heading';
import { ProjectList } from '@/components/ProjectList';

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projetos" description="Conheça meus projetos" />

      <Heading variant="title">{projects.title}</Heading>
      <p className="subtitle">{projects.subtitle}</p>

      <ProjectList projects={projects.items} />
    </Layout>
  );
};

export default ProjectsPage;
