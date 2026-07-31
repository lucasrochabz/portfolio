import { projects } from '@/data/projects';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { ProjectList } from '@/components/ProjectList';
import { Footer } from '@/components/Footer';

// fix: add botão para ver todos os projetos
const HomePage = () => {
  const featuredProjects = projects.items.filter((project) => project.featured);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <ProjectList projects={featuredProjects} />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
