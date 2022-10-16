import React from "react";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
export default function Header() {
  return (
    <nav>
      <div className="logo">Electronics</div>
      <ul>
        <li>Home</li>
        <li>Our Products</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div className="search">
        <FaSearch className="fa" />
        <FaShoppingBasket className="fa" />
      </div>
    </nav>
  );
}
