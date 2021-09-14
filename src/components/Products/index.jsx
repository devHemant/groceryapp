import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const PRODUCT_URL = "https://apolis-grocery.herokuapp.com/api/products/cat/3";

const Products = () => {
  const [products, setProducts] = useState([]);
  const getProduct = () => {
    axios
      .get(PRODUCT_URL)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <h2 className="text-center"> All Products</h2>
      <div className="row">
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
