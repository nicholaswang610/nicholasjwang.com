import React from 'react';
import './Work.css';
import Navbar from './Navbar';

const Work = (props) => {
    return(
        <div className='work-container'>
            <Navbar/>
            <div className='intro-container'>
                <div className='intro'>
                    <div className='intro-name'>
                        Hey! My name is Nicholas Wang.
                    </div>
                    <div className='intro-desc-1'>
                        I'm a <span style={{color:'#DA2F2F'}}>computer science</span> student
                    </div>
                    <div className='intro-desc-2'>
                        and <span style={{color:'#598DF2'}}>web developer</span>
                    </div>
                </div>
                
            </div>
            <div className='projects'>

            </div>
        </div>
    );
}

export default Work;