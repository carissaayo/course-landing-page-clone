import "./Subjects.css";
import topicImg1 from "../../assets/img/topic1.png";
import topicImg2 from "../../assets/img/topic2.png";
import topicImg3 from "../../assets/img/topic3.png";
import topicImg4 from "../../assets/img/topic4.png";
import topicImg5 from "../../assets/img/topic5.png";
import topicImg6 from "../../assets/img/topic6.png";
import topicImg7 from "../../assets/img/featured2.png";
import topicImg8 from "../../assets/img/topic8.png";

const Subjects = () => {
  return (
    <section className="subjects">
      <h2>Explore top subjects</h2>
      <div className="subjects-con grid">
        <div className="single_subject">
          <div>
            <img src={topicImg1} alt="topic" />
          </div>
          <div className="subject-overlay"></div>
          <h3>
            <a href="#">PROGRAMING</a>
          </h3>
        </div>
        <div className="single_subject">
          <div>
            <img src={topicImg2} alt="topic" />
          </div>
          <div className="subject-overlay"></div>

          <h3>
            <a href="#">PROGRAMING</a>
          </h3>
        </div>
        <div className="single_subject">
          <div>
            <img src={topicImg3} alt="topic" />
          </div>
          <div className="subject-overlay"></div>

          <h3>
            <a href="#">PROGRAMING</a>
          </h3>
        </div>
        <div className="single_subject">
          <div>
            <img src={topicImg4} alt="topic" />
          </div>
          <div className="subject-overlay"></div>
          <h3>
            <a href="#">PROGRAMING</a>
          </h3>
        </div>
        <div className="single_subject">
          <div>
            <img src={topicImg5} alt="topic" />
          </div>
          <div className="subject-overlay"></div>

          <h3>
            <a href="#">PROGRAMING</a>
          </h3>
        </div>
        <div className="single_subject">
          <div>
            <img src={topicImg6} alt="topic" />
          </div>
          <div className="subject-overlay"></div>

          <h3>
            <a href="#">PROGRAMING</a>
          </h3>
        </div>
        <div className="single_subject">
          <div>
            <img src={topicImg7} alt="topic" />
          </div>
          <div className="subject-overlay"></div>

          <h3>
            <a href="#">PROGRAMING</a>
          </h3>
        </div>
        <div className="single_subject">
          <div>
            <img src={topicImg8} alt="topic" />
          </div>
          <div className="subject-overlay"></div>

          <h3>
            <a href="#">PROGRAMING</a>
          </h3>
        </div>
      </div>
      <div className="subject-btn-con">
        <button>View More Subjects</button>
      </div>
    </section>
  );
}

export default Subjects