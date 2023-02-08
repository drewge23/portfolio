import React from 'react';
import Photo from "./Photo";
import s from './aboutMe.module.css'
import ScrollArrow from "./ScrollArrow";

function AboutMe({scrollTo}) {
    return (
        <div>
            <div className={s.aboutMe}>
                <div className={s.description}>
                    <h1>About me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, alias aliquam doloremque praesentium
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
            <ScrollArrow scrollTo={scrollTo} page={1} text={'Go down'}/>
        </div>
    );
}

export default AboutMe;