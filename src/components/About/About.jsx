import lucas1 from '../../../public/lucas1.jpg';
import lucas2 from '../../../public/lucas2.jpg';
import lucas3 from '../../../public/lucas3.jpg';
import ExternalLink from '../ExternalLink/ExternalLink';
import styles from './About.module.css';

const About = () => {
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
          <h3>Olá, eu sou Lucas Rocha 👋</h3>
          <h1 className="title">
            Desenvolvedor Web <br />
            Full Stack
          </h1>
          <p>
            Sejam bem-vindos! Sou de Fortaleza, CE, crio interfaces modernas
            aliadas a soluções robustas e escaláveis para a web, sempre buscando
            entregar valor e inovação em cada projeto.
          </p>

          <ExternalLink
            href="mailto:lucasbezerrar@gmail.com?subject=Assunto%20do%20e-mail"
            variant="cta"
          >
            Entre em contato
          </ExternalLink>
        </div>
      </section>
    </>
  );
};

export default About;
