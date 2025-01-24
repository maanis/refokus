import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";

const Card = ({ start, para, text, width }) => {
    return (
        <div className={`min-h-[24rem] rounded-md p-4 flex flex-col justify-between bg-zinc-800 ${width}`}>
            <div>
                <div className='flex justify-between'>
                    <h3 className='text-sm'>One Heading</h3>
                    <MdArrowRightAlt />
                </div>
                <h2 className='text-2xl font-medium mt-3 w-[60%]'>{text}</h2>
            </div>
            {start && <div>
                <h2 className=' text-6xl leading-none tracking-tight font-semibold'>Start A Project</h2>
                <button className='px-4 mt-2 py-1 rounded-full border-[2px] border-zinc-700'>Contact Us</button>
            </div>}
            {para && <p className='text-xs text-zinc-400 font-medium'>Explore what drives our team</p>}
        </div>
    )
}

export default Card