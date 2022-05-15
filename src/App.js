import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Foods from "./components/Foods/Foods/Foods";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import CartContextProvider from "./store/CartContextProvider/CartContextProvider";

const App = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const showCartHandler = () => {
    setCartIsVisible(true);
  };
  const hideCartHandler = () => {
    setCartIsVisible(false);
  };
  return (
    <CartContextProvider>
      {cartIsVisible && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Foods />
      </main>
      <Footer />
    </CartContextProvider>
  );
};

export default App;