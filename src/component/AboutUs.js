import React from "react";
import founderImage from "../assets/founder.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="section">
        <h2>truYum</h2>
        <p>
          truYum is an online food delivery platform that aims to provide a
          seamless and delightful experience for customers to order food online.
          Our mission is to deliver high-quality, delicious meals right to your
          doorstep.
        </p>
      </div>
      <div className="section">
        <h2>About Me</h2>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
        >
          <img
            src={founderImage}
            alt="Founder"
            style={{ width: "150px", borderRadius: "50%", marginRight: "20px" }}
          />
          <p>
            Hi there! I'm Avijit Rana, the founder of TruYum. With a passion for
            good food and technology, I started TruYum to revolutionize the way
            people enjoy their meals.
          </p>
        </div>
        <div>
          <p>
            Feel free to explore truYum and discover a world of delectable
            dishes crafted with love and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
