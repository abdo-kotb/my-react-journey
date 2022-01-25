import styles from './button.module.css';

const Button = function (props) {
  return (
    <button className={`${styles.btn}`} type="submit" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
