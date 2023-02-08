import React from 'react';
import s from './skills.module.css'

function SkillBlock(props) {
    if (props.children) {
        return (
            <div style={{width: '50%'}}>
                <h1>{props.title}</h1>
            <div className={s.skillBlock}>
                {props.children}
            </div>
            </div>
        );
    } else return null
}

export default SkillBlock;