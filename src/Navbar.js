import {React} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
    return(
        <div className='navbar'>
            <div className='logo'>nw</div>
            <div className='navlinks'>
                <NavLink exact to='/' className='link'>work</NavLink>
                <NavLink exact to='/about' className='link'>about</NavLink>
                <NavLink exact to='/resume' className='link'>resume</NavLink>
                <NavLink exact to='/leisure' className='link'>leisure</NavLink>
            </div>
        </div>
    );
}

export default Navbar;