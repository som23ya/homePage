import React, {useState } from 'react'
import logo from '../images/logo.jpg';

function Navbar() {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href='#' className='logo'>
                <img src={logo} alt=''/>
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <span><h3>VISTAR</h3></span>
            <ul className='menu'>
                <li><a href='#main'>Home</a></li>
                <li><a href='#features'>Features</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#'>Search/Post Job</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
