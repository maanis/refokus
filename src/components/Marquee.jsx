import React from 'react'

const Marquee = ({ imgs }) => {
    return (
        <div className='flex gap-10 py-12 overflow-x-hidden'>
            {imgs.map((img, i) => <img key={i} src={img} className='w-28 flex-shrink-0' />)}
            {imgs.map((img, i) => <img key={i} src={img} />)}
        </div>
    )
}

export default Marquee