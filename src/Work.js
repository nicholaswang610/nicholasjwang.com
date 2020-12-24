import React from 'react';
import './Work.css';
import Navbar from './Navbar';
import tools from './tools.png';
import pando from './pando-mock.png';
import popinion from './popinion.png';
import greenblur from './green-blur.png';
import pinkblur1 from './pink-blur-1.png';
import pinkblur2 from './pink-blur-2.png';

const Work = (props) => {
    return(
        <div className='work-container'>
            <Navbar/>
            <div className='intro-container'>
                <div className='intro'>
                    <p>
                        Hey! My name is Nicholas Wang.
                    </p>
                    <div className='intro-desc-1'>
                        I'm a <span style={{color:'#DA2F2F'}}>computer science</span> student
                    </div>
                    <div className='intro-desc-2'>
                        and <span style={{color:'#598DF2'}}>web developer</span>.
                    </div>
                </div>
                <img className='tools' src={tools}></img>
            </div>
            <div className='projects'>
                <p>Projects</p>
                <div className='pando'>
                    <div className='pando-text'>
                        <p>Pando</p>
                        <p className='pando-desc'>A health resources map in response to the COVID-19 pandemic.</p>
                    </div>
                    <div className='pando-images'>
                        <div className='construction'>Under Construction</div>
                        <img className='greenblur' src={greenblur}></img>
                        <img src={pando}></img>
                    </div>
                </div>
                <div className='popinion-and-pokemon'>
                    <div className='popinion'>
                        <div className='popinion-text'>
                            <p>Popinion</p>
                            <p className='popinion-desc'>A social review site for video game, music, film, and book hobbyists</p>
                        </div>
                        <div className='popinion-images'>
                            <img className='pinkblur pinkblur-1' src={pinkblur1}></img>
                            <img className='pinkblur pinkblur-2' src={pinkblur2}></img>
                            <img src={popinion}></img>
                        </div>
                    </div>
                    <div className='pokemon'>
                        
                    </div>
                </div>
                <div className='footer'></div>
            </div>
        </div>
    );
}

export default Work;