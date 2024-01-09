import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-cont">
      <div className="div-links">
        <Link to="/home" className="home">
          Home
        </Link>
      </div>
      <div className="nav-img">
        <Link to="/">
          <img
            src="https://as2.ftcdn.net/v2/jpg/02/59/32/85/1000_F_259328545_DuhRSqlA5Q2AVxkt8XMRLEUEJtbKolds.jpg"
            alt="picapica"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
