import React from "react";

const ProductItem = (props) => {
  const { productName, image, price, mrp, unit, description } = props.product;
  return (
    <div className="col-sm-4 mt-2">
      <div className="card">
        <img
          src={"https://rjtmobile.com/grocery/images/" + image}
          className="card-img-top"
          alt={"image"}
          height="200px"
        />
        <div className="card-body">
          <h6 className="card-title">{productName}</h6>
          <p className="card-text">{unit}</p>
          <h2>
            {price}{" "}
            <span style={{ fontSize: "16px", color: "grey" }}>
              <del> {mrp}</del>
            </span>
          </h2>
          <a href="#" className="btn btn-primary">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
