import React from 'react';
import s from "./aboutMe.module.css";

function ScrollArrow({scrollTo, page, text, offset}) {
    return (
        <div className='arrow' style={offset && {top: `${100 + offset}vh`}}
             onClick={() => scrollTo(page)}
        >
            {text}
        </div>
    );
}

export default ScrollArrow;