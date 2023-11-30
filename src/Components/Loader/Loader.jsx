import React from "react";
import "../Loader/Style.scss";

const Loader = () => {
  return <div className="skeleton-loader"></div>;
};

export default Loader;

export const LoadMore = ({ heading, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {/* Your card content here */}
      <h3>{heading}</h3>
      {/* Other card content */}
    </div>
  );
};
