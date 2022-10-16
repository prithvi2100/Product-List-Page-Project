import React from "react";

export default function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <p>Sort By Price</p>
      <p>Sort By Ascending Order</p>
    </div>
  ) : (
    ""
  );
}
