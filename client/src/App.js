import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Browse from './pages/Browse';
import Intro from './pages/Intro';

function App() {
    return (
        <Router>
            <div>
                <Route exact path='/browse'>
                    <Browse />
                </Route>
                <Route exact path='/'>
                    <Intro />
                </Route> 
            </div>
        </Router>
    );
}


export default App;
