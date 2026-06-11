import { experiences } from '@/data/experiences';
import { Layout } from '@/components/Layout';
import { DownloadButton } from '@/components/DownloadButton';
import { ExperienceList } from '@/components/ExperienceList';
import { LanguageList } from '@/components/LanguageList';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <Layout>
      <section className={styles.aboutPage}>
        <h1 className="title">Sobre mim.</h1>
        <p className={styles.subtitle}>
          Transformando ideias em projetos digitais.
        </p>

        <div className={styles.grid}>
          <img src="/src/assets/images/lucas3.jpg" alt="" />
          <div className={styles.content}>
            <p>
              Olá, eu sou Lucas Rocha. Comecei como engenheiro de software em
              2023, trabalhando com Flash.
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

            <DownloadButton
              file="/documents/curriculo-lucas-rocha-fullstack.pdf"
              label="Currículo"
            />
          </div>
        </div>

        <ExperienceList experiences={experiences} />

        <LanguageList />
      </section>
    </Layout>
  );
};

export default AboutPage;
