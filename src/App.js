import React from "react";
import Counter from "./component/Counter";
import UserProvider from "./component/Context";
import ProductProvider from "./component/product/productContext";
import ProductView from "./component/product/ProductView";

export default function App() {
  return (
    <>
      <UserProvider>
        <Counter />
        <ProductProvider>
          <ProductView />
        </ProductProvider>
      </UserProvider>
    </>
  );
}
