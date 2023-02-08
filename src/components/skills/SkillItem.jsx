import React from 'react';
import s from './skills.module.css'

function SkillItem(props) {
    return (
        <div className={s.skillItem}>
            {props.logoUrl
                ? <img src={props.logoUrl} alt=' • ' className={s.logo}/>
                : <span>{props.emoji || ' • '}</span>
            }
            <a href={props.link} target={'_blank'} rel={'noreferrer'}>
                {' ' + props.children}
            </a>
            {/*{props.quality && <div style={{*/}
            {/*    width: `${15 * props.quality}px`,*/}
            {/*    height: '15px',*/}
            {/*    backgroundColor: 'lightcoral',*/}
            {/*    filter: `hue-rotate(${120 / 10 * props.quality}deg)`*/}
            {/*}} />}*/}
        </div>
    );
}

export default SkillItem;