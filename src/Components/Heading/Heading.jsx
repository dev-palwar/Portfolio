import React from "react";
import "../Heading/Style.scss";
import { motion } from "framer-motion";
import { animations } from "../../Styles/Animations/Animations";

const Heading = ({Heading}) => {
  return (
    <div className="heading">
      <div className="bars">
        <span></span>
        <motion.span {...animations.bar}></motion.span>
      </div>
      <h1>{Heading}</h1>
    </div>
  );
};

export default Heading;
