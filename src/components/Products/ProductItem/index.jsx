import React from "react";

const ProductItem = (props) => {
  const { productName, image, price, mrp, unit, description } = props.product;
  return (
    <div className="col-sm-3">
      <div className="card">
        <img
          src={"https://rjtmobile.com/grocery/images/" + image}
          className="card-img-top"
          alt={"image"}
        />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p className="card-text">{unit}</p>
          <h2>
            {price}{" "}
            <span style={{ fontSize: "20px", color: "grey" }}>
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
