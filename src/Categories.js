import React from "react";

const Categories = ({ filterItems }) => {
  return (
    <div className="btn-container">
      <button onClick={() => filterItems("breakfast")} className="filter-btn">
        BreakFast
      </button>
    </div>
  );
};

export default Categories;
