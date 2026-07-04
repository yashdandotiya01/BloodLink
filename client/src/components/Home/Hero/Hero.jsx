import "./Hero.css";
import heroImage from "../../../assets/images/hero/hero.jpg";
import Button from "../../UI/Button/Button";

function Hero() {
  return (
    <section className="hero">

      <div className="container hero-container">

        <div className="hero-left">

          <span className="hero-badge">
            ❤️ Saving Lives Since Every Drop Counts
          </span>

          <h1>
            Donate Blood,
            <br />
            Save Lives.
          </h1>

          <p>
            Join BloodLink and become part of a life-saving
            community. Your blood donation can help patients,
            hospitals, and emergency cases across the city.
          </p>

          <div className="hero-buttons">

            <Button>
              Become Donor
            </Button>

            <Button variant="outline">
              Find Blood
            </Button>

          </div>

        </div>

        <div className="hero-right">

          <img
            src={heroImage}
            alt="Blood Donation"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;