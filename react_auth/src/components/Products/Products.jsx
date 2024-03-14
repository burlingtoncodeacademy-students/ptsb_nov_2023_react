import React from "react";
import { useState, useEffect } from "react";
import Product from "../Product/Product";

// REACT CHALLENGE
// ------------------------------------------
// Store the results from the fetch in state
// Map over the results, and return a child component called Product
// This component will take an obj from the results as a prop.
// Within the Product component, display the product emoji, name, price, and tags
//? BONUS*
// Setup an input field for max price, set state accordingly.
// Setup 3 checkbox input fields, one for electronics, one for fruit, and one for snack
//    - Using the state variables store the results from each input field when checked/unchecked into the 'tags' state variable.
//    - The values which are stored in state, should be used in the fetch URL as dynamic query params

const Products = () => {
  const [results, setResults] = useState([]);
  const [maxPrice, setMaxPrice] = useState(799);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/product?min=0&max=${maxPrice}&tags=${tags}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
            },
          }
        );
        const json = await response.json();

        console.log(json.Results);
        setResults(json.Results);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, [maxPrice, tags]);

  const handleTag = (e) => {
    let tagName = e.target.name;
    if (tags.includes(tagName)) {
      setTags((previousTags) => previousTags.filter((i) => i !== tagName));
    } else {
      setTags((previousTags) => [...previousTags, tagName]);
    }
  };

  return (
    <div>
      <input type="number" onChange={(e) => setMaxPrice(e.target.value)} />

      <h1>Products</h1>
      {tags.toString()}
      <div>
        <input
          type="checkbox"
          id="electronics"
          name="electronics"
          value="electronics"
          onChange={handleTag}
        />
        <label htmlFor="electronics">electronics</label>
        <input
          type="checkbox"
          id="fruit"
          name="fruit"
          value="fruit"
          onChange={handleTag}
        />
        <label htmlFor="fruit">fruit</label>
        <input
          type="checkbox"
          id="snack"
          name="snack"
          value="snack"
          onChange={handleTag}
        />
        <label htmlFor="snack">snack</label>
      </div>

      {results.map((obj) => (
        <Product key={obj._id} product={obj} />
      ))}
    </div>
  );
};

export default Products;
