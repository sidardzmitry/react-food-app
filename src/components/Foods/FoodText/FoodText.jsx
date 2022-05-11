import styles from "./FoodText.module.css";

const FoodText = () => {
  return (
    <section className={styles['food__text__box']}>
      <h3>Online food order. Japanese Restaurant</h3>
      <p>
        Restaurant's menu offers an inspired approach to the traditional
        Japanese style of dining where the very best local and seasonal
        ingredients are showcased in a culinary experience unlike any other.
      </p>
      <p>
        As we place a premium on featuring the freshest products possible, our
        menus are ever-changing.
      </p>
    </section>
  );
};

export default FoodText;
