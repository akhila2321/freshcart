// import node module libraries
import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";

const PriceRange = ({ style }) => {
  const [rangeValue, setRangeValue] = useState([49, 199]);

  const handleRangeChange = (values) => {
    setRangeValue(values.map(parseFloat));
  };

  return (
    <div className="mb-8 mt-8" style={style}>
      <h5 className="mb-3">Price</h5>
      <div>
        <RangeSlider
          min={6}
          max={300}
          defaultValue={[49, 199]}
          value={rangeValue}
          onInput={handleRangeChange}
          className="mb-3"
        />

        <small className="text-muted">Price:</small>
        <span id="priceRange-value" className="small">
          {" "}
          ${rangeValue[0].toFixed(0)} - ${rangeValue[1].toFixed(0)}
        </span>
      </div>
    </div>
  );
};

export default PriceRange;
