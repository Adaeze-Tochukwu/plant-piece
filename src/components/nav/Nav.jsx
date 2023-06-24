import React from "react";
import "./Nav.scss";
import Logo from "../../assets/images/logo.svg";
import Bag from "../../assets/images/bag.svg";
import Search from "../../assets/images/search.svg";
import User from "../../assets/images/user.svg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav__content">
        <input type="checkbox" className="nav__toggle" id="hamburger" hidden />
        <img src={Logo} alt="" className='nav__logo' />
        <ul>
          <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to="./product">Product</Link>
          </li>
          <li>
            <Link to="./about us">About us</Link>
          </li>
          <li>
            <Link to="./contact">Contact</Link>
          </li>
          <li>
            <Link to="./blog">Blog</Link>
          </li>
        </ul>

        <div className='nav__img'>
          <Link to="./cart">
            <img src={Bag} alt=""></img>
          </Link>

          <Link to="./cart">
            <img src={Search} alt=""></img>
          </Link>

          <Link to="./cart">
            <img src={User} alt=""></img>
          </Link>
        </div>
        <label htmlFor="hamburger">
          <GiHamburgerMenu className="nav__hamburger" />
        </label>
      </div>
    </div>
  );
}
