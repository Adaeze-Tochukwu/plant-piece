import React from "react";
import "./BestSelling";
import Heading from "../heading/Heading";
import Prices from "../prices/Prices";

export default function BestSelling() {
  return (
    <div>
      <Heading heading="This Weeks Most Popular" span="And Best Selling" />
      <Prices />
    </div>
  );
}
