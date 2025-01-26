import React, { useState } from 'react'
import Button from './Button'

const Product = ({ title, description, btn2, gradient, index, show, setPos }) => {
    const [grad, setgrad] = useState('')
    return (
        <div className='w-full relative'>
            <div onMouseEnter={() => setPos({ y: index * 14, show: true })} onMouseLeave={() => setPos(prev => ({ ...prev, show: false }))} className='relative h-[14rem] flex items-center justify-between mx-auto'>

                <div onMouseEnter={() => setgrad(gradient)} onMouseLeave={() => setgrad('')} className={`flex max-sm:flex-col max-sm:items-start justify-between items-center w-screen px-64 max-[1190px]:px-40 max-lg:px-14 max-md:px-6 transition-all py-4 ${grad}`}>
                    <h2 className='capitalize text-6xl font-semibold max-[890px]:text-4xl max-sm:text-5xl max-sm:mb-3 max-[498px]:text-3xl max-[498px]:mb-1'>{title}</h2>
                    <div className='w-1/3 max-lg:w-1/3 max-sm:w-[40%]'>
                        <p className='mb-6 max-[890px]:text-sm max-[890px]:mb-3 max-md:text-xs max-[640px]:text-[10px] max-[498px]:text-[8px] max-sm:leading-[10px] '>{description}</p>
                        <div className="flex gap-2 max-[840px]:flex-col max-[840px]:w-32 max-sm:w-32 max-[400px]:w-24 ">

                            <Button />
                            {btn2 && <Button text='Case Study' />}
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Product