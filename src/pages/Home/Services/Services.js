
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useServices();

    
    return (
        <div id='services' className='services-fullcontainer'>
            <h1 className='services-header'>Our Services</h1>
            <div className="services-container">
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                
                />)
            }
            </div>
            
            
        </div>
    );
};

export default Services;