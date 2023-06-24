import React, { useState, useEffect } from "react";
import "./Prices.scss";
import data from "./Prices.json";
import { Link } from "react-router-dom";

export default function Prices() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    setPrices(data);
  }, []);

  return (
    <div className="price">
      <Link>
        <ul>
          {prices.map((price) => (
            <li key={price.id}>
              <img src={price.image} alt="" />
              <div className="price__details">
                <h3>{price.caption}</h3>
                <div className="price__details--amount">
                  <h5>{price.current}</h5>
                  <h6>{price.previous}</h6>
                </div>
                <h4>{price.tag}</h4>
              </div>
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
}
