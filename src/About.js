import React from 'react';
import FadeSectionRight from './FadeSectionRight';
import FadeSectionUp from './FadeSectionUp';
import FadeSectionIn from './FadeSectionIn';
import Navbar from './Navbar';
import beach from './images/beach.gif'
import './About.css';
const About = props => {
    let hourOfDay = new Date().getHours();
    let greeting;

    if(hourOfDay < 12) {
        greeting = 'Good morning! \u26C5';
    } else if(hourOfDay >= 12 && hourOfDay < 17) {
        greeting = 'Good afternoon! \uD83C\uDF1E';
    } else if(hourOfDay >= 17) {
        greeting = 'Good evening! \uD83C\uDF1C';
    }

    return(
        <div className='about-container'>
            <FadeSectionRight>
                <Navbar></Navbar>
            </FadeSectionRight>
            <div className='about-content'>
                <FadeSectionUp>
                <div className='biography'>
                    <div className='bio-text-container'>
                        <div className='about-header'>{greeting}</div>
                        <p>Hello! I'm Nicholas (he/him),  a 2nd year <span style={{color:'#DA2F2F'}}>computer science</span> student at USC.</p>
                        <p style={{marginTop: '3em'}}>Among the many fields out there, I'm strongly passionate about <span style={{color:'#598DF2'}}>web development</span> and just recently discovered
                        a love for <span style={{color:'#5E52E4'}}>human-centered product design</span>.&nbsp;&nbsp;I'm extremely fascinated with the creative agency I get to have in 
                        these areas to solve problems, whether they be in the ideation or engineering process.</p>
                        <p style={{marginTop: '3em'}}>The web development tools I use for most of my projects surround my enjoyment of <span style={{color:'#FFFFFF'}}>React</span>, i.e., any tech stack with a 
                        React front end.&nbsp;&nbsp;I'm most familiar with the MERN stack.
                        </p>
                        <p style={{marginTop: '3em'}}>When I'm not bombarded by school work, I try to take full advantage of these years of young adulthood! <br/>
                        I'm constantly scouting out new foodie spots with my friends, exploring the culture of new cities, and visting the beach at night. &#127776;
                        Video games and music are also a core part of my leisure time!
                        </p>
                        <p style= {{marginTop:'3em'}}>Right now, I'm working with a small team of developers on <span style={{color:'#FFFFFF'}}>Pando</span>, 
                        a nationwide health resources map.</p>
                        <p style={{marginTop: '3em'}}>If you've read this far, here's a music artist you MUST listen to:&nbsp;&nbsp;
                        <a href="https://open.spotify.com/artist/7vNNmjV14SKQzlQAEg0BXP" target='_blank' rel="noreferrer">Jean Dawson</a>. 
                        <br/> Seriously, he's my favorite artist of all time.</p>
                    </div>
                    <FadeSectionIn className='bio-image-container'>
                        <img className='bio-image' src={beach} alt='Gif on the beach'></img>
                    </FadeSectionIn>
                </div>
                </FadeSectionUp>
            </div>
        </div>
    );
}

export default About;