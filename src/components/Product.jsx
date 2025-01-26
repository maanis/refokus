import React, { useState } from 'react'
import Button from './Button'

const Product = ({ title, description, btn2, gradient, index, show, setPos }) => {
    const [grad, setgrad] = useState('')
    return (
        <div className='w-full relative'>
            <div onMouseEnter={() => setPos({ y: index * 14, show: true })} onMouseLeave={() => setPos(prev => ({ ...prev, show: false }))} className='relative h-[14rem] flex items-center justify-between mx-auto'>

                <div onMouseEnter={() => setgrad(gradient)} onMouseLeave={() => setgrad('')} className={`flex justify-between items-center w-screen px-64 transition-all py-4 ${grad}`}>
                    <h2 className='capitalize text-6xl font-semibold '>{title}</h2>
                    <div className='w-1/3'>
                        <p className='mb-6'>{description}</p>
                        <div className="flex gap-2">

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