import lucas3 from '@/assets/images/lucas3.jpg';
import { experiences } from '@/data/experiences';
import { Layout } from '@/components/Layout';
import { Heading } from '@/components/Heading';
import { DownloadButton } from '@/components/DownloadButton';
import { ExperienceList } from '@/components/ExperienceList';
import { LanguageList } from '@/components/LanguageList';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <Layout>
      <Heading variant="title">Sobre mim</Heading>
      <p className="subtitle">Aprendizado contínuo, evolução constante</p>

      <section className={styles.about}>
        <img src={lucas3} alt="Lucas Rocha" />

        <div>
          <div className={styles.info}>
            <p>
              Olá! Sou Lucas Rocha, desenvolvedor web de Fortaleza, CE. Atuo na
              criação de sites e aplicações modernas, buscando unir desempenho,
              usabilidade e qualidade em cada projeto.
            </p>

            <p>
              Tenho experiência com JavaScript, TypeScript, React e Node.js,
              desenvolvendo soluções responsivas e escaláveis para diferentes
              plataformas e dispositivos.
            </p>

            <p>
              Estou sempre aprimorando minhas habilidades e acompanhando novas
              tecnologias, com foco em boas práticas e desenvolvimento contínuo.
              Meu objetivo é transformar ideias em produtos digitais eficientes
              que gerem valor para empresas e proporcionem uma ótima experiência
              aos usuários.
            </p>
          </div>

          <DownloadButton
            file="/documents/curriculo-lucas-rocha-fullstack.pdf"
            label="Currículo"
          />
        </div>
      </section>

      <ExperienceList experiences={experiences} />

      <LanguageList />
    </Layout>
  );
};

export default AboutPage;
