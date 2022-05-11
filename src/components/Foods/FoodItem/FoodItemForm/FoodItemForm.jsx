import Input from '../../../UI/Input/Input';
import styles from './FoodItemForm.module.css';

const FoodItemForm = (props) => {
    const {id} = props;
    return(
        <form className={styles.form}>
            <Input label='Total' input={{
                id: id,
                type: 'number',
                min: '1',
                step: '1',
                defaultValue: '1'
            }}/>
            <button>Add</button>
        </form>
    )
}

export default FoodItemForm;