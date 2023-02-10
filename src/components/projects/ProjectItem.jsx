import React from 'react'
import s from './projects.module.css'
import $ from "jquery"

function ProjectItem(props) {
    return (
        <div
            style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: '1em',
            width: '300px',
        }}
            // className={s.item}
            className={'projectItem'}
            id={props.id}
        >
            <a href={props.linkUrl} className={s.title} target={'_blank'} rel={'noreferrer'}>
                <h2>{props.title}</h2>
            </a>
                <img src={props.imageUrl} alt="screenshot" className={s.screenshot}
                onClick={() => {
                    //TODO: make images bigger, 2 in a row
                    $('.projectItem').animate({width: '300px'}, 'slow')
                    $(`#${props.id}`).animate({width: '400px'}, 'slow')
                }} />
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