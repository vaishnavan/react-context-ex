import React, { createContext, useState } from "react";

export const counterContext = createContext();

export default function UserProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <counterContext.Provider value={{ count, setCount }}>
      {children}
    </counterContext.Provider>
  );
}
