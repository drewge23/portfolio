import React from 'react';
import photo from '../../images/me.jpeg'
import s from './aboutMe.module.css'

function Photo(props) {
    return (
        <div className={s.frameContainer}>
            <div className={s.frame}>
                <img src={photo} alt="img" className={s.photo}/>
            </div>
        </div>
    );
}

export default Photo;