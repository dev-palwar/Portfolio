import React from "react";
import "../Work/Style.scss";
import Card from "../../Components/Card/Card";
import Data from "../../Assets/Data.json";
import Heading from "../../Components/Heading/Heading";

const Work = () => {
  return (
    <div className="work">
      <Heading Heading={"my work"} />
      <div className="cards">
        {Data.map((value) => {
          return (
            <Card
              key={value.id}
              heading={value.heading}
              url={value.link}
              image={value.img}
              github={value.github}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
