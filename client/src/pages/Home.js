import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Search from '../Search';
import ProjectContainer from '../ProjectContainer';

import API from '../utils/API'

//Prob have a 'projects' in the 'page' folder. Using router to direct there and maybe the 'in picture view(?)' thing.
//at least be able to use router to get to a page with only one project at a time on it. 
//use search and state to be able to search by technologies.
//build database with lotsa projects
//Home page is about with pic and bio click to land on page with 6 best projects in mini form
//search page seperate? Browse page w/ whole db of projects?

const Home = () => {
    return(
        <div>
            <Header/>
            <Search/>
            <ProjectContainer/>
            <Footer/>
        </div>
    );
};

export default Home;