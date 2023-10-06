import React from "react";
import "../Home/Style.scss";
import { motion } from "framer-motion";
import sanji from "../../Assets/sanji.jpg";
import { animations } from "../../Styles/Animations/Animations";
import Socials from "../../Components/Socials/Socials";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="info-section">
          <motion.h1 {...animations.h1}>
            Hey, I'm <br />
            Dev Palwar
          </motion.h1>
          <motion.h3 {...animations.fade}>A Full Stack Developer</motion.h3>
          <motion.p {...animations.fade}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem ad iusto voluptatum rem eligendi nesciunt, fugit
            fugiat sit quidem quos!
          </motion.p>
          <Socials />
        </div>
        <div className="image-section">
          <img src={sanji} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
