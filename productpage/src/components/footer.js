import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">
      <p>copyright @2022</p>
      <div className="social">
        <FaFacebook className="fa" />
        <FaInstagram className="fa" />
      </div>
    </div>
  );
}
