import React, { useState } from "react";
import "../Work/Style.scss";
import Card from "../../Components/Card/Card";
import Data from "../../Assets/Data.json";
import Heading from "../../Components/Heading/Heading";
import { LoadMore } from "../../Components/Loader/Loader";
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
import { SiExpress, SiRedux, SiTailwindcss } from "react-icons/si";
import { animations } from "../../Styles/Animations/Animations";

const Work = () => {
  const [projects, setProjects] = useState(Data.slice(0, 5));
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [display, setDisplay] = useState("none");

  const handleShowAllProjects = () => {
    setProjects(Data);
    setShowAllProjects(true);
    setDisplay(null);
  };

  const filterProjectsBySkill = (skill) => {
    setProjects((prevProjects) =>
      Data.filter((project) => project.tech_Stack.includes(skill))
    );
  };

  return (
    <div className="work">
      <Heading Heading={"my work"} />
      <motion.div
        className="icons"
        {...animations.bar}
        style={{
          fontSize: "3rem",
          justifyContent: "center",
          marginBottom: "2rem",
          display: display,
        }}
      >
        <BiLogoCss3
          style={{ color: "#0256cd", cursor: 'pointer' }}
          onClick={() => filterProjectsBySkill("css")}
        />
        <BiLogoJavascript
          style={{ color: "yellow", cursor: 'pointer' }}
          onClick={() => filterProjectsBySkill("javascript")}
        />
        <BiLogoReact
          style={{ color: "deepskyblue", cursor: 'pointer' }}
          onClick={() => filterProjectsBySkill("react")}
        />
        <BiLogoSass
          style={{ color: "#cc6699", cursor: 'pointer' }}
          onClick={() => filterProjectsBySkill("sass")}
        />
        <TbBrandNextjs
          style={{ color: "cornsilk", cursor: 'pointer' }}
          onClick={() => filterProjectsBySkill("nextjs")}
        />
        <SiTailwindcss
          style={{ color: "skyblue", cursor: 'pointer' }}
          onClick={() => filterProjectsBySkill("tailwindcss")}
        />
        <BiLogoNodejs
          style={{ color: "greenyellow", cursor: 'pointer' }}
          onClick={() => filterProjectsBySkill("nodejs")}
        />
        <SiExpress
          style={{ color: "yellow", cursor: 'pointer' }}
          onClick={() => filterProjectsBySkill("expressjs")}
        />
        <BiLogoMongodb
          style={{ color: "green", cursor: 'pointer' }}
          onClick={() => filterProjectsBySkill("mongodb")}
        />
        <BiLogoTypescript
          style={{ color: "#007acc", cursor: 'pointer' }}
          onClick={() => filterProjectsBySkill("typescript")}
        />
        <BiLogoGraphql
          style={{ color: "#e535ab ", cursor: 'pointer' }}
          onClick={() => filterProjectsBySkill("graphql")}
        />
      </motion.div>
      <div className="cards">
        {projects.map((value) => (
          <Card
            key={value.id}
            heading={value.heading}
            url={value.link}
            image={value.img}
            github={value.github}
          />
        ))}
        {!showAllProjects && (
          <LoadMore
            key={32}
            heading={"Show More"}
            onClick={handleShowAllProjects}
            // You can customize the appearance of the "Show More" card
          />
        )}
      </div>
    </div>
  );
};

export default Work;
