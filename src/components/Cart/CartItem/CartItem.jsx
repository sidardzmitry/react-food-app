import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const {
    name,
    price,
    amount,
    onRemove = Function.prototype,
    onAdd = Function.prototype,
  } = props;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h3>{name}</h3>
        <div className={classes.summary}>
          <span className={classes.price}>${price.toFixed(2)}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
