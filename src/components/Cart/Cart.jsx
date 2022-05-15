import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context/cart-context";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const { onHideCart = Function.prototype } = props;
  const cartContext = useContext(CartContext);
  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = (
    <ul className={styles["cart__items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total:</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button__close"]} onClick={onHideCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
