import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'

const App = () => {
    return (
        <>
            <div className='h-screen w-full bg-zinc-900'>
                <Navbar />
                <Work />
                <Stripes />
            </div>
        </>
    )
}

export default App