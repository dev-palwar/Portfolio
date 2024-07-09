import React, { useState } from "react";
import "../Work/Style.scss";
import Card from "../../Components/Card/Card";
import Data from "../../Assets/project-data.json";
import Heading from "../../Components/Heading/Heading";
import { LoadMore } from "../../Components/Loader/Loader";
import { motion } from "framer-motion";

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

  setTimeout(() => {
    window.scrollTo({
      top: 199,
      behavior: "smooth",
    });
  }, 200);

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
        <BiLogoJavascript
          style={{ color: "yellow", cursor: "pointer" }}
          onClick={() => filterProjectsBySkill("javascript")}
        />
        <BiLogoReact
          style={{ color: "deepskyblue", cursor: "pointer" }}
          onClick={() => filterProjectsBySkill("react")}
        />
        <BiLogoSass
          style={{ color: "#cc6699", cursor: "pointer" }}
          onClick={() => filterProjectsBySkill("sass")}
        />
        <TbBrandNextjs
          style={{ color: "cornsilk", cursor: "pointer" }}
          onClick={() => filterProjectsBySkill("nextjs")}
        />
        <SiTailwindcss
          style={{ color: "skyblue", cursor: "pointer" }}
          onClick={() => filterProjectsBySkill("tailwindcss")}
        />
        <BiLogoNodejs
          style={{ color: "greenyellow", cursor: "pointer" }}
          onClick={() => filterProjectsBySkill("nodejs")}
        />
        <SiExpress
          style={{ color: "yellow", cursor: "pointer" }}
          onClick={() => filterProjectsBySkill("expressjs")}
        />
        <BiLogoMongodb
          style={{ color: "green", cursor: "pointer" }}
          onClick={() => filterProjectsBySkill("mongodb")}
        />
        <BiLogoTypescript
          style={{ color: "#007acc", cursor: "pointer" }}
          onClick={() => filterProjectsBySkill("typescript")}
        />
        <BiLogoGraphql
          style={{ color: "#e535ab ", cursor: "pointer" }}
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
            image={Data[5].img}
            heading={"Show More"}
            onClick={handleShowAllProjects}
          />
        )}
      </div>
    </div>
  );
};

export default Work;
