import React from "react";
import verticalLogo from "../assets/vite.svg";
import workflow from "../assets/workflow.png";
import Term from "./Term/Terminal.jsx";
const Hero = () => {
  return (
    <div className="section-content cflex" id="Home">
      <div className="cflex hero-container">
        <div className="cflex hero-lines">
          <span className="ud stagger" style={{ "--i": 4 }}>
            Hi! I am
          </span>
          <span className="rl stagger" style={{ "--i": 5 }}>
            Arkaive19.
          </span>
          <span className="rl stagger" style={{ "--i": 6 }}>
            I am a Full-Stack <br /> Developer.
          </span>
          <span className="du stagger" style={{ "--i": 7 }}>
            I'm a Full-Stack MERN Developer with 2 years of experience in
            building static and dynamic websites. I also use vanilla HTML, CSS,
            and JavaScript when needed. I am actively exploring other areas like
            mobile app development to broaden my skill set.
          </span>
          <button className="btn-alt ud stagger" style={{ "--i": 8 }}>
            Learn More
          </button>
        </div>
        {/* <Term></Term> */}
        <div className="image lr stagger" style={{ "--i": 4 }}>
          <img src={workflow} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
