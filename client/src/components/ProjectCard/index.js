import React from 'react';
import './style.css';

//whole card link? granular links: tech, names? or leave that to the single project page?
const ProjectCard = (props) => {
    const project=props.project
    return (
        <div className='projectCard' >
            <div className='imageStandIn' >
            </div>   
                <div className='cardHeader' >
                    <h2>{project.title}</h2>
                </div>
                <div className='cardInfo' >
                    <p className='description' >{project.description}</p>
                    <p className='tech' >Created using: {project.technology}</p>
                    <ul>
                        {/* {props.collaborators.map(collaborators => {
                            // <p><a href={collaborators.gitHubUrl}>{collaborators.name}</a></p>
                        })} */}
                    </ul>
                </div>
        </div>
    );
};

export default ProjectCard;