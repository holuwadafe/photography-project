import React from 'react';
import MyWorkCardd from '../component/MyWorkCardd';


import wedding from "../assets/images/wedding.jpg"
import arc from "../assets/images/arc.jpg"
import portfolio from "../assets/images/portfolio.jpg"
import port from "../assets/images/port.jpg"
import fashion from "../assets/images/fashion.jpg"


function Portfolio() {

  const aboutCard = [
    {
      "photo": wedding,
      "title": "Weddings",
      "quote": "THE BIG DAY",
    },
    {
      "photo": port,
      "title": "Portrait",
      "quote": "BASK IN GREAT LIGHT",
    },
    {
      "photo": fashion,
      "title": "Fashion",
      "quote": "EXPRESS YOURSELF",
    },
    {
      "photo": arc,
      "title": "Architecture",
      "quote": "LIVING STRUCTURES",
    }
  ]

  return (
    <>
      <div className="h-screen w-full bg-cover flex justify-center items-center "
        style={{ backgroundImage: `url(${portfolio})` }}>
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