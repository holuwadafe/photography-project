import React from 'react'
import camera from '../assets/images/camera.jpg'
import person1 from '../assets/images/person1.jpg'
import test1 from '../assets/images/test1.jpg'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <div className="h-screen w-full bg-cover flex justify-center items-center "
        style={{ backgroundImage: `url(${camera})` }}>
        <div className='text-white text-[30px]'>
          <h1>About Me</h1>
          <h3 className='text-white text-[10px]'>GET TO KNOW ME A LITTLE BETTER</h3>
        </div>
      </div >

      <div className='flex justify-between mx-width p-30 items-center '>
        <div className=''>
          <img src={person1} alt="me" />
        </div>
        
        <div className='line-height-[15px] text-left pl-40'>
          <div>
            <h1 className='text-[30px] pb-5'>Hi, I am Emmanuel.</h1>
        </div>
          <p className='pb-5'>Emmanuel Oyeleke, a visual artist, Tech Enthusiast and the
             Creative <br /> Director of Emmanuel Oyeleke Photography.</p>
          <p className='pb-5'>Emmanuel Oyeleke is a Canon Ambassador and has won several awards in 
           Nigeria and Africa including Future Awards Prize for Photography 2018 
            and The ASFA Fashion Photographer of the year (Africa)  2018, Fashions 
             Finest Award for Fashion Photographer of the year 2019  and many others.</p>

          <p className='pb-5'>His portfolio includes editorials for some of the country’s most distinguished <br />
           designers. Works for other brands include Coca Cola, Zaron Cosmetics, <br />
            GTBank, Samsung, Williston Northampton School, Unilever, Darling 
             Nigeria to mention a few and has been featured on CNN Africa 
              Avantgarde. <br />
               Notable commissions and collaborations include Martell, Jameson, Absolut, <br />
                Canon, Tecno Mobile, Mitsubishi Motors and UNICEF.</p>

          <p className='pb-5'>He is the founder and creative director of Zen Studios, ZenStudios is a fully <br />
           equipped photo studio and creative workspace located in Ilupeju, Lagos. He <br />
             is also the director of Zen Photographics, a photography/creative solutions <br />
             provider and servicing company whose primary objective is to provide <br />
              photographers and creatives with homegrown innovative solutions to all <br />
               their creative needs. <br />
             Other commissions include official portraits for the President of Federal <br />
             Republic of Nigeria, Campaign for Polo Avenue, Campaign for Netflix, <br /> 
            GTBank, Amazon Prime, Coca Cola, Radisson Hotel, Lagos and many <br />
             others</p>

        </div>
      </div>
      <div className='items-center text-center w-full'>
        <div className='pb-10'>
          <h1>AS FEATURED IN</h1>
        </div>
        <div className=''>
          <ul className='flex gap-10 justify-center'>
            <a href=""><li>TedX Lagos</li></a>
            <a href=""><li>Canon Europe</li></a>
            <a href=""><li>CNN Avantgarde</li></a>
            <a href=""><li>Y Naija</li></a>
            <a href=""><li>This Day</li></a>
          </ul>
        </div>
        <div className='flex p-20 flex justify-between items-center'>
          <div className='text-left p-20'>
            <h1 className='pb-20 text-[50px]'>Testimonials</h1>
            <h3 className=' text-[20px]'>"i'm so happy! Everyone loves my pictures. I really
               appriciate you. The patience is out of the world. I wanted to play with clothes and i did. God bless you" </h3>
            <h2 className=''>-MRS ONABANJO</h2>
          </div>
          <div className='pl-40'><img src={test1}  alt='testimg'></img></div>
        </div>
          <button className='bg-gray-400 p-3 '><a href="contact">contact</a></button>
      </div>

    </>
  )
}

export default About;