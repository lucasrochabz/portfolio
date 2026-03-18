// import lucas1 from '../../assets/images/lucas1.jpg';
// import lucas2 from '../../assets/images/lucas2.jpg';
// import lucas3 from '../../assets/images/lucas3.jpg';
import { heroData } from '../../data/heroData';
import { ExternalLinkOld } from '../ExternalLinkOld';
import { Gallery } from '../Gallery';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className="container">
      <div className={styles.hero}>
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
