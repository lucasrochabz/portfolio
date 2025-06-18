import styles from './Input.module.css';

const Input = ({ label, id, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} />
    </>
  );
};

export default Input;
