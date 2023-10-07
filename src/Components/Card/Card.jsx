import React, { useState } from "react";
import "../Card/Style.scss";
import { AiFillGithub } from "react-icons/ai";
import Loader from "../Loader/Loader";

const Card = ({ heading, image, url, github }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="card">
      <div className="image-section">
        {!isImageLoaded && <Loader />}
        <a href={url} target="_blank">
          <img
            className={`${isImageLoaded ? "loaded" : ""}`}
            src={image}
            alt=""
            onLoad={handleImageLoad}
          />
        </a>
      </div>
      <div className="info">
        <h3>{heading}</h3>
        <a href={github} target="_blank" className="buttons">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default Card;
