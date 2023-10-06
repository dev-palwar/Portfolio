import React from "react";
import "../Card/Style.scss";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const Card = ({ heading, image, url, github }) => {
  return (
    <div className="card">
      <div className="image-section">
        <a href={url} target="_blank">
          <img src={image} alt="" />
        </a>
      </div>
      <div className="info">
        <h3>{heading}</h3>
        <a href={github}  target="_blank" className="buttons">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default Card;
