import { changelog } from '@/data/changelog';
import { Layout } from '@/components/Layout';
import { Accordion } from '@/components/Accordion';

const ChangelogPage = () => {
  return (
    <Layout>
      <section>
        <h1 className="title">{changelog.title}</h1>
        <p className="subtitle">{changelog.subtitle}</p>
        <Accordion versions={changelog.versions} />
      </section>
    </Layout>
  );
};

export default ChangelogPage;
