import {useEffect, useState} from "react";
import logo from "../../assets/img/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  
  return (
    <section className={scrolled ? "nav flex scrolled" : "nav flex"}>
      <div className="logo-con">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <nav className={open ? "nav-con show flex" : "nav-con flex"}>
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
            <a href="#">Join</a>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
        </ul>
      </nav>
      <div className="mobile-nav show-nav" onClick={() => setOpen(!open)}>
        <i class="bi bi-list"></i>
      </div>
    </section>
  );
};

export default Navbar;
