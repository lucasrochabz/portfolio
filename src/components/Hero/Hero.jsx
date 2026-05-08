import { hero } from '@/data/hero';
import { Anchor } from '../Anchor';
import { Gallery } from '../Gallery';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className="container">
      <div className={styles.wrapper}>
        <Gallery />

        <div className={styles.content}>
          <h3>{hero.subTitle}</h3>

          <h1 className="title">
            {hero.titleLine1}
            <br />
            {hero.titleLine2}
          </h1>

          <p>{hero.description}</p>

          <Anchor.Root
            href={`mailto:${hero.email}?subject=${encodeURIComponent(
              hero.emailSubject,
            )}`}
            variant="cta"
          >
            {hero.cta}
          </Anchor.Root>
        </div>
      </div>
    </section>
  );
};

export default Hero;
