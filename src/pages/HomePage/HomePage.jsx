import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { ProjectList } from '@/components/ProjectList';
import { Footer } from '@/components/Footer';
import styles from './HomePage.module.css';

// fix: resolver esse problema do botão do link
const HomePage = () => {
  const featuredProjects = projects.items.filter((project) => project.featured);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />

        <ProjectList withContainer={true} projects={featuredProjects} />

        <Link to={'/projetos'} className={styles.button}>
          Ver todos os projetos
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
