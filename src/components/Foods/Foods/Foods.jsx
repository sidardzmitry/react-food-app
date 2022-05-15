import React, { Fragment } from "react";
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
