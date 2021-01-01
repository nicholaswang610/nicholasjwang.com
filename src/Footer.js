import React from 'react';
import './Footer.css';
const Footer = (props) => {
    return(
        <div className='footer'>
            <div className='links'>
                <a href='mailto: njwang@usc.edu' rel='noreferrer'>email</a>
                <a href='https://github.com/nicholaswang610' target='_blank' rel='noreferrer'>github</a>
                <a href='https://www.linkedin.com/in/nicholaswang610/' target='_blank' rel='noreferrer'>linkedin</a>
            </div>
            <div className='created-by'>
                <div>© 2020</div> 
                <div>Nicholas W.</div>
            </div>
        </div>
    );
}

export default Footer;