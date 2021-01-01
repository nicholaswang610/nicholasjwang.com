import {React} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import Footer from './Footer';
import './Navbar.css';

const Navbar = (props) => {
    const params = props.match.url.split('/');
    console.log(params);
    switch(params[1]) {
        case '' :
            return(
                <div className='navbar'>
                    <div className='navbar-items'>
                        <NavLink exact to='/' className='logo'>nw</NavLink>
                        <div className='navlinks'>
                            <NavLink exact to='/' className='navlink'>work</NavLink>
                            <NavLink exact to='/about' className='navlink'>about</NavLink>
                            <a href='https://drive.google.com/file/d/18hofa9_fnNGYDm5SaP0nXMFCR1DgyCqi/view?usp=sharing' target='_blank' rel="noreferrer" className='navlink'>resume</a>
                            <NavLink exact to='/leisure' className='navlink'>leisure</NavLink>
                        </div>
                        <Footer/>
                    </div>
                    
                </div>
            );
        case 'popinion':
            return(
                <div className='navbar'>
                    <div className='project-navbar-items'>
                        <NavLink exact to ='/' className='navlink'>&lt; back</NavLink>
                        <div className='navlinks'>
                            <div className='project-description'><p>role </p>
                                <div>developer, designer</div>
                            </div>
                            <div className='project-description'><p>timeline </p>
                                <div>2 months</div>
                            </div>
                            <div className='project-description'><p>team </p>
                                <div>individual</div>
                            </div>
                            <div className='project-description'><p>tools </p>
                                <div>figma, react, express, node, mysql</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case 'about':
            return(
                <div className='navbar'>
                    <div className='navbar-items'>
                        <NavLink exact to='/' className='navlink'>&lt; back</NavLink>
                        <div className='navlinks'>
                            <NavLink exact to='/' className='navlink'>work</NavLink>
                            <NavLink exact to='/about' className='navlink'>about</NavLink>
                            <a href='https://drive.google.com/file/d/18hofa9_fnNGYDm5SaP0nXMFCR1DgyCqi/view?usp=sharing' target='_blank' rel="noreferrer" className='navlink'>resume</a>
                            <NavLink exact to='/leisure' className='navlink'>leisure</NavLink>
                        </div>
                        <Footer/>
                    </div>        
                </div>
            );
        default:
            return(
                <div></div>
            )
    }
}

export default withRouter(Navbar);