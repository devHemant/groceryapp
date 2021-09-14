import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "./Item";

const CATEGORY_URL = "https://apolis-grocery.herokuapp.com/api/category";

const Category = () => {
  const [categories, setCategories] = useState([]);

  const getCatgeories = () => {
    axios
      .get(CATEGORY_URL)
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getCatgeories();
  }, []);
  return (
    <div className="container">
      <h2 className="text-center"> All Popular Categories</h2>
      <div className="row">
        {categories.length > 0 &&
          categories.map((category, index) => (
            <Item key={index} category={category} />
          ))}
      </div>
    </div>
  );
};

export default Category;
