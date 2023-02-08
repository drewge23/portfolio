import React from 'react';

import screenshot from '../../images/bg.jpg'

function ProjectItem(props) {
    return (
        <div style={{display: "flex", flexDirection: 'column', flexWrap: 'wrap', width: '200px'}}>
            <a href="src/components/projects/ProjectItem#"><h3>Title</h3></a>
            <img src={screenshot} alt="screenshot" style={{width: '200px'}}/>
            <p style={{fontSize: '0.5em'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur dolores eligendi explicabo illo
                non perferendis perspiciatis porro praesentium quibusdam ratione reprehenderit sapiente, similique
                voluptate voluptatem. Ad dicta dolore veniam?
            </p>
            <p style={{fontSize: '0.5em'}}>Technologies: </p>
            <ul>
                <li>React</li>
                <li>Firebase</li>
                <li>Pizza-dog</li>
            </ul>
            <a href="src/components/projects/ProjectItem#">go see</a>
        </div>
    );
}

export default ProjectItem;