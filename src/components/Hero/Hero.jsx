import { heroData } from '../../data/heroData';
import { ExternalLinkOld } from '../ExternalLinkOld';
import { Gallery } from '../Gallery';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className="container">
      <div className={styles.wrapper}>
        <Gallery />

        <div className={styles.content}>
          <h3>{heroData.subTitle}</h3>

          <h1 className="title">
            {heroData.titleLine1}
            <br />
            {heroData.titleLine2}
          </h1>

          <p>{heroData.description}</p>

          <ExternalLinkOld
            href={`mailto:${heroData.email}?subject=${encodeURIComponent(
              heroData.emailSubject,
            )}`}
            variant="cta"
          >
            {heroData.cta}
          </ExternalLinkOld>
        </div>
      </div>
    </section>
  );
};

export default Hero;
