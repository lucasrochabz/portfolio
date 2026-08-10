import { Layout } from '@/components/Layout';
import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';

const NotFoundPage = () => {
  return (
    <Layout>
      <Heading>Página não encontrada</Heading>
      <Link.Root to="/">Voltar para a página inicial</Link.Root>
    </Layout>
  );
};

export default NotFoundPage;
