import styles from './Input.module.css';

export const Input = ({ label, id, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} />
    </>
  );
};
