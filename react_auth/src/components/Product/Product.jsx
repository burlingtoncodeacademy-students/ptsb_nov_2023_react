import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  console.log(product);
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.emoji}</p>
      <p>{product.price}</p>
      <p>{product.tags}</p>
    </div>
  );
};

export default Product;
