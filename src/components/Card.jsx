import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";


const Card = ({ start, para, text, width, hover = 'none' }) => {
    return (
        <div className={`min-h-[24rem] ${start ? 'max-md:min-h-[18rem]' : 'max-md:min-h-[8rem]'} ${hover} transition-all rounded-md p-5 max-md:p-4 flex flex-col justify-between bg-zinc-800 ${width}`}>
            <div className='flex flex-col justify-between  h-full hover:p-[4px] transition-all'>
                <div>
                    <div className='flex justify-between'>
                        <h3 className='text-sm max-sm:text-xs'>One Heading</h3>
                        <MdArrowRightAlt className='text-xl' />
                    </div>
                    <h2 className='text-2xl font-medium mt-5 max-md:mt-1 pr-8 max-sm:text-lg'>{text}</h2>
                </div>
                {start && <div>
                    <h2 className='max-md:mt-[8rem] text-6xl leading-none tracking-tight max-sm:text-5xl font-semibold'>Start A Project</h2>
                    <button className='px-4 mt-2 py-1 rounded-full border-[2px] max-sm:text-xs border-zinc-400'>Contact Us</button>
                </div>}
                {para && <p className='text-xs text-zinc-400 font-medium max-md:mt-[3rem]'>Explore what drives our team</p>}
            </div>
        </div>
    )
}

export default Card