import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';

const NotFoundPage = () => {
  return (
    <>
      <Heading>Página não encontrada</Heading>
      <Link.Root to="/">Voltar para a página inicial</Link.Root>
    </>
  );
};

export default NotFoundPage;
