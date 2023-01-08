import useServices from "../../../Hooks/useServices";
// import KhujTheSearch from "../../KhujTheSearch/KhujTheSearch";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useServices();

  return (
    <div id="services" className="services-fullcontainer">
      
      <div>
      <h1 className="services-header">All Books</h1>
      {/* <KhujTheSearch/> */}
      </div>
      <div className="services-container">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
