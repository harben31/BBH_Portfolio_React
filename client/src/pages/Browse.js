import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import ProjectContainer from '../components/ProjectContainer';
import LargeProjPage from '../components/LargeProjPage';

import API from '../utils/API';

//Prob have a 'projects' in the 'page' folder. Using router to direct there and maybe the 'in picture view(?)' thing.
//at least be able to use router to get to a page with only one project at a time on it. 
//use search and state to be able to search by technologies.
//Home page is about with pic and bio click to land on page with 6 best projects in mini form
//search page seperate? Browse page w/ whole db of projects?

const Browse = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState([]);
    const [manyOneToggle, setManyOneToggle] = useState(0);
    
    useEffect(() => {
        handleLoadProjects();
    }, []);
    
    const handleLoadProjects = () => {
        API.getProjects()
            .then((res) => {
                console.log('API CALAL', res.data);
                setProjects(res.data);
                setFilter(res.data);
            })
            .catch((err) => console.log(err));
    };


    const handleFilter = event => {
        const filterValue = event.target.value.trim();
        // console.log(filterValue);
        const filterProjVar = projects.filter(( proj ) => {
            let projValue = Object.values(proj).join('').toLowerCase();
            return projValue.indexOf(filterValue.toLowerCase()) !== -1;
        });
        setFilter(filterProjVar);
    };

    // const handleSmCardClick = () => {
    //     setManyOneToggle(1);
    // };

    return(
        <div>
            <Header/>
            {!manyOneToggle ? 
                <>
                    <Search handleFilter={handleFilter} />
                    <ProjectContainer 
                        projects={filter}
                        // handleSmCardClick={handleSmCardClick}
                    />
                </>
                : 
                <LargeProjPage projects={projects}/>
            }
            {/* <Search handleFilter={handleFilter} />
            <ProjectContainer projects={filter}/> */}
            <Footer/>
        </div>
    );
};

export default Browse;