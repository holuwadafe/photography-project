import React from 'react'
import { Link } from 'react-router-dom'
import portrait from '../../Pages/Portrait'

function PortDrop() {
  return (
    <ul className='w-[240px] bg-white absolute text-gray-300 hover:text-black text-black p-6 text-center'>
        <li><Link to="portfolio/portrait">PORTRAIT</Link></li>
        <li><Link>WEDDING</Link></li>
        <li><Link>FASHION</Link></li>
        <li><Link>COMMERCIAL</Link></li>
        <li><Link>BOOK A SESSION</Link></li>
        <li><Link>ARCHITECTURE</Link></li>
    </ul>
  )
}

export default PortDrop