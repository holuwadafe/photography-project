import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function DropDown() {


  return (
        <ul className='w-[240px] bg-white absolute text-gray-300 hover:text-black p-6 text-center '>
            <li><Link to='photography'>PHOTOGRAPHY</Link> </li>
            <li><Link to="lighting-course">LIGHTING COURSE</Link></li>
            <li><Link to="revealed">REVEALED</Link></li>
        </ul>
        
  )
}


export default DropDown