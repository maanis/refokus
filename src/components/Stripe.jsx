import React from 'react'

const Stripe = ({ data, index }) => {
    return (
        <div className={`${index === 0 && 'border-l'} mt-10 border-b border-zinc-600 border-t border-r px-4 w-full flex items-center justify-between py-4`}>
            <img src={data.url} className='w-32' alt="" />
            <span className='text-white text-lg'>{data.number}</span>
        </div>
    )
}

export default Stripe