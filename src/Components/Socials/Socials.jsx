import React from "react";
import "../Socials/Style.scss";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGithub,
} from "react-icons/ai";

const Socials = () => {
  return (
    <div className="icons">
      <a href="https://github.com/dev-palwar" target="_blank" rel="noreferrer">
        <AiOutlineGithub style={{ color: "#4078c0" }} />
      </a>
      <a
        href="https://twitter.com/dev_palwar2"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillTwitterCircle style={{ color: "#26a7de " }} />
      </a>
      <a
        href="https://www.linkedin.com/in/dev-palwar/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin style={{ color: "#0072b1 " }} />
      </a>
    </div>
  );
};

export default Socials;
