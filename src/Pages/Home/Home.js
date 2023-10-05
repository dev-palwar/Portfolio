import React from "react";
import "../Home/Style.scss";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGithub,
} from "react-icons/ai";
import me from "../../Assets/me.jpg";

const Home = () => {
  return (
    <>
        <div className="home">
          <div className="info-section">
            <h1>
              Hey, I'm <br />
              Dev Palwar
            </h1>
            <h3>A Full Stack Developer</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem ad iusto voluptatum rem eligendi nesciunt, fugit
              fugiat sit quidem quos!
            </p>
            <div className="icons">
              <AiOutlineGithub style={{ color: "#4078c0" }} />
              <AiFillTwitterCircle style={{ color: "#26a7de " }} />
              <AiFillLinkedin style={{ color: "#0072b1 " }} />
            </div>
          </div>
          <div className="image-section">
            <img src={me} alt="" />
          </div>
        </div>
    </>
  );
};

export default Home;
