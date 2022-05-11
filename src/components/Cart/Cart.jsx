import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles['cart__items']}>
      {[{ id: "m1", name: "Sushi", amount: "2", price: 10.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
          <span>Total</span>
          <span>29.99</span>
      </div>
      <div className={styles.actions}>
          <button className={styles['button__close']}>Close</button>
          <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
