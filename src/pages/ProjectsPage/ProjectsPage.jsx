import { projects } from '@/data/projects';
import { Layout } from '@/components/Layout';
import { ProjectList } from '@/components/ProjectList';

// fix: resolver depois problema do container no projetcList
const ProjectsPage = () => {
  return (
    <Layout>
      <h1 className="title">{projects.title}</h1>
      <p className="subtitle">{projects.subtitle}</p>

      <ProjectList />
    </Layout>
  );
};

export default ProjectsPage;
