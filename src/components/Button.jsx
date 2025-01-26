import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ text = 'Get Started', hide = false }) => {
    return (
        <button className={`flex justify-between items-center bg-white px-3 md:w-32 max-sm:px-2 max-sm:py-[3px] py-[6px] rounded-full max-md:${hide && 'hidden'}`}>
            <span className='text-sm text-black font-medium whitespace-nowrap max-[400px]:text-xs'>{text}</span>
            <IoIosReturnRight className='text-black max-[400px]:text-xs' />
        </button>
    )
}

export default Button