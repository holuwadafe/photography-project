import React from 'react'
import camera from '../assets/images/camera.jpg'
import person1 from '../assets/images/person1.jpg'

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

      <div className='flex gap-20 mx-width p-20 '>
        <div className=''>
          <img src={person1} width={600} height={70} alt="me" />
        </div>

        <div className='line-height-[20px] text-left'>
          <p>Emmanuel Oyeleke, a visual artist, Tech Enthusiast <br />
            and the Creative Director of Emmanuel Oyeleke <br />
            Photography.</p>

          <p>Emmanuel Oyeleke is a Canon Ambassador and has <br />
            won several awards in Nigeria and Africa including <br />
            Future Awards Prize for Photography 2018 and <br />
            The ASFA Fashion Photographer of the year <br />
            (Africa)  2018, Fashions Finest Award for Fashion <br />
            Photographer of the year 2019  and many others.</p>

          <p>His portfolio includes editorials for some of the <br />
            country’s most distinguished designers. Works for <br />
            other brands include Coca Cola, Zaron Cosmetics, <br />
            GTBank, Samsung, Williston Northampton <br />
            School, Unilever, Darling Nigeria to mention a few <br />
            and has been featured on CNN Africa Avantgarde. <br />
            Notable commissions and collaborations include Martell, <br />
            Jameson, Absolut, Canon, Tecno Mobile, <br />
            Mitsubishi Motors and UNICEF.</p>

          <p>He is the founder and creative director of Zen <br />
            Studios, ZenStudios is a fully equipped photo studio <br />
            and creative workspace located in Ilupeju, Lagos. <br />
            He is also the director of Zen Photographics, a <br />
            photography/creative solutions provider and <br />
            servicing company whose primary objective is to <br />
            provide photographers and creatives with <br />
            homegrown innovative solutions to all their <br />
            creative needs. <br />
            Other commissions include official portraits for the <br />
            President of Federal Republic of Nigeria, <br />
            Campaign for Polo Avenue, Campaign for Netflix, <br />
            GTBank, Amazon Prime, Coca Cola, Radisson Hotel, <br />
            Lagos and many others</p>

        </div>
      </div>
      <div className='items-center w-full'>
        <div>
          <h1>As featured in</h1>
        </div>
        <div className=''>
          <ul className='flex gap-5'>
            <li>TedX Lagos</li>
            <li>Canon Europe</li>
            <li>CNN Avantgarde</li>
            <li>Y Naija</li>
            <li>This Day</li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default About;