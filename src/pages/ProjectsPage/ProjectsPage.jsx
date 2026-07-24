import { projects } from '@/data/projects';
import { Layout } from '@/components/Layout';
import { Heading } from '@/components/Heading';
import { ProjectList } from '@/components/ProjectList';

// fix: resolver depois problema do container no projetcList
const ProjectsPage = () => {
  return (
    <Layout>
      <Heading variant="title">{projects.title}</Heading>
      <p className="subtitle">{projects.subtitle}</p>

      <ProjectList />
    </Layout>
  );
};

export default ProjectsPage;
