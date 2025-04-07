import styles from './About.module.css';

export const About = () => {
  return (
    <>
      <div className={styles['about-container']} id="about">
        <div className="about-text">
          <h2>Criando soluções para o futuro.</h2>
        </div>
        <div className={styles.abount}>
          <div className={styles['about-info']}>
            <h2>Lucas Rocha</h2>
            <h3>Desenvolvedor Web Front-end</h3>
            <a href="#">Ver mais</a>
          </div>
          <figure>
            <h4>Foto</h4>
          </figure>
        </div>
      </div>
    </>
  );
};
