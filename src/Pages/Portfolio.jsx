import React from 'react';
import MyWorkCardd from '../component/MyWorkCardd';


import aboutimg from '../assets/images/aboutimg.jpg';
import abt1 from "../assets/images/abt1.jpg"
import abt2 from "../assets/images/abt2.jpg"
import abt3 from "../assets/images/abt3.jpg"
import abt4 from "../assets/images/abt4.jpg"


function Portfolio() {

  const aboutCard = [
    {
      "photo": abt1,
      "title": "Weddings",
      "quote": "THE BIG DAY",
    },
    {
      "photo": abt2,
      "title": "Portrait",
      "quote": "BASK IN GREAT LIGHT",
    },
    {
      "photo": abt3,
      "title": "Fashion",
      "quote": "EXPRESS YOURSELF",
    },
    {
      "photo": abt4,
      "title": "Architecture",
      "quote": "LIVING STRUCTURES",
    }
  ]

  return (
    <>
      <div className="h-screen w-full bg-cover flex justify-center items-center "
        style={{ backgroundImage: `url(${aboutimg})` }}>
        <div className='text-white text-[30px]'>
          <h1>My Portfolio</h1>
        </div>
      </div >

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

export default Portfolio;