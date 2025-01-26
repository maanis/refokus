import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ text = 'Get Started', hide = false }) => {
    return (
        <button className={`flex justify-between items-center gap-6 bg-white px-3 py-[6px] rounded-full max-md:${hide ? 'hidden' : 'block'}`}>
            <span className='text-sm text-black font-medium'>{text}</span>
            <IoIosReturnRight className='text-black' />
        </button>
    )
}

export default Button