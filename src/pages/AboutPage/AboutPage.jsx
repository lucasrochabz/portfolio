import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <>
      <Header />

      <section className={styles.aboutPage}>
        <h1 className="title">Sobre mim.</h1>
        <h3>Transformando ideias em projetos digitais.</h3>

        <div className={styles.grid}>
          <img src="" alt="" />
          <div className={styles.content}>
            <p>
              Olá, eu sou Lucas Rocha. Comecei como engenheiro de software em
              2009, trabalhando com Flash.
            </p>
            <p>
              Sou fundador e CEO da Resend. Antes disso, fui vice-presidente de
              experiência do desenvolvedor na WorkOS e diretor de marketing na
              Liferay Cloud. Sou brasileiro e agora moro em Fortaleza, Ceará,
              com minha incrível esposa e minha linda filha.
            </p>
            <p>
              Adoro o modo escuro , código aberto e projetos paralelos. Quando
              não estou trabalhando, gosto de correr, assistir filmes e comer
              queijo.
            </p>

            <a
              href="/path_do_arquivo.pdf"
              download="/nome_do_arquivo_teste.pdf"
            >
              Currículo
            </a>
          </div>
        </div>
        <div>
          <h2>Carreira</h2>
          <p>Desenvolvedor Web</p>
          <p>704 Apps — Fortaleza, Ceará</p>
          <p>Mai 2024 — Jan 2025 — 8 mes.</p>
        </div>

        <div>
          <h2>Idiomas</h2>
          <p>Português / Fluente</p>
          <p>Inglês — Básico</p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
