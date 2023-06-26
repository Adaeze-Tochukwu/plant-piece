import React, { useState, useEffect } from "react";
import "./Summer.scss";
import data from "./Summer.json";

export default function Summer() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    setPlants(data);
  }, []);

  return (
    <div className="summer">
      <div className="summer__content">
        <h2>Summer Garden Refresh</h2>
        <p>"Revitalize Your Garden with a Summer Refresh!"</p>
        <ul>
          {plants.map((plant) => (
            <li key={plant.id}>
              <img src={plant.image} alt="" />
              <h4>{plant.caption}</h4>
              <h5>{plant.price}</h5>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
