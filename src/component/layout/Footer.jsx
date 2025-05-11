import React from 'react'

function Footer() {
  return (
    <div>
       <div className='flex gap-20 p-15 line-height-[20px]'>
      <div>
        <button>
          <ul className='text-left'>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
          </ul>
        </button>
        </div>
        <div>
          <button className='text-left'>
          <ul>
            <li>Contact</li>
            <li>Blog</li>
            <li>Learn</li>
          </ul>
          </button>
        </div>
        <hr />
      </div>
      <div>
      <h3>All content Copyright © 2025 Emmanuel Oyeleke</h3>
      <hr />
    </div>
    </div>
  )
}

export default Footer