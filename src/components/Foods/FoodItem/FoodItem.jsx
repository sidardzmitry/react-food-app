import styles from './FoodItem.module.css';
import FoodItemForm from './FoodItemForm/FoodItemForm';

const FoodItem = (props) => {
    const {name, description, price, id} = props;
    return(
        <li className={styles.food}>
            <div>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>${price.toFixed(2)}</div>
            </div>
            <div>
                <FoodItemForm id={id}/>
            </div>
        </li>
    )
}

export default FoodItem;