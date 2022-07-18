import "./Footer.css";
import logo from "../../assets/img/logo.png"

const Footer = () => {
  return (
    <footer className="footer  ">
      <div className=" footer-con flex  ">
        <div className="footer__logo-con">
          <div className="footer__img-con">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <p>
            The automated process starts as soon as your clothes go into the
            machine.
          </p>
          <div className="social-media">
            <a href="#">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i class="bi bi-pinterest"></i>
            </a>
          </div>
        </div>
        <div className="footer__link-con">
          <h4>Our solutions</h4>
          <ul>
            <li>
              <a href="#">Design & creatives</a>
            </li>
            <li>
              <a href="#">Telecommunication</a>
            </li>
            <li>
              <a href="#">Restaurant</a>
            </li>
            <li>
              <a href="#">Programing</a>
            </li>
            <li>
              <a href="#">Architecture</a>
            </li>
          </ul>
        </div>

        <div className="footer__link-con">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="#">Design & creatives</a>
            </li>
            <li>
              <a href="#">Telecommunication</a>
            </li>
            <li>
              <a href="#">Restaurant</a>
            </li>
            <li>
              <a href="#">Programing</a>
            </li>
            <li>
              <a href="#">Architecture</a>
            </li>
          </ul>
        </div>

        <div className="footer__link-con">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">Design & creatives</a>
            </li>
            <li>
              <a href="#">Telecommunication</a>
            </li>
            <li>
              <a href="#">Restaurant</a>
            </li>
            <li>
              <a href="#">Programing</a>
            </li>
            <li>
              <a href="#">Architecture</a>
            </li>
          </ul>
        </div>
      </div>

      <p className="footer-copyright">
        Copyright ©2022 All rights reserved | This template is made with by
        <i class="bi bi-heart-fill"></i>
        <a href="#">Colorlib</a>
      </p>
    </footer>
  );
}

export default Footer