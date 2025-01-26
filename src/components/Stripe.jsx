import React from 'react'

const Stripe = ({ data, index }) => {
    return (
        <div className={`${index === 0 && 'border-l'} ${index > 3 && 'max-md:hidden'} border-b border-zinc-600 border-t border-r px-4 max-lg:px-2 max-md:flex-col w-full flex items-center justify-between py-4 max-md:py-2`}>
            <img src={data.url} className='w-32 max-[1100px]:w-20 max-sm:w-[65px]' alt="" />
            <span className='text-white text-lg max-[1100px]:text-sm max-md:mt-1 max-sm:text-xs'>{data.number}</span>
        </div>
    )
}

export default Stripe