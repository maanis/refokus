import React from 'react'
import Button from './Button'

const Product = ({ title, description, btn2 }) => {
    return (
        <div className='w-full relative'>
            <div className='max-w-screen-lg relative h-[14rem] flex items-center justify-between mx-auto'>

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
    )
}

export default Product