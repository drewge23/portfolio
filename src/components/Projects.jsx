import React from 'react';
import ScrollArrow from "./ScrollArrow";
import ProjectItem from "./ProjectItem";
import s from './projects.module.css'

function Projects({scrollTo}) {
    return (
        <div className={s.projects}>
            <h1>Projects</h1>
            <div className={s.projectItems}>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                {/*cipher*/}
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
            </div>
            <ScrollArrow scrollTo={scrollTo} page={3} text={'Call me?'} offset={50}/>
        </div>
    );
}

export default Projects;