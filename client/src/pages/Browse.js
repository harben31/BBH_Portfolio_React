import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import ProjectContainer from '../components/ProjectContainer';
// import LargeProjPage from '../components/LargeProjPage';
// import MessageModal from '../components/MessageModal';

import API from '../utils/API';

const Browse = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState([]);
    // const [modalToggle, setModalToggle] = useState(0);
    // const [manyOneToggle, setManyOneToggle] = useState(0);
    
    useEffect(() => {
        handleLoadProjects();
    }, []);
    
    const handleLoadProjects = () => {
        API.getProjects()
            .then((res) => {
                setProjects(res.data);
                setFilter(res.data);
            })
            .catch((err) => console.log(err));
    };


    const handleFilter = event => {
        const filterValue = event.target.value.trim();
        const filterProjVar = projects.filter(( proj ) => {
            let projValue = Object.values(proj).join('').toLowerCase();
            return projValue.indexOf(filterValue.toLowerCase()) !== -1;
        });
        setFilter(filterProjVar);
    };

    // const handleModalToggle = (e) => {
    //     console.log('HANDLETOGGLE', e.target.name);
    //     e.preventDefault();
    //     console.log(modalToggle);
    //     if(!modalToggle){
    //         setModalToggle(1);
    //     } else if (modalToggle && e.target.name !== 'messageForm'){
    //         setModalToggle(0);
    //     }
    // };
    // const handleSmCardClick = () => {
    //     setManyOneToggle(1);
    // };

    return(
        <div>
            {/* {!modalToggle ? 
                <MessageModal 
                    // handleModalToggle={handleModalToggle}
                /> :
                <>
                </>
            } */}
            
            <Header/>
            <Search handleFilter={handleFilter} />
            <ProjectContainer 
                projects={filter}
                // handleSmCardClick={handleSmCardClick}
            />
            <Footer
                // handleModalToggle={handleModalToggle}
            />
        </div>
    );
};

export default Browse;