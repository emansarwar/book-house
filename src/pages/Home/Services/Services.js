import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch(`services.json`)
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div id='services' className='services-fullcontainer'>
            <h1 className='services-header'>Our Services</h1>
            <div className="services-container">
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                
                ></Service>)
            }
            </div>
            
            
        </div>
    );
};

export default Services;