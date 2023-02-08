import React from 'react';
import s from './skills.module.css'

function SkillItem(props) {
    let quality = []
    for (let i = 0; i < props.quality; i++) {
        quality.push('*')
    }
    return (
        <div>
            {props.logoUrl
                ? <img src={props.logoUrl} alt=' • ' className={s.logo}/>
                : <span>{props.emoji || ' • '}</span>
            }
            <a href={props.link} target={'_blank'}>
                {' ' + props.children}
            </a>
            {props.quality && <div style={{
                width: `${15 * props.quality}px`,
                height: '15px',
                backgroundColor: 'lightcoral',
                filter: `hue-rotate(${120 / 10 * props.quality}deg)`
            }} />}
        </div>
    );
}

export default SkillItem;