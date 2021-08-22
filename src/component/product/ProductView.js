import React, { useContext, useEffect } from "react";
import { productContext } from "./productContext";

export default function ProductView() {
  const myContext = useContext(productContext);
  console.log(myContext);
  const { product, setProduct } = myContext;

  useEffect(() => {
    const newData = product.map((data, i) => {
      if (data.name === "car") {
        data.name = "pulsar";
      }
      return data;
    });
    console.log(newData);
    setProduct(newData);
  }, []);

  return (
    <>
      {product.map((data, i) => {
        return (
          <div key={i}>
            <h1>{data.name}</h1>
          </div>
        );
      })}
    </>
  );
}
