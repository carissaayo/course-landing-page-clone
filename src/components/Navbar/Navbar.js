import React from "react";
import logo from "../../assets/img/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="nav flex">
      <div className="logo-con">
        <a href="#">
        <img src={logo} alt="logo" />
        
        </a>
      </div>
      <nav className="nav-con flex">
        <ul className="nav__links flex">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#"> Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="sign-con flex">
          <li>
            <a href="#">Sign</a>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
