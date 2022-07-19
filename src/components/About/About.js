import React from "react";
import "./About.css";
import rightIcon from "../../assets/img/right-icon.svg";
const About = () => {
  return (
    <section className="about flex section">
      <div className="about-text-con">
        <div className="about-icon-con">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27.287"
            height="16.752"
            viewBox="0 0 27.287 16.752"
          >
            <path
              id="about"
              d="M64.744,0H60.157a.648.648,0,0,0-.648.648v.8a.648.648,0,0,0,.648.648h2.059l-5.5,5.5H52.377a1.047,1.047,0,0,0-.772.339l-6.167,6.728H39.152a.648.648,0,0,0-.648.648v.8a.648.648,0,0,0,.648.648H45.9a1.047,1.047,0,0,0,.772-.339l6.167-6.728h4.316a1.047,1.047,0,0,0,.74-.307l5.8-5.8V5.634a.648.648,0,0,0,.648.648h.8a.648.648,0,0,0,.648-.648V1.047A1.047,1.047,0,0,0,64.744,0Z"
              transform="translate(-38.504)"
              fill="#fff"
            />
          </svg>
        </div>
        <div className="about-left__side">
          <h2 className="">Learn new skills online with top educators</h2>
          <p>
            The automated process all your website tasks. Discover tools and
            techniques to engage effectively with vulnerable children and young
            people.
          </p>

          <div className="about-min-con">
            <div className="about-con ">
              <div>
                <img src={rightIcon} alt="" className="block" />
              </div>
              <p>
                Techniques to engage effectively with vulnerable children and
                young people
              </p>
            </div>

            <div className="about-con ">
              <div>
                <img src={rightIcon} alt="" className="block" />
              </div>
              <p>
                Join millions of people from around the world learning together.
              </p>
            </div>

            <div className="about-con">
              <div>
                <img src={rightIcon} alt="" className="block" />
              </div>
              <p>
                Join millions of people from around the world learning together.
                Online learning is as easy and natural.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="clip-con">
        {/* <iframe
          src="https://www.youtube.com/embed/E7wJTI-1dvQ"
          frameborder="0"
        //   allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />{" "} */}
        <div>

        <a href="https://www.youtube.com/watch?v=up68UAfH0d0">
          <i class="bi bi-play-circle-fill"></i>
        </a>
        </div>
      </div>
    </section>
  );
};

export default About;
