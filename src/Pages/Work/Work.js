import React from "react";
import "../Work/Style.scss";
import Card from "../../Components/Card/Card";
import Data from "../../Assets/Data.json";

const Work = () => {
  return (
    <div className="work">
      <div className="heading">
        <div className="bars">
          <span></span>
          <span></span>
        </div>
        <h1>my work</h1>
      </div>
      <div className="cards">
        {Data.map((value) => {
         return <Card key={value.id} heading={value.heading} url={value.link} image={value.img} github={value.github}/>;
        })}
      </div>
    </div>
  );
};

export default Work;
