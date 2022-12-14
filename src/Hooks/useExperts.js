// import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useExperts = () => {
    
    const [experts, setExperts] = useState([]);

    

    useEffect( ()=>{
        fetch('Experts.json')
        .then(res => res.json())
        .then(data => setExperts(data)); 
    } ,[]);

    return [experts, setExperts];
};

export default useExperts;