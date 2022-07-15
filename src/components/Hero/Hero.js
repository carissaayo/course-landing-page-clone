import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="hero-con">
        <h1 className="hero-text">
          Online learning
          <br />
          platform
          {/* <span>platform</span> */}
        </h1>
        <p>
          Build skills with courses, certificates, and degrees online from
          world-class universities and companies
        </p>
        <a href="#">Join For Free</a>
      </div>
    </section>
  );
}

export default Hero