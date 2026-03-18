import { changelogData } from '../../data/changelogData';
import { Layout } from '../../components/Layout';
import { Accordion } from '../../components/Accordion';
import styles from './ChangelogPage.module.css';

const ChangelogPage = () => {
  return (
    <Layout>
      <section className={styles.container}>
        <h1 className="title">{changelogData.title}</h1>
        <h3>{changelogData.subtitle}</h3>
        <Accordion changelogData={changelogData} />
      </section>
    </Layout>
  );
};

export default ChangelogPage;
