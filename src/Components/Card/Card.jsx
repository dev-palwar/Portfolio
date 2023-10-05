import React from "react";
import "../Card/Style.scss"
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const Card = () => {
  return (
    <div className="card">
      <div className="image-section">
        <img
          src="https://developer.vercel.app/_next/image?url=%2Frun.jpg&w=3840&q=75"
          alt=""
        />
      </div>
      <div className="info">
        <h3>Run</h3>
        <div className="buttons">
          <AiOutlineLink />
          <AiFillGithub />
        </div>
      </div>
    </div>
  );
};

export default Card;
