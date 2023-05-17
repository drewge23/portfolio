import React from 'react';
import Photo from "./Photo";
import s from './aboutMe.module.css'

function AboutMe() {
    return (
        <div>
            <div className={s.aboutMe}>
                <div className={s.description}>
                    <h1 className={s.title}>About me 🐦‍🔥 </h1>
                    <p className={s.text}>Shalom! I’m Andrei, I’m around 24 and I’m a front-end developer. I’m
                        all about learning new stuff, keen on physics, linguistics and theosophic studies. Love learning
                        languages. If I happen to have free time I play chess, texas holdem, renju, shogi and other
                        classic table games. Badminton is also on the list. Nowadays I dive deep into SPA development
                        with <b>React</b>, <b>Redux</b> and <b>Firebase</b> as my main tools. Open for hiring!</p>
                </div>
                <div className={s.photoComponent}>
                    <Photo/>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
