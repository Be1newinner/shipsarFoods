import React from "react";
import MockItems from "./Mock/index";

export const ResturantItemsService = (category) => {
  return new Promise((resolve, reject) => {
    const mock = MockItems[category];
    if (!mock) reject("Invalid Category ");
    resolve(mock);
  });
};
