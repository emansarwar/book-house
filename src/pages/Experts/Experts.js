// import { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import './Experts.css'

import useExperts from '../../Hooks/useExperts';




const Experts = () => {
    const [experts] = useExperts();
    
    return (
        <div id='experts'>
            <h1 className="experts-header">Writters</h1>
            <div className='experts-container'>
                {
                    experts.map(expert =><Expert
                    key={expert.id}
                    expert={expert}
                    />)
                }
            </div>
        </div>
    );
};

export default Experts;