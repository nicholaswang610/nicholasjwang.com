import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = (props) => {
    return(
        <div className='footer'>
            <div className='links'>
                <a href='mailto: njwang@usc.edu'>email</a>
                <a href='https://github.com/nicholaswang610' target='_blank'>github</a>
                <a href='https://www.linkedin.com/in/nicholaswang610/' target='_blank'>linkedin</a>
            </div>
            <div className='created-by'>© 2020 Made by Nicholas Wang</div>
        </div>
    );
}

export default Footer;