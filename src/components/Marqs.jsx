import React from 'react'
import Marq from './Marq'

const Marqs = () => {
    return (
        <div className='mt-24 max-md:mt-16 max-sm:mt-4'>
            <Marq dir={'left'} />
            <Marq dir={'right'} />
        </div>
    )
}

export default Marqs