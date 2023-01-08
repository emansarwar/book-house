import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { bookId } = useParams();

  
  const [service, setService] = useState({});
  useEffect( () =>{
    const url = `http://localhost:5000/service/${bookId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setService(data))
  },[])
  return (
    <div>
      <h2>Welcome to ServiceDetail: {service.title}</h2>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn  btn-success">Please Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
