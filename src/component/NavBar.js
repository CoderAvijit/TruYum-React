import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/login" className="nav-link">
        Login
      </Link>
      <Link to="/sign-up" className="nav-link">
        Register
      </Link>
      <Link to="/view-cart" className="nav-link">
        View Cart
      </Link>
    </nav>
  );
}
