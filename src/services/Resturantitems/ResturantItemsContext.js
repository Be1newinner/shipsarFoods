import React, { createContext, useContext, useEffect, useState } from "react";
import { ResturantItemsService } from "./ResturantItemsServices";
import { GlobalContext } from "../GlobalContext";

export const ResturantItemsContext = createContext();

export const ResturantItemsContextProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { currentCategory } = useContext(GlobalContext);

  const getItems = (Category) => {
    setLoading(true);
    setMenuItems("");
    setTimeout(() => {
      ResturantItemsService(Category)
        .then((item) => {
          setMenuItems(item);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }, 0);
  };

  useEffect(() => {
    getItems(currentCategory);
  }, [currentCategory]);

  return (
    <ResturantItemsContext.Provider
      value={{
        menuItems,
        loading,
        error,
      }}
    >
      {children}
    </ResturantItemsContext.Provider>
  );
};
