import React from "react";

const Product = ({ id, name, description, price, onAddToCart }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <h6 className="card-subtitle mb-2 text-muted">${price}</h6>
        <button className="btn btn-primary" onClick={() => onAddToCart({ id, name, description, price })}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;