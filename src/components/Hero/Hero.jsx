import lucas1 from '../../../public/lucas1.jpg';
import lucas2 from '../../../public/lucas2.jpg';
import lucas3 from '../../../public/lucas3.jpg';
import { heroData } from '../../data/heroData';
import { ExternalLinkOld } from '../ExternalLinkOld';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.gallery}>
        <figure className={`${styles.galleryItem} ${styles.featured}`}>
          <img src={lucas1} alt="Lucas Rocha" />
        </figure>

        <figure className={styles.galleryItem}>
          <img src={lucas2} alt="Lucas Rocha" />
        </figure>

        <figure className={styles.galleryItem}>
          <img src={lucas3} alt="Lucas Rocha" />
        </figure>
      </div>

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
    </section>
  );
};

export default Hero;
