import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav data-testid="header">
      <div data-testid="navigation-tabs">
        <Link to="/" data-testid="home-link">
          Home
        </Link>
        <Link to="/cart" data-testid="cart-link">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
