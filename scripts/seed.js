const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/benProjectDb'
);

const seedProject = [
    {
        screenShot: 'WhatSong.png',
        repoUrl: 'https://github.com/harben31/Whats-Song-is-That-the-app',
        deployedUrl: 'https://harben31.github.io/Whats-Song-is-That-the-app/',
        title: 'What-Song-is-That? the app',
        description: 'Music application that gives you the ability to search for music by: Lyrics, Artist, Song Title, or Album. Using the Spotify and Musixmatch APIs. ',
        technology: 'HTML, CSS, JavaScript',
        collaborators: [{
            name: 'Benjamin Harris',
            gitHubUrl: 'https://github.com/harben31'
        },
        {
            name: 'Asia Alnahi',
            gitHubUrl: 'https://github.com/asia-codeing'
        },
        {
            name: 'Cassandra Cunningham',
            gitHubUrl: 'https://github.com/cmcunningham27'
        },
        {
            name: 'Erin Blaize',
            gitHubUrl: 'https://github.com/eeblaize2'
        }]
    },
    {
        screenShot: 'MoiMeRies.png',
        repoUrl: 'https://github.com/harben31/moi-me-ries',
        deployedUrl: 'https://blooming-ocean-65385.herokuapp.com/',
        title: 'Moi-Me-Ries',
        description: 'Moi-Me-Ries is a place for users to add goals they would like to accomplish in life. As the user meets those goals they can cross them off the list and add a commemorative photo and journal entry.',
        technology: 'Node.js, MongoDB, Mongoose.js, Express.js, HandleBars.js, Bcrypt.js, dotenv.js, express-fileupload.js, Javascript, HTML, CSS, Bootstrap',
        collaborators: [{
            name: 'Benjamin Harris',
            gitHubUrl: 'https://github.com/harben31'
        },
        {
            name: 'Asia Alnahi',
            gitHubUrl: 'https://github.com/asia-codeing'
        },
        {
            name: 'Cassandra Cunningham',
            gitHubUrl: 'https://github.com/cmcunningham27'
        },
        {
            name: 'Erin Blaize',
            gitHubUrl: 'https://github.com/eeblaize2'
        }]
    },
    {
        screenShot: 'OhMyBlog.png',
        repoUrl: 'https://github.com/harben31/Oh-My-Blog',
        deployedUrl: 'https://arcane-escarpment-20008.herokuapp.com/',
        title: 'Oh-My-Blog!',
        description: 'An app for users to view and create posts and comments presumably about tech.',
        technology: 'Node.js, Express.js, Sequelize.js, MySql2, Dotenv.js, Handlebars.js, Bcrypt.js, CSS, JavaScript',
        collaborators: [{
            name: 'Benjamin Harris',
            gitHubUrl: 'https://github.com/harben31'
        }]
    },
    {
        screenShot: 'EmployeeDir.png',
        repoUrl: 'https://github.com/harben31/ReactEmployeeDirectory',
        deployedUrl: 'https://rocky-tundra-10672.herokuapp.com/',
        title: 'Sortable Employee Directory',
        description: 'An app that uses React class components to render and sort a list of employees along with their information.',
        technology: 'React, CSS, JavaScript, Axios.js',
        collaborators: [{
            name: 'Benjamin Harris',
            gitHubUrl: 'https://github.com/harben31'
        }]
    },
    {
        screenShot: 'WeatherDash.png',
        repoUrl: 'https://github.com/harben31/Weather-Dashboard',
        deployedUrl: 'https://harben31.github.io/Weather-Dashboard/',
        title: 'Travel Weather Dashboard',
        description: 'An app where a user can search the weather in a city and get day of forecast along with a 5-day forcast using the Open Weather API.',
        technology: 'JavaScript, CSS, HTML',
        collaborators: [{
            name: 'Benjamin Harris',
            gitHubUrl: 'https://github.com/harben31'
        }]
    },
    // {
    //     screenShot: '',
    //     repoUrl: 'https://github.com/harben31/bbh_homework_wk9',
    //     deployedUrl: '',
    //     title: 'README creator',
    //     description: 'A CLI app for users to create a professional README file. Once initiated the user will answer several questions and a README file is created.',
    //     technology: 'Node.js, JavaScript, CSS, HTML',
    //     collaborators: [{
    //         name: 'Benjamin Harris',
    //         gitHubUrl: 'https://github.com/harben31'
    //     }]
    // },
    // {
    //     screenShot: '',
    //     repoUrl: 'https://github.com/harben31/BudgetTrackerPWA',
    //     deployedUrl: 'https://damp-earth-57810.herokuapp.com/',
    //     title: 'On/Off Line Budget Tracker',
    //     description: 'An app where the user can record transactions and keep track of a budget. The app uses a Service Worker and Caching to allow the user to continue to use the app with limited or no online connection. (Front end written by Trilogy Education Services)',
    //     technology: 'JavaScript, CSS, HTML, IndexedDB',
    //     collaborators: [{
    //         name: 'Benjamin Harris',
    //         gitHubUrl: 'https://github.com/harben31'
    //     }]
    // },
    {
        screenShot: 'WorkoutTracker.png',
        repoUrl: 'https://github.com/harben31/WorkoutTracker',
        deployedUrl: 'https://pure-fortress-62212.herokuapp.com/?id=60b7efc8aa7d5d0016e73aea',
        title: 'Fitness Tracker',
        description: 'A record keeping app for the avid fitness buff. The user can creat new or continue workouts by adding new exercises either cardio or resistance. The users stats are kept and displayed in chart and text form. (Front end written by Trilogy Education Services)',
        technology: 'JavaScript, CSS, HTML, MongoDb, Mongoose.js, Chart.js',
        collaborators: [{
            name: 'Benjamin Harris',
            gitHubUrl: 'https://github.com/harben31'
        }]
    },
    // {
    //     screenShot: '',
    //     repoUrl: 'https://github.com/harben31/Benjamins-Portfolio',
    //     deployedUrl: 'https://harben31.github.io/Benjamins-Portfolio/',
    //     title: 'Portfolio v1.0',
    //     description: 'The original. Where it all started. My first portfolio with the most basic of adornment.',
    //     technology: 'CSS, HTML',
    //     collaborators: [{
    //         name: 'Benjamin Harris',
    //         gitHubUrl: 'https://github.com/harben31'
    //     }]
    // },
    // {
    // 	screenShot: '',
    // 	repoUrl: '',
    // 	deployedUrl: '',
    // 	title: '',
    // 	description: '',
    // 	technology: 'JavaScript, CSS, HTML',
    // 	collaborators: [{
    // 		name: 'Benjamin Harris',
    // 		gitHubUrl: 'https://github.com/harben31'
    // 	}]
    // },
];

db.Project
    .remove({})
    .then(() => db.Project.collection.insertMany(seedProject))
    .then(data => {
        console.log(data.result.n + ' records inserted');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });