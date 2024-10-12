import React, { useState } from "react";
import "../Work/Style.scss";
import Card from "../../Components/Card/Card";
import Heading from "../../Components/Heading/Heading";
import { motion } from "framer-motion";
import { animations } from "../../Styles/Animations/Animations";
import { SkillsIcons } from "./icons";
//import { LoadMore } from "../../Components/Loader/Loader";
import blogsPlazaImg from "./Images/blogs-plaza.png";
import gennaroImg from "./Images/gennaro.png";
import comingSoonImg from "./Images/gennar.png";
const Work = () => {
  const Data = [
    {
      id: 1,
      img: blogsPlazaImg,
      heading: "Blogs-plaza",
      link: "https://blogs-plaza.vercel.app/",
      github: "https://github.com/gennaro-16",
      tech_Stack: ["react", "bootstrap", "expressjs", "mongodb", "nodejs"],
    },
    {
      id: 2,
      img: gennaroImg ,
      heading: "simple portfolio",
      link: "https://gennaro-portfolio.vercel.app/",
      github: "https://github.com/gennaro-16/gennaro-portfolio",
      tech_Stack: ["react", "html", "css"],
    },
    {
      id: 3,
      img: comingSoonImg,
      heading: "coming soon",
      link: null,
      github: "https://github.com/gennaro-16",
      tech_Stack: ["nextjs", "tailwindcss", "mongodb", "graphql", "typescript"],
    }
  ];

  const [projects, setProjects] = useState(Data.slice(0, 5));
  //const [display, setDisplay] = useState("none");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const display = "none" ;
  //const [showAllProjects, setShowAllProjects] = useState(false);


  

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
       
      </div>
    </div>
  );
};

export default Work;



/*
import React, { useState } from "react";
import "../Work/Style.scss";
import Card from "../../Components/Card/Card";
import Heading from "../../Components/Heading/Heading";
import { motion } from "framer-motion";
import { animations } from "../../Styles/Animations/Animations";
import { SkillsIcons } from "./icons";
import { LoadMore } from "../../Components/Loader/Loader";
import blogsPlazaImg from "./Images/blogs-plaza.png";
import gennaroImg from "./Images/gennaro.png";
import comingSoonImg from "./Images/gennar.png";
const Work = () => {
  const Data = [
    {
      id: 1,
      img: blogsPlazaImg,
      heading: "Blogs-plaza",
      link: "https://blogs-plaza.vercel.app/",
      github: "https://github.com/dev-palwar/Movie-app",
      tech_Stack: ["react", "bootstrap", "expressjs", "mongodb", "nodejs"],
    },
    {
      id: 2,
      img: gennaroImg ,
      heading: "simple portfolio",
      link: "https://gennaro-portfolio.vercel.app/",
      github: "https://github.com/gennaro-16/gennaro-portfolio",
      tech_Stack: ["react", "html", "css"],
    },
    {
      id: 3,
      img: comingSoonImg,
      heading: "coming soon",
      link: null,
      github: "https://github.com",
      tech_Stack: ["nextjs", "tailwindcss", "mongodb", "graphql", "typescript"],
    }, {
      id: 4,
      img: blogsPlazaImg,
      heading: "Blogs-plaza",
      link: "https://blogs-plaza.vercel.app/",
      github: "https://github.com/dev-palwar/Movie-app",
      tech_Stack: ["react", "bootstrap", "expressjs", "mongodb", "nodejs"],
    },
    {
      id: 5,
      img: gennaroImg ,
      heading: "simple portfolio",
      link: "https://gennaro-portfolio.vercel.app/",
      github: "https://github.com/gennaro-16/gennaro-portfolio",
      tech_Stack: ["react", "html", "css"],
    },
    {
      id: 6,
      img: comingSoonImg,
      heading: "coming soon",
      link: null,
      github: "https://github.com",
      tech_Stack: ["nextjs", "tailwindcss", "mongodb", "graphql", "typescript"],
    },
  ];

  const [projects, setProjects] = useState(Data.slice(0, 5));
  const [display, setDisplay] = useState("none");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);


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


*/