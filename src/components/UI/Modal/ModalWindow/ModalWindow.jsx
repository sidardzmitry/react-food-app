import styles from "./ModalWindow.module.css";

const ModalWindow = (props) => {
  return <div className={styles.modal}>
    <div className={styles.content}>{props.children}</div>
  </div>;
};

export default ModalWindow;
