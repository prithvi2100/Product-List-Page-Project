import React from "react";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
export default function Header() {
  return (
    <nav>
      <div className="logo">Anime.</div>
      <ul>
        <li>Home</li>
        <li>Our Products</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div className="search">
        <FaSearch />
        <FaShoppingBasket />
      </div>
    </nav>
  );
}
