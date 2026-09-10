import { PATHS } from '@/constants/paths';
import { Heading } from '@/components/Heading';
import { InternalLink } from '@/components/InternalLink';
import warning from '@/assets/illustrations/warning.svg';
import styles from './NotFoundPage.module.css';

// fix: corrigir essa página
const NotFoundPage = () => {
  return (
    <section className={styles.notFound}>
      <img src={warning} alt="Aviso" />

      <div>
        <Heading>Página não encontrada</Heading>
        <InternalLink to={PATHS.HOME} variant={'fill'}>
          Voltar à página inicial
        </InternalLink>
      </div>
    </section>
  );
};

export default NotFoundPage;
