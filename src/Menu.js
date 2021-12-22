import React from "react";

const Menu = ({ id, title, img, desc, price }) => {
  return (
    <div className="section-center">
      <article key={id}>
        <img className="photo" src={img} alt={title} />
        <div className="item-info">
          <header>
            <h4>{title}</h4>
            <h4 className="price">{price}</h4>
          </header>
          <p>{desc}</p>
        </div>
      </article>
    </div>
  );
};

export default Menu;
