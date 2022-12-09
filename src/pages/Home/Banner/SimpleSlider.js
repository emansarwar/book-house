// import React, { useState } from "react";

import "./Slider.scss";
import "./slider.css"

import banner1 from "./img-banner/banner1.png";
import banner2 from "./img-banner/banner2.png";
import banner3 from "./img-banner/banner3.png";

import banner4 from "./img-banner/banner4.png";
import banner5 from "./img-banner/banner5.png";
import banner6 from "./img-banner/banner6.png";
import banner7 from "./img-banner/banner7.png";
import banner8 from "./img-banner/banner8.png";

import ImgComp from "./ImgComp";

function SimpleSlider() {
  // const [x, setX] = useState(0);

  let sliderArr = [
    <ImgComp src={banner1} />,
    <ImgComp src={banner2} />,
    <ImgComp src={banner3} />,
    <ImgComp src={banner4} />,
    <ImgComp src={banner5} />,
    <ImgComp src={banner6} />,
    <ImgComp src={banner7} />,
    
    <ImgComp src={banner8} />,
  ];
  // const goLeft = () => {
    
  //   x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  // };
  // const goRight = () => {
    
  //   x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  // };
  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div key={index} className="slide" >
            {item}
          </div>
        );
      })}
      {/* <button id="goLeft" onClick={goLeft}>
        <i class="fas fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
        <i className="fas fa-chevron-right"></i>
        
      </button> */}
    </div>
  );
}

export default SimpleSlider;

// style={{ transform: `translateX(${x}%)` }}
