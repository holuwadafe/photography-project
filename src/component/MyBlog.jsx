import React from 'react'
import { useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function MyBlog({backImg, date, title, subTitle}) {
    // const {backImg, date, title, subTitle} = props
      const [isHover, setIsHover] = useState(false)
  return (
    <div>
        <div style={{ backgroundImage: `url(${backImg})`, height: "90vh", backgroundSize: 'cover' }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className='flex flex-col items-center justify-center text-center mx-auto text-white'
        >
          {isHover ? (<div className=''>
            <h1>{date}</h1>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <div className='flex justify-center'>
            <FaLongArrowAltRight />
            </div>
          </div>) : ''
          }

        </div>
    </div>
  )
}

export default MyBlog