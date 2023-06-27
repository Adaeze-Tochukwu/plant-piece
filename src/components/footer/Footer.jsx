import React from "react";
import "./Footer.scss";
import FooterLinks from "../footerLinks/FooterLinks";
import logo from "../../assets/images/logo-footer.svg";

export default function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="content__name">
          <div className="content__name--company">
            <h1>Stay Fresh</h1>
            <h6>plantpure@gmail.com</h6>
            <h6>+977 88374637</h6>
          </div>
          <div className="content__name--links">
            <FooterLinks
              title="Links"
              list1="About Us"
              list2="Products"
              list3="Blogs"
            />
            <FooterLinks
              title="Community"
              list1="About Us"
              list2="Products"
              list3="Blogs"
            />
          </div>
        </div>
        <div className="content__copyright">
          <img src={logo} alt="logo" />
          <h6>Copyrights. All rights reserved.</h6>
        </div>
      </div>
    </footer>
  );
}
