
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png';


function Navbar() {
    return (
        <nav className='w-full flex justify-center relative'>
            <div className='absolute z-20 flex mt-2 items-center gap-5 justify-center max-w-4xl mx-auto text-white'>
                <ul className='flex gap-5'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='about'>About</Link></li>
                    <li><Link to='portfolio'>Portfolio</Link></li>
                </ul>
                <div className='max-w-[150px]'><img src={Logo} alt="logo" /></div>
                <ul className='flex gap-5'>
                    <li><Link to='contact'>Contact</Link></li>
                    <li><Link to='blog'>Blog</Link></li>
                    <li><Link to='learn'>Learn</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar