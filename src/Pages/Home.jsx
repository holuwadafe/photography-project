import React from 'react'
import Layout from '../component/layout/Layout'
import HeroSection from '../component/HeroSection'
import MyWorkCard from '../component/MyWorkCardd'



import portrait1 from "../assets/images/portrait.jpg"
import portrait2 from "../assets/images/portrait-2.jpg"
import portrait3 from "../assets/images/portrait-3.jpg"

function home() {

  const myWork = [
    {
      "photo": portrait1,
      "title": "Portrait",
    },
    {
      "photo": portrait2,
      "title": "Fashion",
    },
    {
      "photo": portrait3,
      "title": "Commercial",
    },
  ]

  return (
    <div>
      <HeroSection />
      <div className='text-black bg-white grid place-items-center p-8'>
        <h1 className='text-[30px] line-height-[20px]'>Hi, I am Emmanuel.</h1>
        <p className='text-[15px] leading-8 text-left pb-10 '>With over a decade's worth of professional creative work, I have excelled at my core values which are<br />
          finding simple solutions to problems and delivering happiness especially through my images. <br />
          I'm visual artist, Tech Enthusiast, sports buff and Creative Director of Zen Backdrops, Zen Studios and <br />
          Emmanuel Oyeleke Photography.</p>
      </div>
      <hr className='color-black p-50px' />

      <div>
        <div className='py-12 mx-auto w-full text-center'>
          <h1 className='text-2xl'>See My Work </h1>
        </div>

        <div className='flex my-2'>
          {
            myWork.map((work) => (

              <MyWorkCard photo={work.photo} title={work.title}  />
            ))
          }
        </div>
      </div>
      <div className='text-2xl text-center'>
      <button className='text-white bg-orange-700 px-2, py-4'>See More Galleries</button> 
      </div>
    </div>
    
  )
}

export default home