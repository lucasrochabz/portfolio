import lucas1 from '../../../public/lucas1.jpg';
import lucas2 from '../../../public/lucas2.jpg';
import lucas3 from '../../../public/lucas3.jpg';
import { heroDetails } from '../../data/hero';
import { ExternalLinkOld } from '../ExternalLinkOld';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <>
      <section className={styles.about} id="about">
        <div className={styles.gallery}>
          <div className={`${styles.galleryItem} ${styles.featured}`}>
            <img src={lucas1} alt="Lucas" />
          </div>
          <div className={styles.galleryItem}>
            <img src={lucas2} alt="Lucas" />
          </div>
          <div className={styles.galleryItem}>
            <img src={lucas3} alt="Lucas" />
          </div>
        </div>

        <div className={styles.content}>
          <h3>{heroDetails.subTitle}</h3>
          <h1 className="title">
            {heroDetails.titleLine1} <br />
            {heroDetails.titleLine2}
          </h1>
          <p>{heroDetails.description}</p>

          <ExternalLinkOld
            href={`mailto:${heroDetails.email}?subject=${encodeURIComponent(
              heroDetails.emailSubject,
            )}`}
            variant="cta"
          >
            {heroDetails.cta}
          </ExternalLinkOld>
        </div>
      </section>
    </>
  );
};

export default Hero;
