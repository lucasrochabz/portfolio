import { experiences } from '@/data/experiences';
import { Layout } from '@/components/Layout';
import { DownloadButton } from '@/components/DownloadButton';
import { ExperienceList } from '@/components/ExperienceList';
import { LanguageList } from '@/components/LanguageList';
import styles from './AboutPage.module.css';
import { profile } from '@/data/profile';

const AboutPage = () => {
  return (
    <Layout>
      <h1 className="title">Sobre mim.</h1>
      <p className="subtitle">Transformando ideias em projetos digitais.</p>

      <section className={styles.summary}>
        <img src="/src/assets/images/lucas3.jpg" alt="" />
        <div className={styles.content}>
          {profile.about.map((about) => (
            <p key={about}>{about}</p>
          ))}

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
