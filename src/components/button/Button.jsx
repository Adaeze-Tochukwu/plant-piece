import React from "react";
import "./Button.scss";
import { Link } from 'react-router-dom';

export default function Button(props) {
const { button } = props

  return (
    <Link>
      <div className="btn">{ button }</div>
    </Link>
  );
}
