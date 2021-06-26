import React from 'react';
import './style.css';

//whole card link? granular links: tech, names? or leave that to the single project page?
const ProjectCard = (props) => {
    const project=props.project
    console.log('projectcard',props);
    return (
        <div className='projectCard'>
            <div id='imageStandIn'>
                <div className='cardHeader'>
                    <h2>{project.title}</h2>
                </div>
                <div className='cardInfo'>
                    <p>{project.description}</p>
                    <p>Created using: {project.technologies}</p>
                    <ul>
                        {/* {props.collaborators.map(collaborators => {
                            // <p><a href={collaborators.gitHubUrl}>{collaborators.name}</a></p>
                        })} */}
                    </ul>
                </div>
            </div>   
        </div>
    );
};

export default ProjectCard;