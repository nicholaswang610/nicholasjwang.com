import React from 'react';
import Navbar from './Navbar';
import FadeSectionRight from './FadeSectionRight';
import FadeSectionIn from './FadeSectionUp';
import popinion from './images/popinion-cover.png';
import './Work.css';
import './Projects.css';

const Popinion = (props) => {
    window.scrollTo(0,0);
    return(
        <div className='work-container'>
            <FadeSectionRight>
                <Navbar></Navbar>
            </FadeSectionRight>
            <div className='content'>
                <FadeSectionIn>
                    <div className='project-content'>
                        <div style={{width:'88%', fontSize:'36px', marginBottom: '0.5em'}}>Popinion</div>
                        <img className='popinion-cover' src={popinion}></img>
                    </div>
                </FadeSectionIn>
                <FadeSectionIn>
                    <div className='what-i-did'>
                        <div className='header'>What I Did</div>
                        <div className='text'>Around the world, <span style={{fontWeight:'500', color:'white'}}>over 463 minutes</span> of media are consumed as a daily average.  
                            That’s <span style={{fontWeight:'500', color:'white'}}>more than 7.5 hours</span>.  The most commonly shared hobbies exist over 
                            <span style={{fontWeight:'500', color:'white'}}> movies, video games, music, and books</span>.  
                            Over the summer, I created a website to connect people through the products which they feel strongly about.</div>
                    </div>
                </FadeSectionIn>
            </div>
            
        </div>
    )
}

export default Popinion;