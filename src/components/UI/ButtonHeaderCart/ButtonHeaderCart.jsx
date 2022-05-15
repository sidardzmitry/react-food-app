import { useContext } from "react";
import CartContext from "../../../store/cart-context/cart-context";
import styles from "./ButtonHeaderCart.module.css";

const ButtonHeaderCart = (props) => {
  const cartContext = useContext(CartContext);
  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);
  const { onClick } = props;
  return (
    <button className={styles["button__cart"]} onClick={onClick}>
      <span className={styles["button-icon__cart"]}>
        <i className="bi bi-cart"></i>
      </span>
      <span className={styles["button-text__cart"]}>Cart</span>
      <span className={styles["button-count__cart"]}>{cartItemsNumber}</span>
    </button>
  );
};

export default ButtonHeaderCart;
