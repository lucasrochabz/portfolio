import { PATHS } from '@/constants/paths';
import { projects } from '@/data/projects';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { ProjectList } from '@/components/ProjectList';
import { ButtonLink } from '@/components/ButtonLink';
import { Footer } from '@/components/Footer';
import styles from './HomePage.module.css';

const HomePage = () => {
  const featuredProjects = projects.items.filter((project) => project.featured);

  return (
    <>
      <SEO
        title="Home"
        description="Lucas Rocha é desenvolvedor Full Stack. Conheça seus projetos, experiências, estudos e conhecimentos em desenvolvimento web."
      />

      <Header />
      <main>
        <Hero />
        <Marquee />

        <section className={styles.projects}>
          <ProjectList projects={featuredProjects} />

          <ButtonLink to={PATHS.PROJECTS.INDEX} variant="outline">
            Ver todos os projetos
          </ButtonLink>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
