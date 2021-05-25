import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div id='main'>
            <Navbar/>
            <div className='name'>
                <h1><span>Making the need</span> Meet the work</h1>
                <p>A revolutionizing aspect of the recruiting industry</p>
            </div>
        </div>
    )
}

export default Header
