import React from 'react'

const Work = () => {
    return (
        <div className='max-w-screen-lg select-none text-center text-zinc-300 relative py-6 mx-auto'>
            <div className="absolute top-[-60px] w-[300px] left-[-200px] h-[300px] " style={{ background: 'radial-gradient(circle, rgba(0, 255, 170, 0.5), rgba(0, 0, 0, 0))', filter: 'blur(125px)', zIndex: 0, }}></div>
            <div className="absolute w-[300px] right-[-200px] bottom-[-70px] h-[300px] " style={{ background: 'radial-gradient(circle, rgba(0, 255, 170, 0.5), rgba(0, 0, 0, 0))', filter: 'blur(125px)', zIndex: 0, }}></div>
            <div className='text-[30vw] leading-none tracking-tight font-medium font-sans'>work</div>
        </div>
    )
}

export default Work