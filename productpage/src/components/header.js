import React from "react";
import { FaSearch, FaShoppingBasket, FaSort } from "react-icons/fa";
import Popup from "./popup";
import { useState } from "react";

export default function Header() {
  const [popupState, setPopupState] = useState(false);
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
        <FaSort className="fa" onClick={() => setPopupState(!popupState)} />
        <Popup trigger={popupState}>
          <h3>Popup</h3>
        </Popup>
      </div>
    </nav>
  );
}
