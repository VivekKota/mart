import React from "react";
import "../../index.css";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.cost, 0);

  return (
    <div
      className="layout-column align-items-center justify-content-start"
      data-testid="shopping-cart"
    >
      <h3 data-testid="cart-heading">Cart</h3>
      <div className="cart" data-testid="cart">
        <div className="card w-200 pt-30 pb-8 mt-10">
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Cost</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody data-testid="products">
              {cart.map((product) => (
                <tr key={`row-${product.id}`}>
                  <td data-testid={`product-name-${product.id}`}>
                    {product.name}
                  </td>
                  <td data-testid={`product-description-${product.id}`}>
                    {product.description}
                  </td>
                  <td data-testid={`product-cost-${product.id}`}>
                    ${product.cost.toFixed(2)}
                  </td>
                  <td>
                    <button
                      data-testid={`remove-from-cart-${product.id}`}
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove from cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <section className="layout-row align-items-center justify-content-center mt-30">
          <label className="cart-total" data-testid="cart-total">
            Total: ${total.toFixed(2)}
          </label>
        </section>
      </div>
    </div>
  );
}

export default Cart;
