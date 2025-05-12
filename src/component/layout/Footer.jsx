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
      <div className='p-15'>
        <hr className='pt-6' />
        <h3 className='pb-6'>All content Copyright © 2025 Emmanuel Oyeleke</h3>
        <hr className='pb-10' />
      </div>
    </div>
  )
}

export default Footer