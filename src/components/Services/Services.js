import React from 'react';
import "./Services.css";
import icon1 from "../../assets/img/icon1.svg";
import icon2 from "../../assets/img/icon2.svg";
import icon3 from "../../assets/img/icon3.svg";



const Services = () => {
  return (
    <section className="services">
      <div className="service-top-con flex">
        <div className="service-item flex">
          <div className="service-item__img-con">
            <img src={icon1} alt="icon" />
          </div>

          <div>
            <h3>Life time access</h3>
            <p>The automated process all your website tasks.</p>
          </div>
        </div>

        <div className="service-item flex">
          <img src={icon2} alt="icon" />
          <div>
            <h3>Life time access</h3>
            <p>The automated process all your website tasks.</p>
          </div>
        </div>

        <div className="service-item flex">
          <img src={icon3} alt="icon" />
          <div>
            <h3>Life time access</h3>
            <p>The automated process all your website tasks.</p>
          </div>
        </div>
      </div>
      <div className='services-main-con'>
        <h2>Our featured courses</h2>
      </div>
    </section>
  );
}

export default Services