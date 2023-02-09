import React from 'react';
import s from "./projects.module.css";

function StackItem(props) {
    return (
        <div className={s.stackItem}>
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

export default StackItem;