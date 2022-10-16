import React from "react";
import { useState } from "react";

export default function Popup(props) {
  const [priceSortState, setPriceSortStateState] = useState(false);
  const [pricedSortState, setPricedSortStateState] = useState(false);
  return props.trigger ? (
    <div className="popup">
      <p onClick={() => setPriceSortStateState(true)}>
        Sort By Lowest To Highest
      </p>
      <p onClick={() => setPricedSortStateState(true)}>
        Sort By Highest To Lowest
      </p>
    </div>
  ) : (
    ""
  );
}
