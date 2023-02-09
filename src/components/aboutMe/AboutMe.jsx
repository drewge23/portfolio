import React from 'react';
import Photo from "./Photo";
import s from './aboutMe.module.css'

function AboutMe() {
    return (
        <div>
            <div className={s.aboutMe}>
                <div className={s.description}>
                    <h1 className={s.title}>About me 🐦‍🔥    </h1>
                    <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, alias aliquam doloremque praesentium
                        quam quo sit voluptatum. Consequuntur facere necessitatibus nihil officiis, quia similique.
                        Accusantium amet est ullam unde veniam. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ad
                        amet assumenda distinctio dolorum exercitationem fuga in molestiae nam, neque nihil,
                        perspiciatis
                        quod rerum similique voluptate?</p>
                </div>
                <div className={s.photoComponent}>
                    <Photo/>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;