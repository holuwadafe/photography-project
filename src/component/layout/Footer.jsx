import React from 'react'
import insta from '../../assets/images/insta.png'
import youtube from '../../assets/images/youtube.jpeg'

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
      <hr/>
      <div className='p-5 flex justify-between items-center'>
        <h3>All content Copyright © 2025 Emmanuel Oyeleke</h3>
        <div className='flex justify-between'>
          <a href=""><img src={insta} width={30} height={30} alt="instapng" /></a>
          <a href=""><img src={youtube} width={30} height={30} alt="youtubejpg" /></a>
        </div>
      </div>
      <hr className='pb-10' />
    </div>
  )
}

export default Footer