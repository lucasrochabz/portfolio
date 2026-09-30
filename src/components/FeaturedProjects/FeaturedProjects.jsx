import { projects } from '@/data/projects';
import { PATHS } from '@/constants/paths';
import { Heading } from '@/components/Heading';
import { ProjectList } from '@/components/ProjectList';
import { ButtonLink } from '../ButtonLink';
import styles from './FeaturedProjects.module.css';

const FeaturedProjects = () => {
  const featuredProjects = projects.items.filter((project) => project.featured);

  return (
    <section className={`container `}>
      <Heading as="h2" className={styles.title}>
        Projetos em destaque
      </Heading>

      <p className={styles.description}>
        Projetos que representam meu trabalho, habilidades e evolução.
      </p>

      <div className={styles.projects}>
        <ProjectList projects={featuredProjects} />

        <ButtonLink to={PATHS.PROJECTS.INDEX} variant="outline">
          Ver todos os projetos
        </ButtonLink>
      </div>
    </section>
  );
};

export default FeaturedProjects;
