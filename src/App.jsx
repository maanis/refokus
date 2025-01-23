import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'

const App = () => {
    return (
        <>
            <div className='h-screen w-full bg-zinc-900'>
                <Navbar />
                <Work />
            </div>
        </>
    )
}

export default App