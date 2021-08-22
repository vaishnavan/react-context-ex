import React, { createContext, useState } from "react";

export const productContext = createContext();

export default function ProductProvider({ children }) {
  const [product, setProduct] = useState([
    {
      name: "car",
      price: 450
    },
    {
      name: "bike",
      price: 250
    },
    {
      name: "cycle",
      price: 1050
    }
  ]);

  return (
    <productContext.Provider value={{ product, setProduct }}>
      {children}
    </productContext.Provider>
  );
}
