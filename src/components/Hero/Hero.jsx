import { profile } from '@/data/profile';
import { Anchor } from '@/components/Anchor';
import { Gallery } from '@/components/Gallery';
import { Heading } from '@/components/Heading';
import styles from './Hero.module.css';

const { role, specialization, email } = profile;

const Hero = () => {
  return (
    <section className={`container ${styles.hero}`}>
      <Gallery />

      <div className={styles.content}>
        <Heading as="h3">Olá, eu sou Lucas Rocha 👋</Heading>
        <Heading variant="title">
          {role}
          <br />
          {specialization}
        </Heading>

        <p>
          Sou de Fortaleza, CE, e desenvolvo sites e aplicações para diferentes
          plataformas e dispositivos, ajudando empresas a se destacarem no
          ambiente digital.
        </p>

        <Anchor.Root
          href={`mailto:${email}?subject=${encodeURIComponent(
            'Gostaria de falar sobre um projeto',
          )}`}
          variant="cta"
        >
          Entre em contato
        </Anchor.Root>
      </div>
    </section>
  );
};

export default Hero;
