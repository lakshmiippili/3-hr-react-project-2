import React from "react";
import { useState } from "react";
import ContextProvider from "./components/Store/ContextProvider";
import Header from "./components/Header/Header";
import CandyCart from "./components/Cart/CandyCart";
import CandyForm from "./components/CandyForm/CandyForm";
import Items from "./components/Items/Items";
// import './App.css';

function App() {
  const [isShowCart, setIsShowCart] = useState(false);
  const showCartHandler = () => {
    setIsShowCart(true);
  };
  const hideCartHandler = () => {
    setIsShowCart(false);
  };
  return (
    <ContextProvider>
      
      <Header showCart={showCartHandler} />
      {isShowCart && <CandyCart onClose={hideCartHandler} />}
      <div>
        <CandyForm />
        <Items />
      </div>
    </ContextProvider>
  );
}

export default App;
