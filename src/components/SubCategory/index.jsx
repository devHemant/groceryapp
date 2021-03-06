import React, { useState, useEffect } from "react";
import axios from "axios";

const SUB_CATEGORY_URL =
  "https://apolis-grocery.herokuapp.com/api/subcategory/3";

const SubCategory = () => {
  const [subCategories, setSubCategories] = useState([]);

  const getSubCatgeory = () => {
    axios
      .get(SUB_CATEGORY_URL)
      .then((response) => {
        setSubCategories(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getSubCatgeory();
  }, []);
  return (
    <div className="row">
      <ul className="list-group mt-2">
        {subCategories.length > 0 &&
          subCategories.map((item, index) => (
            <li key={index} className="list-group-item">
              {item.subName}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SubCategory;
