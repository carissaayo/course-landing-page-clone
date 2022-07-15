import React from 'react';
import "./CourseCard.css"
import cardImg from "../../assets/img/featured2.png";
import "boxicons";
const CourseCard = () => {
  return (
    <div className="card">
      <div className="card__img-con">
        <img src={cardImg} alt="card__img" />
      </div>
      <div className="card__text-con">
        <p>User Experience</p>
        <h3>
          <a href="#">Fundamental of UX for Application Design</a>
        </h3>
        <p>
          The Automated process all your website tasks. Discover tools and
          techniques to engage effectively with vulnerbale children and young
          people
        </p>

        <div className="rate-con flex">
          <div>
            <div className="rate-icon-con">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
            </div>
            <p className="rate">
              <span className="">(4.5)</span> based on 120
            </p>
          </div>
          <div className="price">
            <span>$135</span>
          </div>
        </div>
        <a className='rate-btn' href="#">Find Out More</a>
      </div>
    </div>
  );
}

export default CourseCard