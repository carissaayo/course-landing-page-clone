import "./Experts.css";
import teamImg1 from "../../assets/img/team1.png"

const Experts = () => {
  return (
    <section className="experts section">
      <h2 className="section__title">Community experts</h2>
      <div className="experts-con flex">
        <div className="single-expert">
          <div className="expert-img-con">
            <img src={teamImg1} alt="" />
          </div>
          <h5>
            <a href="#">Mr. Urela</a>
          </h5>
          <p>The Automated process all your website tasks</p>
        </div>

        <div className="single-expert">
          <div className="expert-img-con">
            <img src={teamImg1} alt="" />
          </div>
          <h5>
            <a href="#">Mr. Urela</a>
          </h5>
          <p>The Automated process all your website tasks</p>
        </div>

        <div className="single-expert">
          <div className="expert-img-con">
            <img src={teamImg1} alt="" />
          </div>
          <h5>
            <a href="#">Mr. Urela</a>
          </h5>
          <p>The Automated process all your website tasks</p>
        </div>
        <div className="single-expert">
          <div className="expert-img-con">
            <img src={teamImg1} alt="" />
          </div>
          <h5>
            <a href="#">Mr. Urela</a>
          </h5>
          <p>The Automated process all your website tasks</p>
        </div>
        {/* <div className="single-expert">
          <div className="expert-img-con">
            <img src={teamImg1} alt="" />
          </div>
          <h5>
            <a href="#">Mr. Urela</a>
          </h5>
          <p>The Automated process all your website tasks</p>
        </div> */}
      </div>
    </section>
  );
}

export default Experts