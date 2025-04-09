import styles from './About.module.css';

export const About = () => {
  return (
    <>
      <section className={styles.about} id="about">
        <p>- Olá, eu sou o Lucas Rocha 👋</p>
        <h2>Desenvolvedor Web</h2>
        <h2>Full Stack</h2>
        <span>
          Olá e bem vindos. Desenvolvedor Full Stack criativo de Fortaleza
          apaixonado por criar experiências memoráveis.
        </span>
      </section>
    </>
  );
};
