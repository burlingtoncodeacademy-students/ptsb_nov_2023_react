import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="card">
      <h1 className="card-product-emoji">{product.emoji}</h1>
      <h3 className="card-product-name">{product.name}</h3>
      <p className="card-product-price">💲{product.price}</p>
      {product.tags.map((i) => (
        <li key={i} className="card-product-tag">
          {i.toUpperCase()}
        </li>
      ))}
    </div>
  );
};

export default Product;
