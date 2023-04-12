import React, { useState } from "react";

const Cart = ({ cartItems, setCartItems }) => {
  const [showCart, setShowCart] = useState(false);

  const total = cartItems.reduce((acc, cur) => acc + cur.price * cur.qty, 0);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setShowCart(true)}>
        View Cart
      </button>
      <button
        className="btn btn-success ms-2"
        data-bs-toggle="modal"
        data-bs-target="#cartModal"
      >
        Cart ${total.toFixed(2)}
      </button>

      <div className="modal fade" id="cartModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Shopping Cart</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <ul className="list-group">
                  {cartItems.map((item) => (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center"
                      key={item.id}
                    >
                      {item.name} x {item.qty}
                      <span className="badge bg-primary rounded-pill">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              <hr />
              <h5>Total: ${total.toFixed(2)}</h5>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {showCart && (
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Shopping Cart</h5>
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <ul className="list-group">
                {cartItems.map((item) => (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={item.id}
                  >
                    {item.name} x {item.qty}
                    <span className="badge bg-primary rounded-pill">
                      ${(item.price * item.qty).toFixed(2)}
                    </span>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <hr />
            <h5> Total: ${total.toFixed(2)}</h5>
            <button
              className="btn btn-primary mt-2"
              onClick={() => setShowCart(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
