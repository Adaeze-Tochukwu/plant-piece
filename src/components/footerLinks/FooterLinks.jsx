import React from "react";
import "./FooterLinks.scss";

export default function FooterLinks(props) {
  const { title, list1, list2, list3 } = props;

  return (
    <div className="footerLinks">
      <h3>{title}</h3>
      <ul>
        <li>{list1}</li>
        <li>{list2}</li>
        <li>{list3}</li>
      </ul>
    </div>
  );
}
