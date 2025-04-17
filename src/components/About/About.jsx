import lucas from '../../../public/lucas01.png';
import styles from './About.module.css';

export const About = () => {
  return (
    <>
      <section className={styles.about} id="about">
        <figure className={styles.sticker}>
          <img src={lucas} alt="Lucas" />
        </figure>
        <div className={styles.content}>
          <span>Olá, eu sou Lucas Rocha 👋</span>
          <h2>Desenvolvedor Web</h2>
          <h2>Full Stack</h2>
          <p>
            Sejam bem-vindos! Sou de Fortaleza, CE, crio interfaces modernas
            aliadas a soluções robustas e escaláveis para a web, sempre buscando
            entregar valor e inovação em cada projeto.
          </p>
          <a
            className={styles.email}
            href="mailto:lucasbezerrar@gmail.com?subject=Assunto%20do%20e-mail"
          >
            Entre em contato
          </a>
        </div>
      </section>
    </>
  );
};
