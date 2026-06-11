import { changelog } from '@/data/changelog';
import { Layout } from '@/components/Layout';
import { Accordion } from '@/components/Accordion';
import styles from './ChangelogPage.module.css';

const ChangelogPage = () => {
  return (
    <Layout>
      <section className={styles.container}>
        <h1 className="title">{changelog.title}</h1>
        <p className={styles.subtitle}>{changelog.subtitle}</p>
        <Accordion versions={changelog.versions} />
      </section>
    </Layout>
  );
};

export default ChangelogPage;
