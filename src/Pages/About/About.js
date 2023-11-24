import React from "react";
import "../About/Style.scss";
import { motion } from "framer-motion";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoGraphql,
  BiLogoTypescript,
  BiLogoSass,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { SiExpress, SiRedux, SiTailwindcss } from "react-icons/si";
import Heading from "../../Components/Heading/Heading";
import { animations } from "../../Styles/Animations/Animations";

const About = () => {
  return (
    <>
      <Heading Heading={"About me"} />
      <div className="about">
        <div className="info">
          <motion.p {...animations.fade}>
            👋 Hi there! I'm Dev a passionate web developer. I have a solid
            foundation in React, along with popular libraries like Redux for
            managing application state and Framer Motion for adding captivating
            animations to web projects. I'm also skilled in using CSS frameworks
            such as Tailwind CSS and Chakra UI to style components and create
            user-friendly layouts. 🌐 In addition to my frontend expertise, I
            have a decent understanding of backend technologies like Node.js and
            Express.js. This knowledge enables me to collaborate effectively
            with backend teams, bridging the gap between the front and back ends
            of web development projects. 🚀 I'm excited to continue my journey
            in the tech world, eager to learn and contribute to innovative
            projects. Let's connect and explore opportunities together!
          </motion.p>
        </div>
        <motion.div {...animations.fade} className="skills">
          <h2>Stuff i know : </h2>
          <div className="icons">
            <AiFillHtml5 style={{ color: "orange" }} />
            <BiLogoCss3 style={{ color: "#0256cd" }} />
            <BiLogoJavascript style={{ color: "yellow" }} />
            <BiLogoReact style={{ color: "deepskyblue" }} />
            <SiRedux style={{ color: "lightblue" }} />
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
