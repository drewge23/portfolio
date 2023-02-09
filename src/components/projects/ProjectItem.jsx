import React from 'react';
import s from './projects.module.css'

function ProjectItem(props) {
    return (
        <div className={s.item}>
            <a href={props.linkUrl} className={s.title} target={'_blank'} rel={'noreferrer'}>
                <h2>{props.title}</h2>
            </a>
            <a href={props.linkUrl} className={s.title} target={'_blank'} rel={'noreferrer'}>
                <img src={props.imageUrl} alt="screenshot" className={s.screenshot}/>
            </a>
            <div className={s.description}>
                {props.description}
            </div>
            <h3>Stack: </h3>
            <div>
                {props.children}
            </div>
            <a href={props.linkUrl} target={'_blank'} rel={'noreferrer'}>
                Project page →
            </a>
        </div>
    );
}

export default ProjectItem;