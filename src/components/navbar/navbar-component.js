import React from "react";
import { Link } from "react-router-dom";
import "./navbar-styles.scss";

const NavBar = () => {
  return (
    <div className="topnav">
      <Link to="/">
        <img
          className="logo"
          src="https://picsum.photos/250/50"
          alt="logo"
        ></img>
      </Link>
      <Link to="/signin">
        <button className="nav-button">Sign in</button>
      </Link>
      <Link to="/register">
        <button className="nav-button">Register</button>
      </Link>
    </div>
  );
};

export default NavBar;
