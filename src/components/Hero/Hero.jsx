import { profile } from '@/data/profile';
import { Anchor } from '../Anchor';
import { Gallery } from '../Gallery';
import styles from './Hero.module.css';

const { role, specialization, email, hero } = profile;

const Hero = () => {
  return (
    <section className={`container ${styles.hero}`}>
      <Gallery />

      <div className={styles.content}>
        <h3>{hero.greeting}</h3>

        <h1 className="title">
          {role}
          <br />
          {specialization}
        </h1>

        <p>{hero.description}</p>

        <Anchor.Root
          href={`mailto:${email}?subject=${encodeURIComponent(
            hero.contactSubject,
          )}`}
          variant="cta"
        >
          {hero.contactLabel}
        </Anchor.Root>
      </div>
    </section>
  );
};

export default Hero;
