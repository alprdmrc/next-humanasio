import React from "react";

const Slider = () => {
  return (
    <div className="container">
      <div className="range-slider">
        <span id="rs-bullet" className="rs-label">
          0
        </span>
        <input
          id="rs-range-line"
          className="rs-range"
          type="range"
          value="0"
          min="0"
          max="200"
        />
      </div>

      <div className="box-minmax">
        <span>0</span>
        <span>200</span>
      </div>
    </div>
  );
};

export default Slider;
