import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const {id, name, img, price, description } = service;
  const navigate = useNavigate();
  const invoiceId = id =>{
    navigate(`/service/${id}`)
  }
  return (
    <div className="service-container">
      <img className="img-container" src={img} alt="" />

      <div className="service-information">
        <div className="name">
          <h3 className="Name-title">Name: {name}</h3>

          
        </div>
        <div>
          <p>Price: {price}</p>
        </div>
        <div>
          <p>
            <bold>Description</bold> <small>: {description}</small>
          </p>
        </div>

        <button onClick={() => invoiceId(id)} className="book-btn">Book: {name}</button>
      </div>
    </div>
  );
};

export default Service;
