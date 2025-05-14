
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png';
import DropDown from '../DropDown';
import PortDrop from './PortDrop';


function Navbar() {
    const [onHover, setOnHover] = useState(false);
    const [inHover, setinHover] = useState(false);
    return (
        <nav className='w-full flex justify-center relative'>
            <div className='transition-all absolute z-20 flex mt-2 items-center gap-5 justify-center max-w-4xl mx-auto text-white'>
                <ul className='flex gap-5'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='about'>About</Link></li>
                    <li 
                        onMouseEnter={() => setinHover(true)}
                        onMouseLeave={() => setinHover(false)}
                    ><Link to='portfolio'>
                    Portfolio </Link>
                    {inHover? (<PortDrop />) : ""}
                        </li>
                </ul>
                <div className='max-w-[150px]'><img src={Logo} alt="logo" /></div>
                <ul className='flex gap-5'>
                    <li><Link to='contact'>Contact</Link></li>
                    <li><Link to='blog'>Blog</Link></li>
                    <li
                        onMouseEnter={() => setOnHover(true)}
                        onMouseLeave={() => setOnHover(false)}
                        
                    >
                    Learn
                     {onHover? (<DropDown />) : ""}
                    </li>

                </ul>

            </div>
           
        </nav>
    )
}

export default Navbar