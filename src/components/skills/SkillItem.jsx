import React from 'react';
import s from './skills.module.css'

function SkillItem(props) {
    return (
        <div className={s.skillItem}>
            {props.logoUrl
                ? <img src={props.logoUrl} alt=' • ' className={s.logo}/>
                : <span>{props.icon || ' • '}</span>
            }
            <a href={props.link} target={'_blank'} rel={'noreferrer'}>
                {' ' + props.children}
            </a>
        </div>
    );
}

export default SkillItem;