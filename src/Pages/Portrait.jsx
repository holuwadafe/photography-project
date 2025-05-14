
import React, { useEffect, useState } from 'react'
import MyWorkCardd from '../component/MyWorkCardd'


import twoimg from '../assets/images/twobgimg'
import pcard1 from '../assets/images/pcard1.jpg'
import pcard2 from '../assets/images/pcard2.jpg'
import pcard3 from '../assets/images/pcard3.jpeg'
import pcard4 from '../assets/images/pcard4.jpg'
import pcard5 from '../assets/images/pcard5.jpg'
import pcard6 from '../assets/images/pcard6.jpg'

function Portrait() {

  const [defImg, setDefImgIndex] = useState(0);

        useEffect(()=> {
        const intervalId = setInterval(() => {
          setDefImgIndex((prevIndex) => (prevIndex + 1) % twoimg.length);
        }, 10000);

        return () => clearInterval(intervalId);
  }, [twoimg.length])

  const aboutCard = [
    {
      "photo": pcard1,
      "title": "Joan",
      "quote": "LAGOS, NIGERIA",
    },
    {
      "photo": pcard2,
      "title":"Onyeka",
      "quote": "LAGOS, NIGERIA",
    },
    {
      "photo": pcard3,
      "title": "Chiazor",
      "quote": "LAGOS, NIGERIA",
    },
    {
      "photo": pcard4,
      "title": "Chalya",
      "quote": "MARRAKECH, MOROCCO",
    },
    {
      "photo": pcard5,
      "title": "Jemimah",
      "quote": "LAGOS, NIGERIA",
    },
    {
      "photo": pcard6,
      "title": "Tansey",
      "quote": "JOHANNESBURG, SOUTH AFRICA"
    },
  ]

  return (
    <>
    <div className={`h-screen w-full bg-cover`} style={{backgroundImage: `url(${twoimg[defImg]})`}}></div>
    <div className='flex justify-center items-center p-15'>
      <h1 className=' leading-[2] text-left'>Renowned portrait photographer known for his ability to capture the essence and beauty of his
         subjects <br /> through his lens. His portraits are often described as exquisite and captivating, showcasing
          the uniqueness of <br /> each individual in a powerful and emotive way. <br />
          Emmanuel's approach to portrait photography is not just about capturing a pretty picture, but about
           telling a <br /> story and capturing the essence of his subject. He has a gift for making his subjects feel
            at ease, allowing <br /> them to be themselves in front of the camera.</h1>
    </div>

     <div className='grid grid-cols-2 gap-8 text-center m-12 p-4' >
          {
            aboutCard.map((work) => (

              <MyWorkCardd photo={work.photo} title={work.title} quote={work.quote} />
            ))
          }
        </div>

    </>
    
  )
}

export default Portrait;