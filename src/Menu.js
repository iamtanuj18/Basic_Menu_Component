import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
<<<<<<< HEAD
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
=======
      {items.map((item) => {
        const { id, desc, title, price, img } = item;
        return (
          <article key={id} className="menu-item">
            <img className="photo" src={img} alt={title} />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
>>>>>>> 20585200b266c512590f9d3ba88e5abd004b4cc0
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
