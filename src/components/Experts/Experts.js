import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Experts.css";
import teamImg1 from "../../assets/img/team1.png";
import teamImg2 from "../../assets/img/team2.png";
import teamImg3 from "../../assets/img/team3.png";
import teamImg4 from "../../assets/img/team4.png";

const Experts = () => {
  return (
    <section className="experts section">
      <h2 className="section__title">Community experts</h2>
      <div className="experts-con">
        <Swiper
          className="experts-swiper"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={25}
          slidesPerView="auto"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          grabCursor={true}
          autoplay={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="swiper-slide">
            <div className="single-expert">
              <div className="expert-img-con">
                <img src={teamImg1} alt="" />
              </div>
              <h5>
                <a href="#">Mr. Urela</a>
              </h5>
              <p>The Automated process all your website tasks</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="single-expert">
              <div className="expert-img-con">
                <img src={teamImg2} alt="" />
              </div>
              <h5>
                <a href="#">Mr. Shakil</a>
              </h5>
              <p>The Automated process all your website tasks</p>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="swiper-slide">
            <div className="single-expert">
              <div className="expert-img-con">
                <img src={teamImg3} alt="" />
              </div>
              <h5>
                <a href="#">Mr. Arafat</a>
              </h5>
              <p>The Automated process all your website tasks</p>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="swiper-slide">
            <div className="single-expert">
              <div className="expert-img-con">
                <img src={teamImg4} alt="" />
              </div>
              <h5>
                <a href="#">Mr. Saiful</a>
              </h5>
              <p>The Automated process all your website tasks</p>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="swiper-slide">
            <div className="single-expert">
              <div className="expert-img-con">
                <img src={teamImg1} alt="" />
              </div>
              <h5>
                <a href="#">Mr. Uttom</a>
              </h5>
              <p>The Automated process all your website tasks</p>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="swiper-slide">
            <div className="single-expert">
              <div className="expert-img-con">
                <img src={teamImg2} alt="" />
              </div>
              <h5>
                <a href="#">Mr. Urela</a>
              </h5>
              <p>The Automated process all your website tasks</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="swiper-button-next">
          <i class="bi bi-chevron-right"></i>
        </div>
        <div class="swiper-button-prev">
          <i class="bi bi-chevron-left"></i>
        </div>
      </div>
    </section>
  );
};

export default Experts;
