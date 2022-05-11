import styles from "./ModalBackdrop.module.css";

const ModalBackdrop = (props) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default ModalBackdrop;
