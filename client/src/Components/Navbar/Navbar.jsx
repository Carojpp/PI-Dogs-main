import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../Components/Searchbar/Searchbar.jsx";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-cont">
      <div className="div-links">
        <Link to="/home" className="nav-link">
          Home
        </Link>
        <Link to="/create-breed" className="nav-link">
          Create breed
        </Link>
      </div>
      <SearchBar />
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
