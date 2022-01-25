import reactDom from 'react-dom';

import Card from '../UI/Card';
import Button from '../UI/Button';

import styles from './error-modal.module.css';

const ErrorModal = function (props) {
  const clearErrorHandler = function () {
    props.onErrorClear();
  };

  const Backdrop = () => (
    <div className={styles.overlay} onClick={clearErrorHandler}></div>
  );

  const ModalOverlay = props => (
    <Card className={styles.modal}>
      <header>{props.title}</header>
      <div>{props.body}</div>
      <footer>
        <Button onClick={clearErrorHandler}>Okay</Button>
      </footer>
    </Card>
  );

  return (
    <>
      {reactDom.createPortal(<Backdrop />, document.getElementById('backdrop'))}
      {reactDom.createPortal(
        <ModalOverlay title={props.title} body={props.children} />,
        document.getElementById('modal')
      )}
    </>
  );
};

export default ErrorModal;
