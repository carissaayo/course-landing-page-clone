
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay, } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import CourseCard from '../CourseCard/CourseCard';
import "./Course.css";

const Course = () => {
  return (
    <section className="courses-con">
      <Swiper
        className="course-swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={35}
        slidesPerView="auto"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        grabCursor={true}
        autoplay={true}
        // centeredSlides={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="swiper-slide">
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <CourseCard />
        </SwiperSlide>{" "}
        <SwiperSlide className="swiper-slide">
          <CourseCard />
        </SwiperSlide>{" "}
        <SwiperSlide className="swiper-slide">
          <CourseCard />
        </SwiperSlide>{" "}
        <SwiperSlide className="swiper-slide">
          <CourseCard />
        </SwiperSlide>{" "}
        <SwiperSlide className="swiper-slide">
          <CourseCard />
        </SwiperSlide>
      </Swiper>

      <div class="swiper-button-next">
        <i class="bi bi-chevron-right"></i>
      </div>
      <div class="swiper-button-prev">
        <i class="bi bi-chevron-left"></i>
      </div>
    </section>
  );
}

export default Course;

