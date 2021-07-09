import React from 'react';
import './style.css';

const MessageModal = (props) => {
    return (
        <div  className='modalWrap' name='messageForm'>
            <form className='messageForm' action='mailto:harben31@gmail.com'>
                <input className='nameArea textInputs' type='text' placeholder='Your Name'/>
                <input className='emailArea textInputs' type='email' placeholder='Your Email'/>
                <textarea className='messageArea textInputs' type='text' placeholder='Your Message' />
                <button className='formBtn' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default MessageModal;