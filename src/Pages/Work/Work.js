import React, { useState } from "react";
import "../Work/Style.scss";
import Card from "../../Components/Card/Card";
import Data from "../../Assets/project-data.json";
import Heading from "../../Components/Heading/Heading";
import { LoadMore } from "../../Components/Loader/Loader";
import { motion } from "framer-motion";
import { animations } from "../../Styles/Animations/Animations";
import { SkillsIcons } from "./icons";

const Work = () => {
  const [projects, setProjects] = useState(Data.slice(0, 5));
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [display, setDisplay] = useState("none");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleShowAllProjects = () => {
    setProjects(Data);
    setShowAllProjects(true);
    setDisplay(null);
  };

  const filterProjectsBySkill = (skill) => {
    setSelectedSkill(skill);
    setProjects(() =>
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
        {SkillsIcons.map(({ Component, color, skill, name }, index) => (
          <Component
            key={index}
            title={name}
            style={{
              color,
              cursor: "pointer",
              borderBottom:
                selectedSkill === skill && "3px solid rgb(151, 117, 250)",
              borderRadius: "7px",
              paddingBottom: "3px",
            }}
            onClick={() => filterProjectsBySkill(skill)}
          />
        ))}
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
