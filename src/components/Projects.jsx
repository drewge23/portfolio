import React from 'react';
import ProjectItem from "./ProjectItem";
import s from './projects.module.css'

function Projects() {
    return (
        <div className={s.projects}>
            <h1>Projects</h1>
            <div className={s.projectItems}>
                <ProjectItem/> {/*m4fs*/}
                <ProjectItem/> {/*social-network*/}
                <ProjectItem/> {/*racoon-lists*/}
                <ProjectItem/> {/*weather-app*/}
                <ProjectItem/> {/*cipher*/}
                <ProjectItem/> {/*ptiza-vorobei*/}
                <ProjectItem/> {/*blackjack*/}
                <ProjectItem/> {/*portfolio*/}
            </div>
        </div>
    );
}

export default Projects;