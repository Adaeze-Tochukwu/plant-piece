import React from "react";
import "./Hero.scss";
import dash from "../../assets/images/dash.svg";
import Button from "../button/Button";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__Rblock">
        <div className="hero__Rblock--dash">
          <img src={dash} alt="" />
          <h6>Love for Nature</h6>
        </div>
        <h1>
          Discover your <span>green</span> side
        </h1>
        <p>
          We are your one-stop destination for all things green and growing. Our
          website offers a wide array of stunning plants, ranging from vibrant
          flowers to lush indoor foliage, allowing you to create your very own
          green oasis.
        </p>
        <Button button="Shop now" />
      </div>
      {/* <div className="hero__lblock">
      <img src={Hero1} alt="" />
      </div> */}
    </div>
  );
}
