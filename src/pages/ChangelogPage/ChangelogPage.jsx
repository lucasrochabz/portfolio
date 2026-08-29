import { changelog } from '@/data/changelog';
import { SEO } from '@/components/SEO';
import { Heading } from '@/components/Heading';
import { ChangelogList } from '@/components/ChangelogList';

const ChangelogPage = () => {
  return (
    <>
      <SEO
        title="Changelog"
        description="Acompanhe as atualizações, melhorias e novidades do portfólio de Lucas Rocha."
      />

      <Heading variant="title">{changelog.title}</Heading>
      <p className="subtitle">{changelog.subtitle}</p>

      <ChangelogList versions={changelog.versions} />
    </>
  );
};

export default ChangelogPage;
