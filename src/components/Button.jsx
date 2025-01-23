import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = () => {
    return (
        <button className='flex justify-between items-center gap-6 bg-white px-3 py-[6px] rounded-full'>
            <span className='text-sm font-medium'>Get Started</span>
            <IoIosReturnRight />
        </button>
    )
}

export default Button