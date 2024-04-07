import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import nav_dropdown from "../Assets/icon_expand.svg.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropDown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <div className="drop-down-wrapper">
        <img
          className="nav-dropdown"
          src={nav_dropdown}
          onClick={dropDown_toggle}
          alt="nav_dropdown"
        />
      </div>

      <ul ref={menuRef} className="nav_menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/"> Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens"> Men</Link> {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link to="/womens"> Women</Link> {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids"> Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav_login_cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart icon" />
        </Link>

        <div className="nav_cart_count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
export default Navbar;
