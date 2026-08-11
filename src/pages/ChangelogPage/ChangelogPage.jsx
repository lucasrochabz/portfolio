import { changelog } from '@/data/changelog';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Heading } from '@/components/Heading';
import { ChangelogList } from '@/components/ChangelogList';

const ChangelogPage = () => {
  return (
    <Layout>
      <SEO
        title="Changelog"
        description="Acompanhe as atualizações, melhorias e novidades do portfólio de Lucas Rocha."
      />

      <Heading variant="title">{changelog.title}</Heading>
      <p className="subtitle">{changelog.subtitle}</p>

      <ChangelogList versions={changelog.versions} />
    </Layout>
  );
};

export default ChangelogPage;
