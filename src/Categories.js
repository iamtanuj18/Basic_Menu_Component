import React from "react";

<<<<<<< HEAD
const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
=======
const Categories = ({ filterItems }) => {
  return (
    <div className="btn-container">
      <button onClick={() => filterItems("breakfast")} className="filter-btn">
        BreakFast
      </button>
>>>>>>> 20585200b266c512590f9d3ba88e5abd004b4cc0
    </div>
  );
};

export default Categories;
