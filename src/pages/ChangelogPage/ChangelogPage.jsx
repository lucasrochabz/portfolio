import { changelog } from '@/data/changelog';
import { Layout } from '@/components/Layout';
import { Heading } from '@/components/Heading';
import { Accordion } from '@/components/Accordion';

const ChangelogPage = () => {
  return (
    <Layout>
      <Heading variant="title">{changelog.title}</Heading>
      <p className="subtitle">{changelog.subtitle}</p>

      <Accordion versions={changelog.versions} />
    </Layout>
  );
};

export default ChangelogPage;
