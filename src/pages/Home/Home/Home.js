import React from "react";
import "./Home.css";
import useExperts from "../../../Hooks/useExperts";

import Expert from "../../Expert/Expert";

import SimpleSlider from "../Banner/SimpleSlider";

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Service from "../Service/Service";
import useServices from "../../../Hooks/useServices";

const Home = () => {
  const navigate = useNavigate();
  const [experts, setExperts] = useExperts();
  const [services, setServices] = useServices();
  const homeExperts = experts.slice(0, 3);
  const homeServices = services.slice(0, 3);

  const mainExperts = (e) => {
    navigate("/experts");
  };
  const mainServices = (e) => {
    navigate("/services");
  };
  return (
    <div className="home-container">
      <SimpleSlider />
      <hr />
      <div id="services" className="services-fullcontainer">
        <h1 className="services-header">Our Services</h1>
        <div className="services-container">
          {homeServices.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
        <div className="view-all  mx-4">
          <Button className="w-100 button-view-all" variant="secondary" onClick={mainServices}>
            View All
          </Button>
        </div>
      </div>
      <hr />
      
      <div id="experts">
        <h1 className="experts-header">Our Experts</h1>
        <div className="experts-container">
          {homeExperts.map((expert) => (
            <Expert key={expert.id} expert={expert} />
          ))}
        </div>
        <div className="view-all mx-4">
          <Button className="w-100 button-view-all" variant="secondary" onClick={mainExperts}>
            View All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
