import PropTypes from 'prop-types';
import styles from './Heading.module.css';

const Heading = ({ as: Component = 'h1', variant, children }) => {
  return <Component className={styles[variant]}>{children}</Component>;
};

Heading.propTypes = {
  as: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Heading;
