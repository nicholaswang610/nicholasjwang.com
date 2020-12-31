import React from 'react';
import Navbar from './Navbar';
import FadeSectionRight from './FadeSectionRight';
import FadeSectionUp from './FadeSectionUp';
import FadeSectionIn from './FadeSectionIn';
import popinion from './images/popinion-cover.png';
import timeline from './images/timeline.png';
import firstDraft from './images/first-prototype.png';
import redesign from './images/redesign.png';
import finalSolution from './images/final-solution.png';
import mockupSpread from './images/mockup-spread.png';
import './Projects.css';

const Popinion = (props) => {
    window.scrollTo(0,0);
    return(
        <div className='project-container'>
            <FadeSectionRight>
                <Navbar></Navbar>
            </FadeSectionRight>
            <div className='content'>
                <FadeSectionUp>
                    <div className='project-content'>
                        <div style={{width:'88%', fontSize:'36px', marginBottom: '0.5em'}}>Popinion</div>
                        <img className='popinion-cover' src={popinion}></img>
                    </div>
                </FadeSectionUp>
                <FadeSectionUp>
                    <div className='what-i-did'>
                        <div className='header'>What I Did</div>
                        <div className='text'>Around the world, <span style={{fontWeight:'500', color:'white'}}>over 463 minutes</span> of media are consumed as a daily average.  
                            That’s <span style={{fontWeight:'500', color:'white'}}>more than 7.5 hours</span>.  The most commonly shared hobbies exist over 
                            <span style={{fontWeight:'500', color:'white'}}> movies, video games, music, and books</span>.  
                            Over the summer, I created a website to <span style={{fontWeight:'500', color:'white'}}>connect</span> people through the products 
                            which they feel strongly about.  I also drafted a redesign for the site, to be implemented in the near future.    
                        </div>
                    </div>
                </FadeSectionUp>
                <FadeSectionUp>
                    <div className='timeline'>
                        <div className='header'><span className='number'>01</span> Timeline</div>
                        <img src={timeline}></img>
                    </div>
                </FadeSectionUp>
                <FadeSectionUp>
                    <div className='first-draft'>
                        <div className='header'><span className='number'>02</span> First prototype, flaws and painpoints</div>
                        <img src={firstDraft}></img>
                    </div>
                </FadeSectionUp>
                <FadeSectionUp>
                    <div className='redesign'>
                        <div className='header'><span className='number'>03</span> Redesign</div>
                        <img src={redesign}></img>
                    </div>
                </FadeSectionUp>
                <FadeSectionIn>
                    <div className='keywords'>
                        <div className='modernize'>Modernize <span className='subtext'>the design</span></div>
                        <div className='personalize'>Personalize <span className='subtext'>the experience</span></div>
                        <div className='incentivize'>Incentivize <span className='subtext'>the user</span></div>
                    </div>
                </FadeSectionIn>
                <FadeSectionUp>
                    <div className='final-solution'>
                        <div className='header'><span className='number'>04</span> Final Solution</div>
                        <img src={finalSolution}></img>
                    </div>
                </FadeSectionUp>
                <FadeSectionUp>
                    <div className='thanks-for-reading'>
                        <div className='header'><span className='number'>05</span> Thanks for reading!</div>
                        <img src={mockupSpread}></img>
                    </div>
                </FadeSectionUp>
            </div>
            
        </div>
    )
}

export default Popinion;