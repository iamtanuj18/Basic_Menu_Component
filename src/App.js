import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
<<<<<<< HEAD
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

=======
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState([]);
  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    setMenu(newItems);
  };
>>>>>>> 20585200b266c512590f9d3ba88e5abd004b4cc0
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
<<<<<<< HEAD
=======
          <Categories filterItems={filterItems} />
          <Menu items={menu} />;
>>>>>>> 20585200b266c512590f9d3ba88e5abd004b4cc0
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
