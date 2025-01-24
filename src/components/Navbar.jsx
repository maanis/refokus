import React from 'react'
import Button from './Button'

const Navbar = () => {
    return (
        <div className='max-w-screen-lg border-b-[1px] border-zinc-700 mx-auto flex justify-between items-center px-3 py-6'>
            <div className="flex gap-16">
                <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                <div className="flex items-center gap-6">
                    {['Home', 'Worker', 'Culture', '', 'News'].map((item, index) => (
                        item.length === 0 ? <span key={index} className='w-[1px] h-6  bg-zinc-600'></span> : <a key={index} href="#" className="text-white text-sm font-semibold flex items-center gap-1 mx-4">
                            {index === 1 && (<span key={index} className='w-[6px] h-[6px] bg-green-400 rounded-full inline-block' style={{ boxShadow: 'rgb(0, 255, 25) 0px 0px 0.45em' }}></span>)}
                            {item}
                        </a>
                    ))}
                </div>
            </div>
            <Button />
        </div>
    )
}

export default Navbar