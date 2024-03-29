import React, { useState } from "react";
import "./Header.css";
import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [btn_name, setbtn_name] = useState("Login");
  return (
    <div className="header-container">
      <img className="logo" alt="logo" src={IMG_URL} />
      <ul className="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="">Cart</Link>
        </li>
        <li>
          <button
            className="btn-login"
            onClick={() => {
              btn_name === "Login"
                ? setbtn_name("Logout")
                : setbtn_name("Login");
            }}
          >
            {btn_name}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
