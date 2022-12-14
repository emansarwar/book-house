import React from "react";
import "./Expert.css";

const Expert = ({ expert }) => {
  const { name, description, img } = expert;
  return (
    <div className="expert-container">
      <img className="img-expert" src={img} alt="" />
      <div className="expert-information">
        <h4 className="Name-title">Name: {name}</h4>
        
        <p>
          <span className="bold">Description:</span> {description} 
        </p>
      </div>
    </div>
  );
};

export default Expert;
