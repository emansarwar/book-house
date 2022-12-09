

import { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import './Experts.css'


const Experts = () => {
    const [experts, setExperts] = useState([]);

    useEffect( () =>{
        fetch(`experts.json`)
        .then(res => res.json())
        .then( data => setExperts(data))
    },[])
    return (
        <div id='experts'>
            <h1 className="experts-header">Our Experts</h1>
            <div className='experts-container'>
                {
                    experts.map(expert =><Expert
                    key={expert.id}
                    expert={expert}
                    />

                    )
                }
            </div>
        </div>
    );
};

export default Experts;