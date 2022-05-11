import styles from "./FoodList.module.css";
import Card from "../../UI/Card/Card";
import FoodItem from "../FoodItem/FoodItem";

const FOOD_LIST = [
  {
    id: "f1",
    name: "Tulip Roll",
    description:
      "cucumber, mango, spicy albacore tuna belly, bluefin negitoro,seared yuzu miso",
    price: 24.45,
  },
  {
    id: "f2",
    name: "Sakura Roll",
    description:
      "spicy salmon, cucumber, sliced scallop, mango, avocado, mayo,spicy sesame oil shrimp sauce",
    price: 22.15,
  },
  {
    id: "f3",
    name: "Dragon Roll",
    description:
      "seared unagi, organic greens, cucumber, avocado, tobiko, house-made unagi sauce",
    price: 27.99,
  },
  {
    id: "f4",
    name: "Haru Vegan Roll",
    description:
      "asparagus, sweet soy braised shiitake mushroom, carrot, avocado, vegan tofu mayo",
    price: 19.99,
  },
];
const FoodList = () => {
  const foodsList = FOOD_LIST.map((food) => (
    <FoodItem
      key={food.id}
      id={food.id}
      name={food.name}
      description={food.description}
      price={food.price}
    />
  ));
  return (
    <section className={styles.foods}>
      <Card>
        <ul>{foodsList}</ul>
      </Card>
    </section>
  );
};

export default FoodList;
