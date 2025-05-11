import React, { useEffect, useState } from 'react'
import heroBg from '../assets/images/herobgImg'


function HeroSection() {
    const [curImgIndex, setCurImgIndex] = useState(0);

        useEffect(() => {
            const intervalId = setInterval(() => {
              setCurImgIndex((prevIndex) => (prevIndex + 1) % heroBg.length);
            }, 10000);
      
            return () => clearInterval(intervalId);
    }, [heroBg.length])

  return (
    <div className={`h-screen w-full bg-cover `}
    style={{backgroundImage: `url(${heroBg[curImgIndex]})`}}
    >
      
    </div>
  )
}

export default HeroSection