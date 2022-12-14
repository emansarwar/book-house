// import { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import './Experts.css'
import Expert1 from "./experts-img/expert1.png"
import Expert2 from "./experts-img/expert2.png"
import Expert3 from "./experts-img/expert3.png"
import Expert4 from "./experts-img/expert4.png"
import Expert5 from "./experts-img/expert5.png"
import Expert6 from "./experts-img/expert6.png"
import Expert7 from "./experts-img/expert7.png"
import Expert8 from "./experts-img/expert8.png"
import Expert9 from "./experts-img/expert9.png"
import Expert10 from "./experts-img/expert10.png"
import Expert11 from "./experts-img/expert11.png"
import Expert12 from "./experts-img/expert12.png"
import useExperts from '../../Hooks/useExperts';

// const experts = [
    
//         {
//             id:1, 
//             name: "Diana Junior", 
//             img: Expert1,
//             description: "I am a Divorcee Lawyer. I've six years experience. I'm dedicated to my lawshipment. In this sector, I've a good reputation. In any work, I want to fulfill my work properly and perfectly."
//         },
//         {
//             id:2, 
//             name: "Mr. Robin", 
//             img: Expert2,
//             description: "I am a Personal Injury Lawyer. I've six years experience. I'm dedicated to my lawshipment. In this sector, I've a good reputation. In any work, I want to fulfill my work properly and perfectly."
//         },
//         {
//             id:3, 
//             name: "Katy Perry", 
//             img: Expert3,
//             description: "I am a Estate Planning Lawyer. I've six years experience. I'm dedicated to my lawshipment. In this sector, I've a good reputation. In any work, I want to fulfill my work properly and perfectly."
//         },
//         {
//             id:4, 
//             name: "Joe Riden", 
//             img: Expert4,
//             description: "I am a Bankruptcy Lawyer. I've six years experience. I'm dedicated to my lawshipment. In this sector, I've a good reputation. In any work, I want to fulfill my work properly and perfectly."
//         },
//         {
//             id:5, 
//             name: "Christina Perri", 
//             img: Expert5,
//             description: "I am a Intellectual Property Lawyer. I've six years experience. I'm dedicated to my lawshipment. In this sector, I've a good reputation. In any work, I want to fulfill my work properly and perfectly."
//         },
//         {
//             id:6, 
//             name: "Rehma Hoque", 
//             img: Expert6,
//             description: "I am a Employment Lawyer. I've six years experience. I'm dedicated to my lawshipment. In this sector, I've a good reputation. In any work, I want to fulfill my work properly and perfectly."
//         },
//         {
//             id:7, 
//             name: "Shakira Jr.", 
//             img: Expert7,
//             description: "I am a Corporate Lawyer. I've six years experience. I'm dedicated to my lawshipment. In this sector, I've a good reputation. In any work, I want to fulfill my work properly and perfectly."
//         },
//         {
//             id:8, 
//             name: "Mrs. Jossephine", 
//             img: Expert8,
//             description: "I am a Immigration Lawyer. I've six years experience. I'm dedicated to my lawshipment. In this sector, I've a good reputation. In any work, I want to fulfill my work properly and perfectly."
//         },
//         {
//             id:9, 
//             name:"Bladimir Zelensky", 
//             img: Expert9,
//             description: "I am a Criminal Lawyer. I've six years experience. I'm dedicated to my lawshipment. In this sector, I've a good reputation. In any work, I want to fulfill my work properly and perfectly."
//         },
//         {
//             id:10, 
//             name: "Bladimir Duella", 
//             img: Expert10,
//             description: "I am a Medical Malpractice Lawyer. I've six years experience. I'm dedicated to my lawshipment. In this sector, I've a good reputation. In any work, I want to fulfill my work properly and perfectly."
//         },
//         {
//             id:11, 
//             name: "Kim Jong", 
//             img: Expert11,
//             description: "I am a Social Security Disability Lawyer. I've six years experience. I'm dedicated to my lawshipment. In this sector, I've a good reputation. In any work, I want to fulfill my work properly and perfectly."
//         },
//         {
//             id:12, 
//             name: "Chi xin Rhing", 
//             img: Expert12,
//             description: "I am a Civil Litigation Lawyer. I've six years experience. I'm dedicated to my lawshipment. In this sector, I've a good reputation. In any work, I want to fulfill my work properly and perfectly."
//         }
        
//     ]


const Experts = () => {
    const [experts, setExperts] = useExperts();
    
    return (
        <div id='experts'>
            <h1 className="experts-header">Our Experts</h1>
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