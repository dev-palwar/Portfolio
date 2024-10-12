import React from "react";
import "../About/Style.scss";
import { motion } from "framer-motion";
import Heading from "../../Components/Heading/Heading";
import { animations } from "../../Styles/Animations/Animations";
import { SkillsIcons } from "../Work/icons";

const About = () => {
 // const techTags = ["React", "Node.js", "Next.js", "MongoDB", "MySQL", "Express", "JavaScript", "CSS", "HTML", "Cybersecurity"]; // List of technology tags

  return (
    <>
      <Heading Heading={"About me"} />
      <div className="about">
        <div className="info">
          <motion.p {...animations.fade}>
            👋 Hi there! I'm Zakaria Rachid, a dedicated web developer with hands-on experience in modern web technologies, including React and Next.js. I enjoy working with JavaScript libraries and frameworks, along with a solid grasp of backend technologies like Node.js, Express, MongoDB, and MySQL.
            <br />
            <br />
            🔐 I'm currently exploring the field of cybersecurity, tackling challenges to enhance website security. I thrive on problem-solving and love experimenting with new technologies.
            <br />
            <br />
            🚀 I'm excited about the journey ahead, eager to contribute to innovative projects and collaborate with like-minded professionals. Let's connect and explore new opportunities together!
          </motion.p>
        </div>
        <motion.div {...animations.fade} className="skills">
          <h2>Stuff I Know:</h2>
          <div className="icons">
            {SkillsIcons.map(({ Component, color, skill, name }, index) => (
              <div className="icon-container" key={index}>
                <motion.div
                  className="icon"
                  whileHover={{ scale: 1.2 }} // Scale effect on hover
                  whileTap={{ scale: 0.9 }}  // Scale effect on tap
                >
                  <Component
                    title={name}
                    style={{
                      color,
                      cursor: "pointer",
                    }}
                  />
                </motion.div>
                <p className="skill-name">{name}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Tags Section for Technologies */}
        {/*<motion.div {...animations.fade} className="tech-tags">
          <h2>Technologies I Use:</h2>
          <div className="tags">
            {techTags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </motion.div>*/ }
        
      </div>
    </>
  );
};

export default About;
