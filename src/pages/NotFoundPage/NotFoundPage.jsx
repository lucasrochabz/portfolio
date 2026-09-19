import { PATHS } from '@/constants/paths';
import { Heading } from '@/components/Heading';
import { ButtonLink } from '@/components/ButtonLink';
import warning from '@/assets/illustrations/warning.svg';
import styles from './NotFoundPage.module.css';

// fix: corrigir essa página
const NotFoundPage = () => {
  return (
    <section className={styles.notFound}>
      <img src={warning} alt="Aviso" />

      <div>
        <Heading>Página não encontrada</Heading>

        <ButtonLink to={PATHS.HOME}>Voltar à página inicial</ButtonLink>
      </div>
    </section>
  );
};

export default NotFoundPage;
