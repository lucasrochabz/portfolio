import { profile } from '@/data/profile';
import { contact } from '@/data/contact';
import { ProfileImages } from '@/components/ProfileImages';
import { Heading } from '@/components/Heading';
import { ButtonLink } from '@/components/ButtonLink';
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

        <ButtonLink href={contact.mailto} variant="contact" external>
          Entre em contato
        </ButtonLink>
      </div>
    </section>
  );
};

export default Hero;
