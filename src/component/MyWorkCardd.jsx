import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Route } from 'react-router-dom';

function MyWorkCardd({ photo, title, quote }) {
    console.log(title)

    const handleClick = () => {
        alert("LEAVE ME ALONE")
        
    }
    return (
        <div className='flex flex-col hover:scale-100 transition-all duration-300
        cursor-pointer' onClick={handleClick}>
            {/* image container */}
            <div className='container px-4'>
                <img src={photo} alt='my work' />
            </div>

            <div className='mx-auto my-4 flex flex-col'>
                <h2 className='text-2xl'>{title}</h2>
            {
                quote? (<h3 className='my-4'>{quote}</h3>) : " "
            }
                <div className='flex justify-center my-4'>
                    <FaLongArrowAltRight />
                </div>
            </div>
        </div>
    )
}

export default MyWorkCardd;
