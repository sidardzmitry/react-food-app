import { useContext } from "react";
import CartContext from "../../../store/cart-context/cart-context";
import styles from "./FoodItem.module.css";
import FoodItemForm from "./FoodItemForm/FoodItemForm";

const FoodItem = (props) => {
  const cartContext = useContext(CartContext);
  const { name, description, price, id } = props;
  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };
  return (
    <li className={styles.food}>
      <div>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>${price.toFixed(2)}</div>
      </div>
      <div>
        <FoodItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default FoodItem;
