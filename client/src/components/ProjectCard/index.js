/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

//whole card link? granular links: tech, names? or leave that to the single project page?
const ProjectCard = (props) => {
    const project=props.project;
    console.log(project, 'props line 8 project card');
    return (
        <div className='projectCard' >
            <div className='image'
                style={{ backgroundImage: `url(/assets/images/${project.screenShot})`}} >
            </div>   
            <div className='cardHeader' data-projId={props._id} onClick={props.handleSmCardClick} >
                <h2 className='cardTitle' >{project.title}</h2>
            </div>
            <div className='cardInfo' >
                <p className='description infoBits' >{project.description}</p>
                <p className='tech infoBits' >Created using: {project.technology}</p>
                <p className='deployedLink infoBits'><a href={project.deployedUrl}>Deployed App</a></p>
                <p className='repoLink infoBits'><a href={project.repoUrl}>Repo</a></p>
                <ul className='collab infoBits'>
                    <p>Authors:</p> infoBits
                    {project.collaborators.map(collaborators => [
                        <p key={collaborators.name}><a href={collaborators.gitHubUrl}>{collaborators.name}</a></p>
                    ]
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ProjectCard;