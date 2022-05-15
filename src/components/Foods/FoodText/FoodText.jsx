import styles from "./FoodText.module.css";

const FoodText = () => {
  return (
    <section className={styles["food__text__box"]}>
      <h3>Online food order. Meet & Steak Restaurant</h3>
      <p>
        We have two menus at Meet, both based on a sharing concept where the
        whole party enjoys the various flavors of Brazil and South America.
      </p>
      <p>
        Meats, vegetables, accompaniments, and sides are all carefully prepared
        by our chefs and cooked over charcoal and ironbark wood.
      </p>
    </section>
  );
};

export default FoodText;
