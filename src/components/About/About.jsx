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
          <p>- Olá, eu sou o Lucas Rocha 👋</p>
          <h2>Desenvolvedor Web</h2>
          <h2>Full Stack</h2>
          <p>
            Olá e bem vindos. Desenvolvedor Full Stack criativo de Fortaleza
            apaixonado por criar experiências memoráveis. Olá e bem vindos.
            Desenvolvedor Full Stack criativo de Fortaleza apaixonado por criar
            experiências memoráveis.
          </p>
        </div>
      </section>
    </>
  );
};
