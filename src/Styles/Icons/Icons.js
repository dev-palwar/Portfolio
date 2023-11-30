import React from "react";

const Icons = () => {
  return (
    <div>
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
        <BiLogoReact
          style={{ color: "deepskyblue" }}
          onClick={() => filterProjectsBySkill("react")}
        />
        <SiRedux
          style={{ color: "lightblue" }}
          onClick={() => filterProjectsBySkill("redux")}
        />
        <BiLogoSass
          style={{ color: "#cc6699" }}
          onClick={() => filterProjectsBySkill("sass")}
        />
        <TbBrandNextjs
          style={{ color: "cornsilk" }}
          onClick={() => filterProjectsBySkill("nextjs")}
        />
        <SiTailwindcss
          style={{ color: "skyblue" }}
          onClick={() => filterProjectsBySkill("tailwindcss")}
        />
        <BiLogoNodejs
          style={{ color: "greenyellow" }}
          onClick={() => filterProjectsBySkill("nodejs")}
        />
        <SiExpress
          style={{ color: "yellow" }}
          onClick={() => filterProjectsBySkill("expressjs")}
        />
        <BiLogoMongodb
          style={{ color: "green" }}
          onClick={() => filterProjectsBySkill("mongodb")}
        />
        <BiLogoTypescript
          style={{ color: "#007acc" }}
          onClick={() => filterProjectsBySkill("typescript")}
        />
        <BiLogoGraphql
          style={{ color: "#e535ab " }}
          onClick={() => filterProjectsBySkill("graphql")}
        />
      </motion.div>
    </div>
  );
};

export default Icons;
