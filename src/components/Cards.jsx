import React from 'react'
import Card from './Card'

const Cards = () => {
    return (
        <div className='w-full py-32 max-md:py-20'>
            <div className='max-w-screen-lg max-lg:px-7 max-md:flex-col mx-auto gap-2 flex'>
                <Card width={'basis-[30%]'} text='Insights and behind the scenes' start={false} para={true} />
                <Card hover='hover:bg-violet-700' width={'basis-[70%]'} text={"Let's get it, together."} start={true} para={false} />
            </div>
        </div>
    )
}

export default Cards