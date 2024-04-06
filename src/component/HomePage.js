import React from "react";
import truYumLogo from "../assets/truyum.png";

function HomePage() {
  return (
    <div className="home">
      <h1 style={{ marginLeft: "0%" }}>
        Welcome to TruYum{" "}
        <img
          src={truYumLogo}
          alt="TruYum"
          style={{ width: "30px", borderRadius: "50%", marginRight: "20px" }}
        />
      </h1>
      <br />
      <br />
      <p>
        TruYum is a leading platform for discovering and ordering delicious
        meals online. Our mission is to provide customers with a delightful
        culinary experience right at their doorstep. At TruYum, we curate a
        diverse selection of dishes from top-rated restaurants and chefs,
        ensuring quality and taste in every bite. Whether you're craving comfort
        food or exploring new cuisines, TruYum offers a seamless ordering
        process and prompt delivery, making it easier than ever to enjoy gourmet
        meals in the comfort of your home.
      </p>

      <br />
      <br />
      <br />
      <br />
      <br />
      <p>
        Join us on this culinary journey and discover a world of flavors with
        TruYum.
      </p>
      {/* <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}></div> */}
    </div>
  );
}

export default HomePage;
