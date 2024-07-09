import React from "react";
import "../About/Style.scss";
import { motion } from "framer-motion";
import Heading from "../../Components/Heading/Heading";
import { animations } from "../../Styles/Animations/Animations";

import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoGraphql,
  BiLogoTypescript,
  BiLogoSass,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <>
      <Heading Heading={"About me"} />
      <div className="about">
        <div className="info">
          <motion.p {...animations.fade}>
            👋 Hi there! I'm Dev a passionate web developer. I have a strong
            background in frontend development using React and typescript, as
            well as experience with various JavaScript and CSS libraries and
            frameworks such as Next.JS and Tailwind. 🌐 In addition to my
            frontend expertise, I have a decent understanding of backend
            technologies like Node.js and Express.js. This knowledge enables me
            to collaborate effectively with backend teams, bridging the gap
            between the front and back ends of web development projects. 🚀 I'm
            excited to continue my journey in the tech world, eager to learn and
            contribute to innovative projects. Let's connect and explore
            opportunities together!
          </motion.p>
        </div>
        <motion.div {...animations.fade} className="skills">
          <h2>Stuff i know : </h2>
          <div className="icons">
            <BiLogoJavascript style={{ color: "yellow" }} />
            <BiLogoReact style={{ color: "deepskyblue" }} />
            <BiLogoSass style={{ color: "#cc6699" }} />
            <TbBrandNextjs style={{ color: "cornsilk" }} />
            <SiTailwindcss style={{ color: "skyblue" }} />
            <BiLogoNodejs style={{ color: "greenyellow" }} />
            <SiExpress style={{ color: "yellow" }} />
            <BiLogoMongodb style={{ color: "green" }} />
            <BiLogoTypescript style={{ color: "#007acc" }} />
            <BiLogoGraphql style={{ color: "#e535ab " }} />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
