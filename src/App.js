import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Foods from "./components/Foods/Foods/Foods";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";

const App = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const showCartHandler = () => {
    setCartIsVisible(true);
  };
  const hideCartHandler = () => {
    setCartIsVisible(false);
  };
  return (
    <Fragment>
      {cartIsVisible && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Foods />
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;