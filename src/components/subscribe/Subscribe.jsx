import React from "react";
import "./Subscribe.scss";
import { Link } from 'react-router-dom';

export default function Subscribe() {
  return (
    <div className="subscribe">
      <div className="subscribe__content">
        <h2>Subscribe newsletter</h2>
        <p>
          By following these three steps - proper watering, appropriate
          sunlight, and providing essential nutrients - you'll be well on your
          way to maintaining healthy and thriving plants.
        </p>
        <form>
          <input type="text" placeholder="Enter your email" />
          <Link>Subscribe</Link>
        </form>
      </div>
    </div>
  );
}
