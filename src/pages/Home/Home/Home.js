import React from 'react';
import Experts from '../../Experts/Experts';
// import Header from '../../Shared/Header/Header';
// import Banner from '../Banner/Banner';
import SimpleSlider from '../Banner/SimpleSlider';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='home-container'>
            
            <SimpleSlider/>
            <hr className='slider-hr' />
            <Services/>
            <hr/>
            <Experts/>
        </div>
    );
};

export default Home;