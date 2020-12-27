import React from 'react';
import './Work.css';
import Navbar from './Navbar';
import tools from './images/tools.png';
import pando from './images/screenshots/pando-mock.png';
import popinion from './images/screenshots/popinion.png';
import pokemon1 from './images/screenshots/pokemon1.png';
import pokemon2 from './images/screenshots/pokemon2.png';
import scrabble from './images/screenshots/scrabble.png';
import greenblur from './images/blurs/greenblur.png';
import pinkblur from './images/blurs/pinkblur.png';
import whiteblur from './images/blurs/whiteblur.png';
import redblur from './images/blurs/redblur.png';
import blueblur from './images/blurs/blueblur.png';

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
                        <img className='greenblur' src={greenblur}></img>
                        <img src={pando} className='pando-screenshot'></img>
                        <div className='construction'>Under Construction</div>
                    </div>
                </div>
                <div className='popinion-and-pokemon'>
                    <div className='popinion'>
                        <div className='popinion-text'>
                            <p>Popinion</p>
                            <p className='popinion-desc'>A social review site for video game, music, film, and book hobbyists.</p>
                        </div>
                        <div className='popinion-images'>
                            <img className='pinkblur' src={pinkblur}></img>
                            <img className='popinion-screenshot' src={popinion}></img>
                        </div>
                    </div>
                    <div className='pokemon'>
                        <div className='pokemon-text'>
                            <p>Poké-Builder</p>
                            <p className='pokemon-desc'>A team building app for Pokémon Trainers.</p>
                        </div>
                        <div className='pokemon-images'>
                            <img className='whiteblur' src={whiteblur}></img>
                            <img className='redblur' src={redblur}></img>
                            <div className='pokemon-screenshots'>
                                <img src={pokemon1}></img>
                                <img src ={pokemon2}></img>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='scrabble-and-spotimaps'>
                    <div className='scrabble'>
                        <div className='scrabble-text'>
                            <p>Scrabble</p>
                            <p className='scrabble-desc'>Graphical implementation of Scrabble for the terminal, with AI implementation.</p>
                        </div>
                        <div className='scrabble-images'>
                            <img className='blueblur' src={blueblur}></img>
                            <img className='scrabble-screenshot' src={scrabble}></img>
                        </div>
                        
                    </div>
                    <div className='spotimaps'>

                    </div>
                </div>
                <div className='footer'></div>
            </div>
        </div>
    );
}

export default Work;