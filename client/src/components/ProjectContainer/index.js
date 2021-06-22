import React from 'react';
import ProjectCard from '../ProjectCard';
import './style.css';

const ProjectContainer = () => {
    return(
        <div id='projectContainer'>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/> 
            <ProjectCard/> 
            <ProjectCard/> 
        </div>
    );
};

export default ProjectContainer;