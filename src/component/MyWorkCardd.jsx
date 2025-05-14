import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Route } from 'react-router-dom';

function MyWorkCardd({ photo, title, quote }) {
    console.log(title)

    const handleClick = () => {
        
    }
    return (
        <div className='flex flex-col duration-300 cursor-pointer group' onClick={handleClick}>
            {/* image container */}

            <div className='container px-4 ease-in-out group-hover:opacity-90'>
                <img src={photo} alt='my work' />
                {/* <div className='absolute inset bg-gradient from-black/10 via-black/30 to-black/60 w-full h-full z-20 ' /> */}
            </div>

            <div className='mx-auto my-4 flex flex-col'>
                <h2 className='text-2xl'>{title}</h2>
            {
                quote? (<h3 className='my-4'>{quote}</h3>) : " "
            }
                <div className='flex justify-center my-4 ease-in-out group-hover:translate-x-1'>
                    <FaLongArrowAltRight />
                </div>
            </div>
        </div>
    )
}

export default MyWorkCardd;
