import React from 'react'
import s from './projects.module.css'
import $ from "jquery"

function ProjectItem(props) {
    // const zoomIn = (e) => {
    //     const projectItem = $('.projectItem')
    //     const normalWidth = '300px'
    //     const maxWidth = '80%'
    //     if (e.target.parentNode.style.width === maxWidth) {
    //         $(e.target).parent().animate({width: normalWidth}, 'slow')
    //         $('.projectItem').fadeIn('slow')
    //         return
    //     }
    //     projectItem.each(function() {
    //         if ($(this).attr('id') !== $(e.target).parent().attr('id')) {
    //             $(this).fadeOut('slow')
    //         }
    //     })
    //     projectItem.animate({width: normalWidth}, 'slow')
    //     $(`#${props.id}`).animate({width: maxWidth}, 'slow')
    // }
    const zoomIn = (e) => {
        props.setScreenshotUrl($(e.target).attr('src'))
    }

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
                 onClick={(e) => zoomIn(e)}/>
            <div className={s.description}>
                {props.description}
            </div>
            <h3>Stack: </h3>
            <div>
                {props.children}
            </div>
            {props.linkUrl
                ? <a href={props.linkUrl} target={'_blank'} rel={'noreferrer'}>
                    <h3>Project page 🚀</h3>
                </a>
                : <h3 style={{opacity: '0.3'}}>Work in progress...</h3>}
        </div>
    );
}

export default ProjectItem;