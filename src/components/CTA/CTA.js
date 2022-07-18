import "./CTA.css"
import aboutImg from "../../assets/img/about3.png";
import rightIcon from "../../assets/img/right-icon.svg";

const CTA = () => {
  return (
    <section className="CTA flex">
      <div className="CTA__img-con">
        <img src={aboutImg} alt="" />
      </div>
      <div className="CTA__text-con">
        <h2 className="section__title">
          Learner outcomes on courses you will take
        </h2>
        <div className="about-min-con">
          <div className="CTA-text-min-con ">
            <div>
              <img src={rightIcon} alt="" className="block" />
            </div>
            <p>
              Techniques to engage effectively with vulnerable children and
              young people
            </p>
          </div>

          <div className="CTA-text-min-con ">
            <div>
              <img src={rightIcon} alt="" className="block" />
            </div>
            <p>
              Join millions of people from around the world learning together.
            </p>
          </div>

          <div className="CTA-text-min-con">
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
    </section>
  );
}

export default CTA