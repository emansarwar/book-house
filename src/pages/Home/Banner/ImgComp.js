import React from 'react';

function ImgComp({src}){
    let imgStyles = {
        Width:100+"%",
        height: "auto"
    }
    return <img src={src} style={imgStyles} alt=" sliding-img" />;
};

export default ImgComp;