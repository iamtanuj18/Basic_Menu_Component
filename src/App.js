import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState([]);
  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    setMenu(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
          <Categories filterItems={filterItems} />
          <Menu items={menu} />;
        </div>
      </section>
    </main>
  );
}

export default App;
