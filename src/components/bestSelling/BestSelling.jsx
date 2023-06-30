import React, { useState, useEffect } from "react";
import "./BestSelling.scss";
import data from "./BestSelling.json";
import Heading from "../heading/Heading";
import { Link } from "react-router-dom";

export default function BestSelling() {
  const [bestSelling, setBestSelling] = useState([]);

  useEffect(() => {
    setBestSelling(data);
  }, []);

  return (
    <div>
      <Heading heading="This Weeks Most Popular" span="And Best Selling" />
      <div className="bestSell">
        <Link>
          <ul>
            {bestSelling.map((bestSell) => (
              <li key={bestSell.id}>
                <img src={bestSell.image} alt="" />
                <div className="bestSell__details">
                  <h3>{bestSell.caption}</h3>
                  <div className="bestSell__details--amount">
                    <h5>{bestSell.current}</h5>
                    <h6>{bestSell.previous}</h6>
                  </div>
                  <h4>{bestSell.tag}</h4>
                </div>
              </li>
            ))}
          </ul>
        </Link>
      </div>
    </div>
  );
}
