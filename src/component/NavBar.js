import React from "react";
import { Link } from "react-router-dom";
import truyumLogo from "../assets/truyum.png"; // Import the image file
import "../App.css"; // Import external CSS for styling

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light colorful-bg">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className="brand-text">TruYum</span>
          <img
            src={truyumLogo}
            alt="TruYum Logo"
            className="navbar-logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sign-up">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user-menu">
                Items
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/view-cart">
                View Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
