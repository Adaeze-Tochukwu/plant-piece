import React, { useState, useEffect } from "react";
import "./Steps.scss";
import data from "./Steps.json";
import Button from "../button/Button";
import Photo1 from "../../assets/images/step-photo1.svg";
import Photo2 from "../../assets/images/step-photo2.svg";
import Photo3 from "../../assets/images/step-photo3.svg";

export default function Steps() {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    setSteps(data);
  }, []);

  return (
    <div className="steps">
      <div className="steps__heading">
        <h2>
          steps to take care of your <span>plants</span>
        </h2>
        <h6>
          By following these three steps - proper watering, appropriate
          sunlight, and providing essential nutrients - you'll be well on your
          way to maintaining healthy and thriving plants.
        </h6>
      </div>
      <div className="steps__lists">
        {steps.map((step) => (
          <ul key={step.id}>
            <img src={step.image} alt="" />
            <h3>{step.title}</h3>
            <p>{step.paragraph}</p>
          </ul>
        ))}
      </div>
      <div className="steps__photos">
        <img src={Photo1} alt="" className="steps__photos--pics" />
        <img src={Photo2} alt="" className="steps__photos--pics" />
        <div className="steps__photos--more">
          <img src={Photo3} alt="" />
          <p>
            Our website offers a wide array of stunning plants, ranging from
            vibrant flowers to lush indoor foliage, allowing you to create your
            very own green oasis. In addition to our extensive plant selection,
            we also provide gardening kits and fertilizers to equip you with
            everything you need to nurture your plants and achieve gardening
            success. But we don't stop there! We believe that knowledge is the
            key to a thriving garden, so we offer a wealth of information and
            resources on gardening techniques, plant care tips, and landscaping
            ideas. Whether you're a seasoned gardener or just starting your
            green journey, our goal is to inspire and support you every step of
            the way. Get ready to explore our virtual garden and discover the
            joys of gardening with us!
          </p>
          <Button button="See more photos" />
        </div>
      </div>
    </div>
  );
}
