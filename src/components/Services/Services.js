import React from 'react';
import "./Services.css";
import icon1 from "../../assets/img/icon1.svg";
import icon2 from "../../assets/img/icon2.svg";
import icon3 from "../../assets/img/icon3.svg";
import Course from '../Course/Course';




const Services = () => {
  return (
    <section className="services">
      <div className="service-top-con flex">
        <div className="service-item flex left">
          <div className="service-item__img-con">
            <img src={icon1} alt="icon" />
          </div>

          <div>
            <h3>Life time access</h3>
            <p>The automated process all your website tasks.</p>
          </div>
        </div>

        <div className="service-item flex center">
          <div className="service-item__img-con">
            <img src={icon2} alt="icon" />
          </div>

          <div>
            <h3>Life time access</h3>
            <p>The automated process all your website tasks.</p>
          </div>
        </div>

        <div className="service-item flex right">
          <div className="service-item__img-con">
            <img src={icon3} alt="icon" />
          </div>
          
          <div>
            <h3>Life time access</h3>
            <p>The automated process all your website tasks.</p>
          </div>
        </div>
      </div>
      <div className="services-main-con">
        <h2 className="section__title">Our featured courses</h2>
        <Course />
      </div>
    </section>
  );
}

export default Services