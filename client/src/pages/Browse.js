import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import ProjectContainer from '../components/ProjectContainer';

import API from '../utils/API';

//Prob have a 'projects' in the 'page' folder. Using router to direct there and maybe the 'in picture view(?)' thing.
//at least be able to use router to get to a page with only one project at a time on it. 
//use search and state to be able to search by technologies.
//Home page is about with pic and bio click to land on page with 6 best projects in mini form
//search page seperate? Browse page w/ whole db of projects?

const Browse = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState([]);
    
    useEffect(() => {
        loadProjects();
    }, []);
    
    // let filterValue;

    // useEffect(() => {
    //     filterValue = filter
    //     //need to set value to 
    // }, [filter])


    const handleFilter = event => {
        const filterValue = event.target.value.trim();
        console.log(filterValue);
        const filterProjVar = projects.filter(( proj ) => {
            let projValue = Object.values(proj).join('').toLowerCase();
            return projValue.indexOf(filterValue.toLowerCase()) !== -1;
        })
        console.log(filterProjVar);
        //resetting projects state eachtime so on subsequent searches it is only searching the smaller data set
        setFilter(filterProjVar);
    }

    // useEffect(() => {
    //     const filterProjVar = projects.filter(( proj ) => {
    //         let projValue = Object.values(proj).values.join('').toLowerCase();
    //         return projValue.indexOf(filterValue.toLowerCase()) !== -1;
    //     })
    // }, [filter])

    const loadProjects = () => {
        console.log('logged')
        API.getProjects()
            .then((res) => {
                setProjects(res.data);
                setFilter(res.data);
            })
            .catch((err) => console.log(err))
    };


    return(
        <div>
            <Header/>
            <Search handleFilter={handleFilter} />
            <ProjectContainer projects={filter}/>
            <Footer/>
        </div>
    );
};

export default Browse;