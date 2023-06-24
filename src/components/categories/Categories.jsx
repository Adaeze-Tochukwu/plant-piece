import React, { useState, useEffect } from "react";
import "./Categories.scss";
import Prices from "../prices/Prices";
import data from "../categories/Categories.json";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(data);
  }, []);

  return (
    <div>
      <div className="categories">
        <h2>
          Trending <span>Categories</span>
        </h2>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <h4>{category.list}</h4>
              <img src={category.arrow} alt="" />
            </li>
          ))}
        </ul>
      </div>
      <Prices />
    </div>
  );
}
