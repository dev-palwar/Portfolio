import React from "react";
import "../Socials/Style.scss";
import {
 
  AiOutlineGithub,
} from "react-icons/ai";

import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const socialIcons = [
  {
    Component: AiOutlineGithub,
    color: "#4078c0",
    link: "https://github.com/gennaro-16",
  },
  {
    Component: FaTelegram,
    color: "#26a7de",
    link: "https://t.me/gennaro9111",
  },
  {
    Component: FaInstagram,
    color: "#0072b1",
    link: "https://www.instagram.com/suzuya_999",
  },
];

const Socials = () => {
  return (
    <div className="icons">
      {socialIcons.map(({ Component, color, link }, index) => (
        <a href={link} target="_blank" rel="noreferrer" key={index}>
          <Component style={{ color }} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
