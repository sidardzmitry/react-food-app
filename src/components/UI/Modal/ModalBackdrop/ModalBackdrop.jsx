import styles from "./ModalBackdrop.module.css";

const ModalBackdrop = (props) => {
  const {onClick} = props;
  return (
    <div className={styles.backdrop} onClick={onClick}></div>
  );
};

export default ModalBackdrop;
