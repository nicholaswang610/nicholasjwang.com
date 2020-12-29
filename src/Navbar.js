import {React} from 'react';
import {NavLink} from 'react-router-dom';
import Footer from './Footer';
import './Navbar.css';

const Navbar = (props) => {
    return(
        <div className='navbar'>
            <div className='navbar-items'>
                <NavLink exact to='/' className='logo'>nw</NavLink>
                <div className='navlinks'>
                    <NavLink exact to='/' className='navlink'>work</NavLink>
                    <NavLink exact to='/about' className='navlink'>about</NavLink>
                    <NavLink exact to='/resume' className='navlink'>resume</NavLink>
                    <NavLink exact to='/leisure' className='navlink'>leisure</NavLink>
                </div>
                <Footer/>
            </div>
            
        </div>
    );
}

export default Navbar;