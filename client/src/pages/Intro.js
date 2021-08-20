import React from 'react';
import { Link } from 'react-router-dom';
import './intro.css';

const Intro = () => {
    return(
        <div className='introBack' style={{backgroundImage: 'url(/assets/images/code.jpg'}}>
            <div className='introCard'>
                <h1 className='introCardHeader'>Benjamin Brenneman Harris</h1>
                <aside className='introSideBar'>
                    <img className='introPic' src='/assets/images/profilePic.jpg' alt='Photo of Benjamin smiling.'/>
                    <div className='introBio'>
                        <p>Hello and welcome to my web development portfolio!</p>
                        <p>I am a hospitality professional who is looking for an opportunity in web development. My experience has taught me about team work, leadership, problem solving, communication and so much more. Much of what I have learned over my thirteen plus years in my field I have learned through collaboration with a great team. My skills are always bolstered by listening to and observing others and understanding their methods so I can add them to my repertoire. In my professional life I have always earned a leadership position and have enjoyed passing down the lessons learned to others. I hope to bring this passion for learning and collaboration to my new career in web development.</p>
                    </div>
                </aside>
                <p>I recently received a certificate in full stack web development from the University of Washington. The following page represents the work I completed either on my own or in a group setting through out the program. I used React for the front end in addition to vanilla CSS. The back end uses Node.js, ExpressJS and Mongoose. I built a REST API with the projects I am most proud of. As I complete more work I will add to my dataset to expand this portfolio. </p>
                <Link
                    to={{
                        pathname: '/browse'
                    }}>Thank you for reading! Please take a look at my work! </Link> 
            </div>
        </div>
    );
};

export default Intro;