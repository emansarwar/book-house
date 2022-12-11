import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>Welcome to ServiceDetail: {serviceId}</h2>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn  btn-success">Please Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
