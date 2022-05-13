import styles from "./ButtonHeaderCart.module.css";

const ButtonHeaderCart = (props) => {
  const {onClick} = props;
  return (
    <button className={styles["button__cart"]} onClick={onClick}>
      <span className={styles["button-icon__cart"]}>
        <i className="bi bi-cart"></i>
      </span>
      <span className={styles["button-text__cart"]}>Cart</span>
      <span className={styles["button-count__cart"]}>3</span>
    </button>
  );
};

export default ButtonHeaderCart;
