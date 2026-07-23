import PropTypes from 'prop-types';
import styles from './Heading.module.css';

const Heading = ({ as: Component = 'h1', variant, className, children }) => {
  return (
    <Component
      className={[styles[variant], className].filter(Boolean).join(' ')}
    >
      {children}
    </Component>
  );
};

Heading.propTypes = {
  as: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Heading;
