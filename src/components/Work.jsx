import { useMotionValueEvent, useScroll } from 'framer-motion'
import React, { useState } from 'react'
import Cursor from './Cursor';

const Work = () => {
    const [images, setimages] = useState([
        { url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-1080.webp', top: '50%', left: '50%', z: 0, isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204.png', top: '56%', left: '46%', z: 10, isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp', top: '46%', left: '58%', z: 20, isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11.jpg', top: '60%', left: '54%', z: 30, isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-1080.webp', top: '67%', left: '49%', z: 40, isActive: false },

    ])
    const { scrollY, scrollYProgress } = useScroll();

    const showImg = (val) => {
        setimages(prev => (
            prev.map((img, index) => (
                val.indexOf(index) === -1 ? { ...img, isActive: false } : { ...img, isActive: true }
            ))
        ))
    }

    useMotionValueEvent(scrollYProgress, "change", (latest) => {

        switch (Math.floor(latest * 100)) {
            case 0:
                showImg([])
                break;
            case 2:
                showImg([0])
                break;
            case 4:
                showImg([0, 1])
                break;
            case 5:
                showImg([0, 1, 2])
                break;
            case 6:
                showImg([0, 1, 2, 3])
                break;
            case 7:
                showImg([0, 1, 2, 3, 4])
                break;
        }
    });
    return (
        <div className='max-w-screen-lg max-md:max-w-screen-2xl max-lg:min-h-[60vh] max-md:min-h-[70vh]  flex justify-center items-center select-none text-center text-zinc-300 relative py-8 mx-auto'>
            <div className="absolute  top-[-60px] w-[300px] left-[-200px] h-[300px] " style={{ background: 'radial-gradient(circle, rgba(0, 255, 170, 0.3), rgba(0, 0, 0, 0))', filter: 'blur(135px)', zIndex: 0, }}></div>
            <div className="absolute w-[300px] right-[-200px] bottom-[-70px] h-[300px] " style={{ background: 'radial-gradient(circle, rgba(0, 255, 170, 0.3), rgba(0, 0, 0, 0))', filter: 'blur(135px)', zIndex: 0, }}></div>
            <div className='text-[30vw] leading-none tracking-tight font-medium font-sans max-md:text-[40vw]'>work</div>
            {images.map((img, index) => img.isActive && <img key={index} src={img.url} className={`absolute z-${img.z} w-72 max-lg:w-56 max-md:w-40  rounded-lg object-cover -translate-x-1/2 -translate-y-1/2`} style={{ top: img.top, left: img.left }} />)}
        </div>
    )
}

export default Work