import React from "react";
import "../Work/Style.scss";
import { motion } from "framer-motion";
import Card from "../../Components/Card/Card";
import Data from "../../Assets/Data.json";
import Heading from "../../Components/Heading/Heading";
import { animations } from "../../Styles/Animations/Animations";

const Work = () => {
  return (
    <div className="work">
      <Heading Heading={"my work"}/>
      <motion.div {...animations.fade} className="cards">
        {Data.map((value) => {
          return (
            <Card
              key={value.id}
              heading={value.heading}
              url={value.link}
              image={value.img}
              github={value.github}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Work;
