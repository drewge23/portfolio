import React from 'react';
import ProjectItem from "./ProjectItem";
import s from './projects.module.css'
import projectsData from "./projectsData.js";

function Projects() {
    return (
        <div className={s.projects}>
            <h1>Projects 💼</h1>
            <div className={s.projectItems}>
                {projectsData.map(project => (
                    <ProjectItem
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        linkUrl={project.linkUrl}
                    >
                        {project.stack}
                    </ProjectItem>
                ))}
            </div>
        </div>
    );
}

export default Projects;