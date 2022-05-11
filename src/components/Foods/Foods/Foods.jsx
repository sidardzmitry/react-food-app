import React, { Fragment } from "react";
import styles from "./Foods.module.css";
import FoodText from "../FoodText/FoodText";
import FoodList from "../FoodList/FoodList";

const Foods = () => {
  return (
    <Fragment>
      <FoodText />
      <FoodList />
    </Fragment>
  );
};

export default Foods;
