import { PATHS } from '@/constants/paths';
import { Heading } from '@/components/Heading';
import { InternalLink } from '@/components/InternalLink';

const NotFoundPage = () => {
  return (
    <>
      <Heading>Página não encontrada</Heading>
      <InternalLink to={PATHS.HOME} variant={'fill'}>
        Voltar para a página inicial
      </InternalLink>
    </>
  );
};

export default NotFoundPage;
