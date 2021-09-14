import React from "react";

const Item = (props) => {
  const { catName, catImage } = props.category;
  return (
    <div className="col-sm-3">
      <div className="card">
        <img
          src={`http://rjtmobile.com/grocery/images/${catImage}`}
          className="card-img-top"
          alt={catName}
          height="200px"
        />
        <div className="card-body">
          <h5 className="card-title">{catName}</h5>

          <a href="#" className="btn btn-primary btn-block">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
