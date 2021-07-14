import React from 'react';
import './style.css';

const Footer = (props) => {
    console.log('footer props', props);
    return(
        <footer id='portFoot'>
            <h1>Contact Me!</h1>
            <ul>
                <li>LinkedIn: <a href='https://www.linkedin.com/in/benjamin-harris-81281a2b/'>benjamin-harris-81281a2b/</a></li>
                <li>GitHub: <a href='https://github.com/harben31/'>harben31</a></li>
                <li>Resume: <a href='https://drive.google.com/file/d/1-ytt9_HnkcWfjP9X-u3ENgE5wbtKkL8T/view?usp=sharing'>click here</a></li>
                <li>Email: <a href='mailto:harben31@gmail.com'>harben31@gmail.com</a></li>
                <li>Telephone: <a href='tel:512-815-0281'>(512) 815-0281</a></li>
            </ul>
                {/* <div className='infoForm'>
                    <button className='infoBtn' onClick={props.handleModalToggle}>Leave Me A Message</button>
                </div> */}
        </footer>
    );
};

export default Footer;

