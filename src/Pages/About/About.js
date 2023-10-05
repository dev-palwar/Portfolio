import React from "react";
import "../About/Style.scss";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoSass,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { SiExpress, SiRedux, SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="heading">
          <h1>About</h1>
          <div>
            <div className="bars">
              <span></span>
              <span></span>
            </div>
            <h3>Me</h3>
          </div>
        </div>
        <div className="info">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            doloribus numquam est sunt enim optio beatae labore esse obcaecati
            omnis dolor quasi natus, repellat praesentium tenetur mollitia ut
            ratione quisquam debitis eius placeat. <br />
            Nobis molestiae unde sequi, amet sapiente mollitia corporis cumque
            omnis nostrum, suscipit natus ad expedita, laborum sint aliquid
            alias! Tenetur officia eos beatae. Similique ullam saepe cumque
            facilis odio expedita commodi sint sequi at quis! Minima, beatae,
            consequatur et reiciendis earum eum odio unde nulla, quo id vel ex
            officiis veritatis aliquid nobis facilis repellendus aliquam
            dignissimos!
          </p>
          <div className="skills">
            <h2>My skills : </h2>
            <div className="icons">
              <AiFillHtml5 style={{color: "orange"}}/>
              <BiLogoCss3 style={{color: "blue"}}/>
              <BiLogoJavascript style={{color: "yellow"}}/>
              <BiLogoReact style={{color: "deepskyblue"}}/>
              <SiRedux style={{color: "lightblue"}}/>
              <BiLogoSass style={{color: "#cc6699"}}/>
              <TbBrandNextjs style={{color: "black"}}/>
              <SiTailwindcss style={{color: "skyblue"}}/>
              <BiLogoNodejs style={{color: "#215732"}}/>
              <SiExpress style={{color: "yellow"}}/>
              <BiLogoMongodb style={{color: "green"}}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
