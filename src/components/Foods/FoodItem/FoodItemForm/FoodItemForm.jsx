import { useRef, useState } from "react";
import Input from "../../../UI/Input/Input";
import styles from "./FoodItemForm.module.css";

const FoodItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();
  const { id, onAddToCart = Function.prototype } = props;

  const submitHandler = (event) => {
    event.preventDefault();
    const inputAmount = amountInputRef.current.value;
    if (
      inputAmount.trim().length === 0 ||
      +inputAmount < 1 ||
      +inputAmount > 10
    ) {
      setIsAmountValid(false);
      return;
    }
    onAddToCart(+inputAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Total"
        input={{
          id: id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!isAmountValid && <p className={styles.text}>Please enter quantity from 1 to 10</p>}
    </form>
  );
};

export default FoodItemForm;
