import React, {useEffect, useState} from 'react';
import ProjectItem from "./ProjectItem";
import s from './projects.module.css'
import projectsData from "./projectsData.js";
import $ from 'jquery'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown, faAngleUp)

function Projects() {
    const [isUp, setIsUp] = useState(false)
    useEffect(() => {
        const container = $('#projectItems')
        container.on('scroll', () => {
            if (container.prop("scrollHeight") - container.scrollTop() < 300 + container.height()) {
                // $('#nextBtn').html('⬆')
                setIsUp(true)
            } else {
                // $('#nextBtn').html('⬇')
                setIsUp(false)
            }
        })
    }, [])
    const scrollProjects = () => {
        const container = $('#projectItems')
        const containerHeight = container.height()
        const currentPosition = container.scrollTop()
        const scrollCounter = Math.ceil(currentPosition / containerHeight) + 1
        if (!isUp)
            container.animate({scrollTop: containerHeight * scrollCounter}, 500)
        else
            container.animate({scrollTop: 0}, 500)
    }

    const [screenshotUrl, setScreenshotUrl] = useState(null)
    useEffect(() => {
        if (screenshotUrl) {
            $('#screenshotContainer').fadeIn()
            $('#projectItems').fadeOut()
        } else {
            $('#screenshotContainer').fadeOut()
            $('#projectItems').fadeIn()
        }
    }, [screenshotUrl])

    return (
        <div className={s.projects}>
            <h1>Projects 💼</h1>
            <div className={s.screenshotContainer}
                 style={{display: 'hidden'}} id={'screenshotContainer'}>
                <img src={screenshotUrl} alt="" onClick={() => setScreenshotUrl(null)}/>
            </div>
            <div className={s.projectItems} id='projectItems'>
                {projectsData.map(project => (
                    <ProjectItem
                        id={project.id}
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        linkUrl={project.linkUrl}
                        setScreenshotUrl={setScreenshotUrl}
                    >
                        {project.stack}
                    </ProjectItem>
                ))}
                <div id={'nextBtn'} className={s.nextBtn} onClick={scrollProjects}>
                    {isUp
                        ? <FontAwesomeIcon icon="fa-solid fa-angle-up"/>
                        : <FontAwesomeIcon icon="fa-solid fa-angle-down"/>}
                </div>
            </div>
        </div>
    );
}

export default Projects;