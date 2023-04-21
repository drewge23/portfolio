import React from 'react';
import s from './skills.module.css'
import SkillBlock from "./SkillBlock";
import SkillItem from "./SkillItem";

import FR from '../../images/flags/fr_flag_round.png'
import RU from '../../images/flags/ru_flag_round.png'
import IL from '../../images/flags/il_flag_round.png'
import UK from '../../images/flags/uk_flag_round.png'
import PHYSICS from '../../images/icons/physics.png'
import LINGUISTICS from '../../images/icons/linguistics.png'
import WEBDEV from '../../images/icons/webdev.png'

import {Firebase, Javascript, Jquery, ReactJs, Redux, Typescript} from '@icons-pack/react-simple-icons';

function Skills() {
    const ICON_SIZE = 40;

    return (
        <div className={s.skills}>
            <SkillBlock title='Education 📜🎓'>
                <SkillItem logoUrl={PHYSICS} link='https://oreluniver.ru/'>
                    Physics, Orel State University, Russia (2015 - 2019)
                </SkillItem>
                <SkillItem logoUrl={LINGUISTICS} link='https://oreluniver.ru/'>
                    Linguistics, Orel State University, Russia (2019 - 2021)
                </SkillItem>
                <SkillItem logoUrl={WEBDEV} link='https://www.tel-ran.com/'>
                    Front-end development, Tel-Ran College, Rehovot, Israel (2021 - 2022)
                </SkillItem>
            </SkillBlock>
            <SkillBlock title='Working Experience ‍🈺💼'>

            </SkillBlock>
            <SkillBlock title='Skills 💪✨'>
                <div>
                    <SkillItem
                        icon={<ReactJs color='#61DAFB' size={ICON_SIZE}/>}
                        link='https://reactjs.org/'>
                        React
                    </SkillItem>
                    <SkillItem
                        icon={<Redux color='#764ABC' size={ICON_SIZE}/>}
                        link='https://redux.js.org/'>
                        Redux
                    </SkillItem>
                    <SkillItem
                        icon={<Firebase color='#FFCA28' size={ICON_SIZE}/>}
                        link='https://firebase.google.com/'>
                        Firebase
                    </SkillItem>
                    <SkillItem
                        icon={<ReactJs color='#61DAFB' size={ICON_SIZE}/>}
                        link='https://reactnative.dev/'>
                        React Native
                    </SkillItem>
                    <SkillItem
                        icon={<Javascript color='#F7DF1E' size={ICON_SIZE}/>}
                        link='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
                        JavaScript
                    </SkillItem>
                    <SkillItem
                        icon={<Typescript color='#3178C6' size={ICON_SIZE}/>}
                        link='https://www.typescriptlang.org/'>
                        TypeScript
                    </SkillItem>
                    <SkillItem
                        icon={<Jquery color='#0769AD' size={ICON_SIZE}/>}
                        link='https://jquery.com/'>
                        JQuery
                    </SkillItem>
                </div>
                <div className={s.languages}>
                    <SkillItem logoUrl={UK}>English</SkillItem>
                    <SkillItem logoUrl={RU}>Russian</SkillItem>
                    <SkillItem logoUrl={FR}>French</SkillItem>
                    <SkillItem logoUrl={IL}>Hebrew</SkillItem>
                </div>
            </SkillBlock>
        </div>
    );
}

export default Skills;