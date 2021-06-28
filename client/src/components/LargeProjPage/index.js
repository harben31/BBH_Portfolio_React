import React from 'react';
import './style.css';

const LargeProjPage = (props) => {
    return(
        <section id='largeProjCard'>
            <div id='imagePlaceHolder'>
                <header id='largeProjHeader'>{props.title}</header>
                <div id='infoSection'>
                    <p>Long description.</p>
                    <p>Tech</p>
                    <p>collabs</p>
                    <p>collabs</p>
                    <p>collabs</p>
                    <p>Repo</p>
                    <p>deployed</p>
                </div>
            </div>
        </section>
    );
};

export default LargeProjPage;