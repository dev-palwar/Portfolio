import React from "react";
import "../Home/Style.scss";
import { motion } from "framer-motion";
import me from "../../Assets/Images/mee.jpg";
import { animations } from "../../Styles/Animations/Animations";
import Socials from "../../Components/Socials/Socials";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="info-section">
          <motion.h1 {...animations.h1}>
            Hi, I am <br />
            Dev Palwar
          </motion.h1>
          <motion.h3 {...animations.fade}>A Full Stack Developer</motion.h3>
          <motion.p {...animations.fade}>
            If you'd like to collaborate or have any questions, <br /> feel free
            to reach out to me. I'm excited to connect with you!
          </motion.p>
          <Socials />
        </div>
        <div className="image-section">
          <img src={me} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
