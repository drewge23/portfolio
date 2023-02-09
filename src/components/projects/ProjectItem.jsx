import React from 'react';
import s from './projects.module.css'

function ProjectItem(props) {
    return (
        <div className={s.item}>
            <a href="#" className={s.title}><h2>{props.title}</h2></a>
            <img src={props.imageUrl} alt="screenshot" className={s.screenshot}/>
            <p className={s.description}>
                {props.description}
            </p>
            <h3>Stack: </h3>
            <div>
                {props.children}
            </div>
            <a href={props.linkUrl}>Project page →</a>
        </div>
    );
}

export default ProjectItem;