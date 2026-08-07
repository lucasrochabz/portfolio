import { projects } from '@/data/projects';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { ProjectList } from '@/components/ProjectList';
import { Link } from '@/components/Link';
import { Footer } from '@/components/Footer';
import styles from './HomePage.module.css';

const HomePage = () => {
  const featuredProjects = projects.items.filter((project) => project.featured);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />

        <section className={styles.projects}>
          <ProjectList withContainer={false} projects={featuredProjects} />

          <Link.Root to={'/projetos'} variant="secondary">
            Ver todos os projetos
          </Link.Root>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
