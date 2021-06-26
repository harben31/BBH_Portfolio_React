import React from 'react';
import ProjectCard from '../ProjectCard';
import './style.css';

const ProjectContainer = (props) => {
    console.log('ProjectContainer props', props);
    return(
        <div id='projectContainer'>
            {props.projects.map(project => [
                 <ProjectCard
                 project={project}/>
            ])}
                {/* <ProjectCard
                project={props}/> */}
           
        </div>
    );
};

export default ProjectContainer;