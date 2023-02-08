import React from 'react';
import s from './skills.module.css'
import SkillBlock from "./SkillBlock";
import SkillItem from "./SkillItem";
import ScrollArrow from "./ScrollArrow";

import FR from '../images/French_flag.png'
import US from '../images/USA_flag.png'
import RU from '../images/Russian_flag.png'
import IL from '../images/Israel_flag.png'
import SP from '../images/Spain_flag.png'
import GE from '../images/German_flag.png'
import HTML from '../images/html.png'

import { ReactJs, Reactquery } from '@icons-pack/react-simple-icons';

function Skills({scrollTo}) {
    return (
        <div className={s.skills}>
            <SkillBlock title='Education 📜🎓'>
                <SkillItem>Physics, Orel State University, Russia (2015 - 2019)</SkillItem>
                <SkillItem>Linguistics, Orel State University, Russia (2019 - 2021)</SkillItem>
                <SkillItem>Linguistics, Orel State University, Russia (2019 - 2021)</SkillItem>
                <SkillItem>Linguistics, Orel State University, Russia (2019 - 2021)</SkillItem>
                <SkillItem>Linguistics, Orel State University, Russia (2019 - 2021)</SkillItem>
                <SkillItem>Linguistics, Orel State University, Russia (2019 - 2021)</SkillItem>
                <SkillItem>Linguistics, Orel State University, Russia (2019 - 2021)</SkillItem>
                <SkillItem>Linguistics, Orel State University, Russia (2019 - 2021)</SkillItem>
                <SkillItem>Linguistics, Orel State University, Russia (2019 - 2021)</SkillItem>
                <SkillItem>Linguistics, Orel State University, Russia (2019 - 2021)</SkillItem>
                <SkillItem>Linguistics, Orel State University, Russia (2019 - 2021)</SkillItem>
                <SkillItem link='https://www.tel-ran.com/'>
                    Front-end development, Tel-Ran College, Rehovot, Israel (2022 - 2023)
                </SkillItem>
            </SkillBlock>
            <SkillBlock title='Working Experience ‍🈺💼'>

            </SkillBlock>
            <SkillBlock title='Skills 💪🔥'>
                <div>
                    <SkillItem quality={8}>JavaScript</SkillItem>
                    <SkillItem quality={8}>JQuery</SkillItem>
                    <SkillItem emoji={<ReactJs color='#61DAFB' size={24} />} quality={9}>React</SkillItem>
                    <SkillItem quality={8}>Redux</SkillItem>
                    <SkillItem quality={6}>Firebase</SkillItem>
                    <SkillItem quality={6}>React Native</SkillItem>
                </div>
                <div>
                    <SkillItem logoUrl={US} quality={9}>English</SkillItem>
                    <SkillItem logoUrl={RU} quality={10}>Russian</SkillItem>
                    <SkillItem logoUrl={FR} quality={7}>French</SkillItem>
                    <SkillItem logoUrl={IL} quality={6}>Hebrew</SkillItem>
                </div>
            </SkillBlock>
            <ScrollArrow scrollTo={scrollTo} page={2} text={'Go downer'}/>
        </div>
    );
}

// 🧑‍🎓👨‍🎓
export default Skills;