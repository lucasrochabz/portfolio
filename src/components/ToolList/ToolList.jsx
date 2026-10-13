import PropTypes from 'prop-types';
import styles from './ToolList.module.css';

// fix: add algo tipo: <li className={styles.item}>+{tools.length}</li>
// fix: acho que o componente não está sendo utilizado
const ToolList = ({ tools }) => {
  return (
    <ul className={styles.list}>
      {tools.map((tool) => (
        <li key={tool} className={styles.item}>
          {tool}
        </li>
      ))}
    </ul>
  );
};

ToolList.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ToolList;
