import React, { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";

const Products = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  return (
    <div>
      <header className="bg-dark text-light py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h1>E-commerce</h1>
          <Cart cartItems={cartItems} />
        </div>
      </header>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <Product
              id="1"
              name="Product 1"
              description="Description of product 1"
              price={10.99}
              onAddToCart={addToCart}
            />
          </div>
          <div className="col-md-6">
            <Product
              id="2"
              name="Product 2"
              description="Description of product 2"
              price={20.99}
              onAddToCart={addToCart}
            />
          </div>
          <div className="col-md-6">
            <Product
              id="3"
              name="Product 3"
              description="Description of product 3"
              price={15.99}
              onAddToCart={addToCart}
            />
          </div>
          <div className="col-md-6">
            <Product
              id="4"
              name="Product 4"
              description="Description of product 4"
              price={5.99}
              onAddToCart={addToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;