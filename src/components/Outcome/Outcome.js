import "./Outcome.css"
import image from "../../assets/img/about2.png"
const Outcome = () => {
  return (
    <section className="outcome section">
      <div className="flex outcome-con ">
        <div className="outcome__img-con">
          <img src={image} alt="" />
        </div>
        <div className="outcome__text-con">
          <h2 className="section__title">
            Take the next step toward your personal and professional goals with
            us.
          </h2>
          <p>
            The automated process all your website tasks. Discover tools and
            techniques to engage effectively with vulnerable children and young
            people.
          </p>
          <div className="outcome-btn-con">
            <button>Join Now For Free</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Outcome