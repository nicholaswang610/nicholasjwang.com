import React from 'react';
import {NavLink} from 'react-router-dom';
import './Work.css';
import Navbar from './Navbar';
import FadeSectionUp from './FadeSectionUp';
import FadeSectionRight from './FadeSectionRight';
import pando from './images/screenshots/pando-mock.png';
import popinion from './images/screenshots/popinion.png';
import pokemon1 from './images/screenshots/pokemon1.png';
import pokemon2 from './images/screenshots/pokemon2.png';
import scrabble from './images/screenshots/scrabble.png';
import plots1 from './images/screenshots/plots1.png';
import plots2 from './images/screenshots/plots2.png';
import {ReactComponent as Slider} from './images/slider.svg';
import greenblur from './images/blurs/greenblur.png';
import pinkblur from './images/blurs/pinkblur.png';
import whiteblur from './images/blurs/whiteblur.png';
import redblur from './images/blurs/redblur.png';
import blueblur from './images/blurs/blueblur.png';
import purpleblur from './images/blurs/purpleblur.png';


const Work = (props) => {
    window.scrollTo(0, 0);
    return(
            <div className='work-container'>
                <FadeSectionRight>
                    <Navbar/>
                </FadeSectionRight>
                <div className='content'>
                    <FadeSectionUp>
                        <div className='intro-container'>
                            <div className='intro'>
                                <p>
                                    Hey! My name is Nicholas Wang. &#127877;
                                </p>
                                <div className='intro-desc'>
                                    I'm a <span style={{color:'#DA2F2F'}}>computer science</span> student and <span style={{color:'#598DF2'}}>web developer</span>.
                                </div>
                                <a href='mailto: njwang@usc.edu'>
                                    <div className='work-availability'>
                                        <div className='work-email'>njwang@usc.edu</div>
                                        <Slider className='slider'/>
                                        <p>Available for work</p>
                                    </div>
                                </a>
                                
                            </div>
                        </div>
                    </FadeSectionUp>
                    <div className='projects'>
                        <FadeSectionUp>
                        <p>Projects</p>
                        <div className='pando'>
                            <div className='pando-text'>
                                <p className='num'>01</p>
                                <div className='horizontal'></div>
                                <p>Pando</p>
                                <p className='pando-desc'>A health resources map in response to the COVID-19 pandemic.</p>
                            </div>
                            <div className='pando-images'>
                                <img className='greenblur' src={greenblur} alt='green blur'></img>
                                <img src={pando} className='pando-screenshot' alt='Screenshot of Pando'></img>
                                <div className='construction'>Under Construction</div>
                            </div>
                        </div>
                        </FadeSectionUp>
                        <FadeSectionUp>
                        <div className='popinion-and-pokemon'>
                            <NavLink exact to='/popinion' className='popinion'>
                                <div className='popinion-text'>
                                    <p className='num'>02</p>
                                    <div className='horizontal'></div>
                                    <p>Popinion</p>
                                    <p className='popinion-desc'>A social review site for video game, music, film, and book hobbyists.</p>
                                </div>
                                <div className='popinion-images'>
                                    <img className='pinkblur' src={pinkblur} alt='pink blur'></img>
                                    <img className='popinion-screenshot' src={popinion} alt='Screenshot of Popinion'></img>
                                </div>
                            </NavLink>
                            <div className='pokemon'>
                                <div className='pokemon-text'>
                                    <p className='num'>03</p>
                                    <div className='horizontal'></div>
                                    <p>Poké-Builder</p>
                                    <p className='pokemon-desc'>A team building app for Pokémon Trainers.</p>
                                </div>
                                <div className='pokemon-images'>
                                    <img className='whiteblur' src={whiteblur} alt='white blur'></img>
                                    <img className='redblur' src={redblur} alt='red blur'></img>
                                    <div className='pokemon-screenshots' >
                                        <img src={pokemon1} alt='Screenshot of Poke-Builder(1)'></img>
                                        <img src ={pokemon2} alt='Screenshot of Poke-Builder(2)'></img>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        </FadeSectionUp>
                        <FadeSectionUp>
                        <div className='scrabble-and-plots'>
                            <div className='scrabble'>
                                <div className='scrabble-text'>
                                    <p className='num'>04</p>
                                    <div className='horizontal'></div>
                                    <p>Scrabble</p>
                                    <p className='scrabble-desc'>Graphical implementation of Scrabble for the terminal, with AI implementation.</p>
                                </div>
                                <div className='scrabble-images'>
                                    <img className='blueblur' src={blueblur} alt='blue blur'></img>
                                    <img className='scrabble-screenshot' src={scrabble} alt='Screenshot of Scrabble'></img>
                                </div>
                                
                            </div>
                            <div className='plots'>
                                <div className='plots-text'>
                                    <p className='num'>05</p>
                                    <div className='horizontal'></div>
                                    <p>WhatsPlots</p>
                                    <p className='plots-desc'>The Tinder of making hangout plans with friends or strangers (both in-person and virtual)!</p>
                                </div>
                                <div className='plots-images'>
                                    <div className='construction'>Under Construction</div>
                                    <img className='purpleblur' src={purpleblur} alt='purple blur'></img>
                                    <div className='plots-screenshots'>
                                        <img src={plots1} alt='Screenshot of WhatsPlots(1)'></img>
                                        <img src={plots2} alt='Screenshot of WhatsPlots(2)'></img>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        </FadeSectionUp>
                    </div>
                    <FadeSectionUp>
                        <div className='connect'>
                            Want to connect?  <div>Email me at njwang@usc.edu.</div>
                        </div>
                    </FadeSectionUp>
                </div>
            </div>
    );
}

export default Work;