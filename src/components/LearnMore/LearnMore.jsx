import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import styles from './LearnMore.module.css';

// fix: corrigir isso depois: melhorar o nome ou colocar em Link.Root
const LearnMore = ({ to }) => {
  return (
    <Link to={to} className={styles.button}>
      <span>Saiba Mais</span>
      <ChevronRight />
    </Link>
  );
};

LearnMore.propTypes = {
  to: PropTypes.string.isRequired,
};

export default LearnMore;
