import { changelog } from '@/data/changelog';
import { Layout } from '@/components/Layout';
import { Heading } from '@/components/Heading';
import { ChangelogList } from '@/components/ChangelogList';

const ChangelogPage = () => {
  return (
    <Layout>
      <Heading variant="title">{changelog.title}</Heading>
      <p className="subtitle">{changelog.subtitle}</p>

      <ChangelogList versions={changelog.versions} />
    </Layout>
  );
};

export default ChangelogPage;
