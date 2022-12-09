import React from "react";
import "./Expert.css";

const Expert = ({ expert }) => {
  const { name, description, img } = expert;
  return (
    <div className="expert-container">
      <img className="img-expert" src={img} alt="" />
      <div className="expert-information">
        <h4 className="Name-title">Name: {name}</h4>
        {/* <h4 className="Name"> </h4> */}
        <p>
          <bold className="bold">Description:</bold> {description}
        </p>
      </div>
    </div>
  );
};

export default Expert;
