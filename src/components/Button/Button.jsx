import styles from './Button.module.css';

export const Button = ({ children, ...props }) => {
  return (
    <button className={styles.primary} {...props}>
      {children}
    </button>
  );
};
