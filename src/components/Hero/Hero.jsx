import { profile } from '@/data/profile';
import { contact } from '@/data/contact';
import { Link } from '@/components/Link';
import { ProfileImages } from '@/components/ProfileImages';
import { Heading } from '@/components/Heading';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`container ${styles.hero}`}>
      <ProfileImages />

      <div className={styles.content}>
        <Heading as="h3">Olá, eu sou Lucas Rocha 👋</Heading>
        <Heading variant="title">
          {profile.role}
          <br />
          {profile.specialization}
        </Heading>

        <p>
          Sou de Fortaleza, CE, e desenvolvo sites e aplicações para diferentes
          plataformas e dispositivos, ajudando empresas a se destacarem no
          ambiente digital.
        </p>

        <Link.Root href={contact.mailto} variant="cta">
          Entre em contato
        </Link.Root>
      </div>
    </section>
  );
};

export default Hero;
