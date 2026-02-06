import { Footer } from '../../components/Footer';
import { Accordion } from '../../components/Accordion';
import { Header } from '../../components/Header';
import { changelogData } from '../../data/changelogData';
import styles from './ChangelogPage.module.css';

const ChangelogPage = () => {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <h1 className="title">{changelogData.title}</h1>
        <h3>{changelogData.subtitle}</h3>
        <Accordion changelogData={changelogData} />
      </section>
      <Footer />
    </>
  );
};

export default ChangelogPage;
