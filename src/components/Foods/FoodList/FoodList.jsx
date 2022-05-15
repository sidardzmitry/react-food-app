import styles from "./FoodList.module.css";
import Card from "../../UI/Card/Card";
import FoodItem from "../FoodItem/FoodItem";

const FOOD_LIST = [
  {
    id: "1",
    name: "Angus Beef Burger",
    description:
      "Angus beef patty, cheddar, cos lettuce, tomato, burger sauce, onion rings. Served with crunchy chips or farm salad",
    price: 29.99,
  },
  {
    id: "2",
    name: "Chicken Breast",
    description:
      "Portuguese marinated, pumpkin puree, wild mushrooms, French lentils, crispy pancetta and veal jus",
    price: 25.45,
  },
  {
    id: "3",
    name: "Steak Tagliata",
    description:
      "Flat iron steak, roasted heirloom tomatoes, rocket, Parmesan and chimichurri",
    price: 36.99,
  },
  {
    id: "4",
    name: "Center Cut Filet Mignon",
    description:
      "8 ounces of our most lean and tender center cut tenderloin",
    price: 35.99,
  },
  {
    id: "5",
    name: "Prime Rib",
    description:
      "12 or 16 ounces, slow roasted and served with Au Jus and Horseradish Cream",
    price: 45.99,
  },
  {
    id: "6",
    name: "Flat Iron",
    description:
      "Tender and Marbled with Rich Beefy Flavor",
    price: 32.99,
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
