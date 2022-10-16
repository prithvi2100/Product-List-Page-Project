import React from "react";
import product_card from "../data/product_data";
import { useState, useEffect } from "react";
import Popup from "./popup";

const Sort = ({ listItem }) => {};
const MainContent = () => {
  console.log(product_card);
  const pricesort = [...product_card].sort((a, b) => a.price - b.price);
  const pricesortd = [...product_card].sort((a, b) => b.price - a.price);
  const listItems = pricesortd.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.product_description}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <div className="btn">Add to cart</div>
      </div>
    </div>
  ));

  return (
    <div className="main_content">
      <h3>Watches</h3>
      {listItems}
    </div>
  );
};
export default MainContent;
