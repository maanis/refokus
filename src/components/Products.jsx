import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'
import video1 from '../assets/vid1.webm'
import video2 from '../assets/vid2.mp4'
import video3 from '../assets/vid3.webm'
import video4 from '../assets/vid4.webm'

const Products = () => {
    const products = [
        {
            id: 1,
            title: 'Arqitel',
            description: 'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.',
            btn2: false,
            gradient: `bg-gradient-to-r from-[rgba(4,0,69,1)] via-[rgba(80,6,130,1)] to-[rgba(0,212,255,1)]`

        },
        {
            id: 2,
            title: 'cula',
            description: `We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes.`,
            btn2: false,
            gradient: `bg-[radial-gradient(circle,_rgba(238,174,202,1)_0%,_rgba(148,187,233,1)_100%)]`
        },
        {
            id: 3,
            title: 'TTR',
            description: `We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.`,
            btn2: true,
            gradient: `bg-[linear-gradient(123deg,_rgba(16,16,31,1)_0%,_rgba(46,91,145,1)_100%)]`
        },
        {
            id: 4,
            title: 'YIR',
            description: `We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen.`,
            btn2: false,
            gradient: `bg-gradient-to-r from-yellow-400 via-red-500 to-orange-400`
        }

    ]
    const [pos, setpos] = useState({ y: 0, show: false })

    return (
        <div className='mt-24 max-md:mt-16 max-sm:mt-10 relative'>
            {products.map((product, index) => (
                <div key={index}>
                    <Product title={product.title} show={pos.show} index={index} gradient={product.gradient} setPos={setpos} description={product.description} btn2={product.btn2} />
                    <div className="absolute h-full w-full top-[0] pointer-events-none">

                        <motion.div initial={{ y: 0, x: "-50%" }} transition={{ ease: [0.87, 0, 0.13, 1], duration: .6 }} animate={{ y: pos.y + `rem` }} className="window h-[14rem] max-sm:w-48 w-80 max-md:w-64 absolute overflow-hidden pointer-events-none  left-[45%] max-[1190px]:left-[46%] max-[890px]:left-[43%] max-md:left-[42%] max-sm:left-[74%] max-[390px]:left-[72%] max-[390px]:w-40 -translate-x-1/2">
                            <motion.div animate={{ y: -pos.y + `rem` }} className=" h-full w-full"><video width={"450px"} transition={{ ease: [0.87, 0, 0.13, 1], duration: .5 }} src={video1} autoPlay muted loop className={`w-full h-full rounded-lg object-cover ${!pos.show ? 'hidden' : ''}`}></video></motion.div>
                            <motion.div animate={{ y: -pos.y + `rem` }} className=" h-full w-full"><video width={"450px"} transition={{ ease: [0.87, 0, 0.13, 1], duration: .5 }} src={video2} autoPlay muted loop className={`w-full h-full rounded-lg object-cover ${!pos.show ? 'hidden' : ''}`}></video></motion.div>
                            <motion.div animate={{ y: -pos.y + `rem` }} className=" h-full w-full"><video width={"450px"} transition={{ ease: [0.87, 0, 0.13, 1], duration: .5 }} src={video3} autoPlay muted loop className={`w-full h-full rounded-lg object-cover ${!pos.show ? 'hidden' : ''}`}></video></motion.div>
                            <motion.div animate={{ y: -pos.y + `rem` }} className=" h-full w-full"><video width={"450px"} transition={{ ease: [0.87, 0, 0.13, 1], duration: .5 }} src={video4} autoPlay muted loop className={`w-full h-full rounded-lg object-cover ${!pos.show ? 'hidden' : ''}`}></video></motion.div>
                        </motion.div>
                    </div >
                </div>
            ))
            }
        </div >
    )
}

export default Products