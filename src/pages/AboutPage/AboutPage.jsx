import { useState } from 'react';
import profile2 from '@/assets/images/profile-02.jpg';
import profile3 from '@/assets/images/profile-03.jpg';
import { experiences } from '@/data/experiences';
import { SEO } from '@/components/SEO';
import { Heading } from '@/components/Heading';
import { DownloadButton } from '@/components/DownloadButton';
import { ExperienceList } from '@/components/ExperienceList';
import { LanguageList } from '@/components/LanguageList';
import styles from './AboutPage.module.css';

const profileImages = [profile2, profile3];

const AboutPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleImageClick = () => {
    setCurrentImage((prev) => (prev + 1) % profileImages.length);
  };

  return (
    <>
      <SEO
        title="Sobre"
        description="Conheça Lucas Rocha, desenvolvedor Full Stack, sua trajetória, conhecimentos e interesses em desenvolvimento web."
      />

      <Heading variant="title">Sobre mim</Heading>
      <p className="subtitle">Aprendizado contínuo, evolução constante</p>

      <section className={styles.about}>
        <img
          src={profileImages[currentImage]}
          alt="Lucas Rocha"
          className={styles.profileImage}
          onClick={handleImageClick}
        />

        <div>
          <div className={styles.info}>
            <p>
              Olá! Sou Lucas Rocha, desenvolvedor web de{' '}
              <span>Fortaleza, CE</span>. Atuo na criação de{' '}
              <span>sites e aplicações modernas</span>, buscando unir
              desempenho, usabilidade e qualidade em cada projeto.
            </p>

            <p>
              Tenho experiência com{' '}
              <span>JavaScript, TypeScript, React e Node.js</span>,
              desenvolvendo soluções responsivas e escaláveis para diferentes
              plataformas e dispositivos.
            </p>

            <p>
              Estou sempre aprimorando minhas habilidades e acompanhando novas
              tecnologias, com foco em <span>boas práticas</span> e
              desenvolvimento contínuo. Meu objetivo é transformar ideias em{' '}
              <span>produtos digitais eficientes</span> que gerem valor para
              empresas e proporcionem uma ótima experiência aos usuários.
            </p>
          </div>

          <DownloadButton href="/documents/curriculo-lucas-rocha-fullstack.pdf">
            Currículo
          </DownloadButton>
        </div>
      </section>

      <ExperienceList experiences={experiences} />

      <LanguageList />
    </>
  );
};

export default AboutPage;
