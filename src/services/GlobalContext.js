import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [cart, setCart] = useState([{ item: 1, key: 3, price: 4 }]);

  const selectCategory = (e) => setCurrentCategory(e);

  const Carting = ({ key, item, price }) => {
    if (!cart) {
      setCart([{ key: key, item: item, price: price }]);
      console.log("1 exec");
    } else {
      const thisItem = cart.map((e) => e.Sr == key);
      if (!thisItem) {
        setCart([...cart, { key: key, item: item, price: price }]);
        console.log("2.1 exec");
      } else {
        let newCart = cart.filter((e) => e.Sr != key);
        console.log("newCart => ", newCart);
        thisItem.item = item;
        setCart([...newCart, { key: key, item: item, price: price }]);
        console.log("2.2 exec");
      }
      console.log("2 exec");
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        currentCategory,
        selectCategory,
        cart,
        Carting,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
