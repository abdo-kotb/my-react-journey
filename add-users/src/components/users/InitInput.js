import styles from './init-input.module.css';

const InitInput = function (props) {
  return (
    <div className={styles['form-control']}>
      <label htmlFor={props.forLabel}>{props.children}</label>
      <input
        id={props.forLabel}
        type={props.type}
        onChange={props.onInputChange}
        value={props.value}
        ref={props.inputRef}
      />
    </div>
  );
};

export default InitInput;
