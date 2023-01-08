import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({service}) => {
  const {_id, author,title, image, price, summary } = service;
  const navigate = useNavigate();
  const invoiceId = id =>{
    navigate(`/books/${id}`)
  }
  return (
    <div className="service-container">
      <img className="img-container" src={image} alt="" />

      <div className="service-information">
        <div className="name">
          <h3 className="Name-title">Author: {author}</h3>

          
        </div>
        
        <div>
          <p><span className="bold">Summary</span><small>: {summary}</small>
          </p>
        </div>
        <div>
          <p>Price: {price}</p>
        </div>

        <button onClick={() => invoiceId(_id)} className="book-btn">Book: {title}</button>
      </div>
    </div>
  );
};

export default Service;
