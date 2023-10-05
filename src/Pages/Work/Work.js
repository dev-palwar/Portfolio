import React from "react";
import "../Work/Style.scss";
import Card from "../../Components/Card/Card";

const Work = () => {
  return (
    <div className="work">
      <div className="heading">
        <div className="bars">
          <span></span>
          <span></span>
        </div>
        <h1>work</h1>
      </div>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Work;
