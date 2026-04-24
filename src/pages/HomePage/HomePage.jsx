import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { ProjectList } from '@/components/ProjectList';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Marquee />
      <ProjectList />
    </Layout>
  );
};

export default HomePage;
