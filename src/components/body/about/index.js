import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        Hello There ✋,I am,
         <br /> <span className="info-name">Rizka Fiddiyansyah</span>.
         <br /> I have experience learning Machine Learning using Python and Tensorflow. 
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/rizka.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;